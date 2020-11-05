/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal metadata search results panel scroll spy component.
 */

// Core dependencies
import {useEffect} from "react";

function MetadataSearchResultsPanelScrollSpy(props) {

    const {children, activeResultEl} = props;

    /* useEffect - componentDidUpdate - activeResultEl. */
    /* Handles scrolling to maintain visibility of any active result. */
    useEffect(() => {

        if ( activeResultEl ) {

            const {offsetHeight, offsetParent, offsetTop} = activeResultEl,
                {clientHeight, scrollTop} = offsetParent;

            /* Keep to top view. */
            /* Note, scroll-margin-top added to classname "result". */
            /* Prevents result from scrolling to position under result panel hero. */
            if (offsetTop - scrollTop < 60) {

                activeResultEl.scrollIntoView({block: "start"});
            }
            /* Keep to bottom view. */
            else if (offsetTop + offsetHeight - scrollTop > clientHeight) {

                activeResultEl.scrollIntoView({block: "end"});
            }
        }
    }, [activeResultEl]);

    return (
        children
    )
}

export default MetadataSearchResultsPanelScrollSpy;