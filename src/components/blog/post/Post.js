import {useEffect, useState} from "react";
import callToAPI from "../../../api";
import {useParams} from "react-router-dom";
import Breadcrumbs from "../../../helpers/breadcrumbs/Breadcrumbs";

const Post = () => {

    const [data, setData] = useState([]);

    const slug = useParams().slug

    useEffect(() => {
        callToAPI(`/blog/post/get/${slug}`, 'get')
            .then((res) => setData(res))
    }, []);

    return(
        <div className={'container'}>
            <Breadcrumbs />
            <div dangerouslySetInnerHTML={{
                    __html: data.content
            }}>

            </div>
        </div>
    )
}

export default Post;