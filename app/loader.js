'use client';

import { useEffect, useState, Fragment } from "react";
import LogoAssets from "@/components/svgAssests/LogoAssets";
import Color from "@/constants/color";

export default function Loader({ children }) {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return (
        <Fragment>
            {!loading ? (
                <Fragment>
                    {children}
                </Fragment>
            ) : (
                <div className="page__preloader">
                    <LogoAssets.LoaderLogoIcon height='150' width='150' filledColor={Color.primary} />
                </div>
            )}
        </Fragment>
    )
}