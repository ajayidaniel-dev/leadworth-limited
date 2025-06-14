export const GA_TRACKING_ID: string | undefined = "G-VEENYPJ5M6";

export const pageview = (url: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag("config", GA_TRACKING_ID, {
        page_path: url,
    });
};

export const event = ({
    action,
    category,
    label,
    value,
}: {
    action: string;
    category: string;
    label: string;
    value: number;
}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
