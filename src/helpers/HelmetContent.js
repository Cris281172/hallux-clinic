import {Helmet} from "react-helmet";

const HelmetContent = ({title, desc, noindex = false, script}) => {
    console.log(script)
    return(
        <Helmet>
            {title && <title>{title}</title>}
            {desc && <meta name="description" content={desc} data-react-helmet="true" />}
            {noindex === true && <meta name="robots" content="noindex" />}
            {script &&
                <script type={script.type}>
                    {script.content}
                </script>
            }
        </Helmet>
    )
}

export default HelmetContent;