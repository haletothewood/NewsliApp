
export default function Article (headline, url, image, summary) {

    function showHeadline() {
        return headline;
    }

    function showSummary() {
        return summary;
    }

    function showUrlToFullStory() {
        return url;
    }

    function featureImage() {
        return image;
    }

    return {
        showHeadline: showHeadline,
        showSummary: showSummary,
        showUrlToFullStory: showUrlToFullStory,
        featureImage: featureImage
    };
};