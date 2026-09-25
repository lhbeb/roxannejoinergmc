type ProductCondition = {
  value: string;
  label: string;
  tooltip: string;
  shortLabel: string;
  aliases?: string[];
};

export const PRODUCT_CONDITIONS: ProductCondition[] = [
  {
    value: "Brand New",
    shortLabel: "Brand New",
    label: "Brand New (Never used • Sealed or open-box but untouched • Comes with everything)",
    tooltip: "Never used. Sealed or open-box but untouched. Comes with everything.",
    aliases: ["🟢 New / Brand New", "New", "NEW"],
  },
  {
    value: "New With Tags",
    shortLabel: "New With Tags",
    label: "New With Tags (Unused • Original tags still attached • Clean and untouched)",
    tooltip: "Unused item with original tags still attached. Clean, untouched, and ready to wear or gift.",
    aliases: [],
  },
  {
    value: "Mint",
    shortLabel: "Mint",
    label: "Mint (Looks basically brand new • No visible scratches or wear • Fully functional)",
    tooltip: "Looks basically brand new. No visible scratches or wear. Fully functional.",
    aliases: ["🟢 Mint / Like New", "Like New", "LIKE NEW"],
  },
  {
    value: "Open Box",
    shortLabel: "Open Box",
    label: "Open Box (Opened for inspection • Little to no use • Includes essential contents)",
    tooltip: "Opened for inspection or display, with little to no use. Includes the essential contents and works as expected.",
    aliases: [],
  },
  {
    value: "Excellent",
    shortLabel: "Excellent",
    label: "Excellent (Very light signs of use • Tiny marks only if you look closely • Works perfectly)",
    tooltip: "Very light signs of use. Maybe tiny marks you have to look closely to see. Works perfectly.",
    aliases: ["🟢 Excellent", "EXCELLENT"],
  },
  {
    value: "Gently Used",
    shortLabel: "Gently Used",
    label: "Gently Used (Noticeable but minor wear • No major damage • Fully functional)",
    tooltip: "Noticeable but minor wear, like small scratches or slight handling marks. No major damage. Fully functional.",
    aliases: ["🟡 Very Good", "Very Good"],
  },
  {
    value: "Used",
    shortLabel: "Used",
    label: "Used (Clear signs of use • Scratches, scuffs, cosmetic wear • Still works fine)",
    tooltip: "Clear signs of use with scratches, scuffs, or cosmetic wear. Still works fine.",
    aliases: ["🟡 Good", "Good", "GOOD"],
  },
  {
    value: "Fair",
    shortLabel: "Fair",
    label: "Fair (Heavy wear and tear • Possible minor issues • Still usable)",
    tooltip: "Heavy wear and tear. Possible minor issues like loose buttons or worn parts. Still usable.",
    aliases: ["🟠 Fair", "FAIR"],
  },
];

function findCondition(conditionValue: string | undefined): ProductCondition | null {
  if (!conditionValue) return null;

  const normalized = conditionValue.trim();
  return (
    PRODUCT_CONDITIONS.find((condition) =>
      condition.value === normalized ||
      condition.shortLabel === normalized ||
      condition.aliases?.includes(normalized)
    ) || null
  );
}

export function getConditionTooltip(conditionValue: string | undefined): string | null {
  return findCondition(conditionValue)?.tooltip || null;
}

export function getConditionDisplayLabel(conditionValue: string | undefined): string | null {
  if (!conditionValue) return null;
  return findCondition(conditionValue)?.shortLabel || conditionValue;
}

export function normalizeConditionValue(conditionValue: string | undefined): string {
  if (!conditionValue) return '';
  return findCondition(conditionValue)?.value || conditionValue;
}

/**
 * Google Merchant Center (GMC) accepts strictly 3 condition values:
 * 1. "new"
 * 2. "refurbished"
 * 3. "used"
 *
 * All second-hand, pre-owned, open box, mint, excellent, gently used, or custom/vintage items
 * MUST map to "used" per Google Merchant Center requirements.
 */
export type GmcCondition = 'new' | 'refurbished' | 'used';

export function mapConditionToGmc(conditionValue: string | undefined): GmcCondition {
  if (!conditionValue) return 'used';

  const c = conditionValue.toLowerCase().trim().replace(/[\s_-]+/g, '');

  if (
    c.includes('brandnew') ||
    c.includes('sealed') ||
    c === 'new' ||
    c === 'newwithtags'
  ) {
    return 'new';
  }

  if (
    c.includes('refurb') ||
    c.includes('renewed') ||
    c.includes('reconditioned')
  ) {
    return 'refurbished';
  }

  // All other resale / second-hand conditions (open box, mint, excellent, gently used, used, fair, etc.)
  // map strictly to 'used' as required by Google Merchant Center.
  return 'used';
}

/**
 * Maps condition to Schema.org ItemCondition URL for Product JSON-LD structured data
 */
export function mapConditionToSchema(conditionValue: string | undefined): string {
  const gmcCondition = mapConditionToGmc(conditionValue);
  switch (gmcCondition) {
    case 'new':
      return 'https://schema.org/NewCondition';
    case 'refurbished':
      return 'https://schema.org/RefurbishedCondition';
    case 'used':
    default:
      return 'https://schema.org/UsedCondition';
  }
}

/**
 * Formats a valid SKU / Product ID for Google Merchant Center & Search Console.
 * Google Merchant Center strictly caps the `id` attribute at 50 characters maximum.
 */
export function formatValidSku(product: { sku?: string; slug?: string; id?: string | number }, fallbackSlug?: string): string {
  const withRoxannePrefix = (value: unknown): string => {
    const cleaned = String(value || '')
      .trim()
      .replace(/[^a-zA-Z0-9_-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .toUpperCase()
      .replace(/^ROXANNE-?/, '');
    const body = cleaned || `ITEM-${String(product.id || '101').replace(/[^a-zA-Z0-9_-]/g, '-')}`;
    return `ROXANNE-${body}`.slice(0, 50).replace(/-+$/g, '');
  };

  // Explicit SKU if provided and <= 50 characters
  if (product.sku && String(product.sku).trim().length >= 3) {
    return withRoxannePrefix(product.sku);
  }

  // Short ID if available (e.g. 101, PROD-12)
  if (product.id && String(product.id).trim().length >= 1 && String(product.id).trim().length <= 40) {
    const cleanId = withRoxannePrefix(product.id);
    if (cleanId.length >= 3 && cleanId.length <= 50) {
      return cleanId;
    }
  }

  // Fallback to slug, truncated to max 45 characters so it strictly fits Google's 50 char limit
  const candidate = String(product.slug || fallbackSlug || product.id || '').trim();
  const cleaned = withRoxannePrefix(candidate);

  if (cleaned.length >= 3) {
    return cleaned;
  }

  return withRoxannePrefix(`ITEM-${String(product.id || '101')}`);
}


