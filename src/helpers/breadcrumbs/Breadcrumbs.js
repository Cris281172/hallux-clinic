import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from './Breadcrumbs.module.scss';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import {Helmet} from "react-helmet";
import HelmetContent from "../HelmetContent";

const routes = [
    {
        path: '',
        breadcrumb: 'Podolog Hallux.Clinic'
    },
    {
        path: 'qa',
        breadcrumb: 'QA'
    },
    {
        path: 'usluga',
        breadcrumb: 'Usługa'
    }
];

const Breadcrumbs = ({ additionalStyles }) => {
    const breadcrumbs = useBreadcrumbs(routes);
    const location = useLocation();
    const [breadcrumbListJson, setBreadcrumbListJson] = useState('');

    useEffect(() => {
        const breadcrumbList = {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map(({ match, breadcrumb }, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@id": window.location.origin + match.pathname,
                    "name": breadcrumb.props.children // use breadcrumb.props.children to avoid circular references
                }
            }))
        };
        try {
            const jsonString = JSON.stringify(breadcrumbList);
            setBreadcrumbListJson(jsonString);
        } catch (error) {
            console.error("Error creating JSON-LD for breadcrumbs:", error);
        }
    }, [breadcrumbs]);

    if (location.pathname === '/') {
        return null;
    }
    return (
        <>
            <HelmetContent script={{type: 'application/ld+json', script: breadcrumbListJson}} />
            <div className={`${styles.breadcrumbs} ${additionalStyles}`} itemScope itemType="http://schema.org/BreadcrumbList">
                {breadcrumbs.map(({ match, breadcrumb }, index) => (
                    <span className={styles.breadcrumbLinkWrapper} key={match.pathname} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                    <Link to={match.pathname} className={styles.breadcrumbLink} itemProp="item">
                        <span itemProp="name">{breadcrumb}</span>
                    </Link>
                    <meta itemProp="position" content={index + 1} />
                        {breadcrumbs.length - 1 !== index && <span><MdOutlineKeyboardDoubleArrowRight /></span>}
                </span>
                ))}
            </div>
        </>
    );
}

export default Breadcrumbs;