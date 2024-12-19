export function getLastPartOfUrl(url: string): string {
    // Split the URL by '/' and return the last part of the array
    const parts = url.split('/');
    return parts[parts.length - 1];
}