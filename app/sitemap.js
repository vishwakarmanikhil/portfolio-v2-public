export default function sitemap() {
    return [
        {
            url: 'https://nikhilvishwakarma.com/',
            lastModified: new Date(),
            changeFrequency: 'montly',
            priority: 1,
        },
        {
            url: 'https://nikhilvishwakarma.com/archive',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }
    ]
}