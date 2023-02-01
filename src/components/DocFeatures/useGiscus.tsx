import Giscus from '@giscus/react';
import React from 'react';

export default function UseGiscus() {
    return (
        <Giscus
            id="comments"
            repo="GavinLin512/Grayson-docs"
            repoId="R_kgDOIxMi7g"
            category="General"
            categoryId="DIC_kwDOIxMi7s4CTrUP"
            mapping="pathname"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="preferred_color_scheme"
            lang="zh-TW"
            loading="lazy"
        />
    );
}