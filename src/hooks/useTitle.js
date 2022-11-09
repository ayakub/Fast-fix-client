import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Mobile Repair`;
    }, [title])
};

export default useTitle;