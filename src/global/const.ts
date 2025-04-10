export const Data: Record<string, string> = {
    DEVELOPER_NAME: "introduction_header_name",
    DEVELOPER_ROLE: "introduction_header_role_title",
    HOME_ADDRESS: "introduction_contact_address",
    INTRODUCE_MYSELF:"introduction_description",
    SHORTKEY_TITLE:"shortkey_title",
    SHORTKEY_DETAIL:"shortkey_detail"
}

export const I18N_LOCALES = [
    "en",
    "ja",
    "vi",
    "devops"
] as const;

export const I18N_LOCALE_PREFIX = [
    "always",
    "as-needed",
    "never"
] as const
