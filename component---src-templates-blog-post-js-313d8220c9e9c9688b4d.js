"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[989],{9799:function(t,e,r){r.d(e,{C:function(){return m},r:function(){return c}});var a=r(1766),n=r(5186),l=r(5444),o=r(4574),i={"@type":"Person",name:"Jonathan Cole",givenName:"Jonathan",familyName:"Cole",sameAs:["https://github.com/colejd"]};function m(t){var e=t.app,r=t.debug,l={"@context":"https://schema.org","@type":"SoftwareApplication",name:e.frontmatter.appName,operatingSystem:e.frontmatter.appPlatform,applicationCategory:e.frontmatter.appCategory,offers:{"@type":"Offer",price:e.frontmatter.appPrice,priceCurrency:"USD"}};return a.createElement(a.Fragment,null,!0===r&&a.createElement("pre",null,a.createElement("b",null,"JSON-LD:"),a.createElement("br",null),JSON.stringify(l,null,2)),a.createElement(n.q,null,a.createElement("script",{type:"application/ld+json"},JSON.stringify(l))))}function c(t){var e=t.post,r=t.debug,m=(0,l.useStaticQuery)("2780354278").site.siteMetadata,c={"@context":"http://schema.org","@type":"BlogPosting",mainEntityOfPage:{"@type":"WebPage","@id":(0,o.p)(m.siteUrl,e.fields.slug||"")},inLanguage:m.language,author:i,publisher:Object.assign({},i,{logo:{"@type":"ImageObject",url:(0,o.p)(m.siteUrl,"/assets/images/avatar.png")}}),datePublished:e.frontmatter.date,dateModified:e.frontmatter.dateModified,isAccessibleForFree:!0,keywords:e.frontmatter.keywords,headline:e.frontmatter.title,description:e.frontmatter.description||e.excerpt};return null!=e.frontmatter.coverPhoto&&(c.image={"@type":"ImageObject",url:(0,o.p)(m.siteUrl,e.frontmatter.coverPhoto.publicURL)}),a.createElement(a.Fragment,null,!0===r&&a.createElement("pre",null,a.createElement("b",null,"JSON-LD:"),a.createElement("br",null),JSON.stringify(c,null,2)),a.createElement(n.q,null,a.createElement("script",{type:"application/ld+json"},JSON.stringify(c))))}},4870:function(t,e,r){r.r(e);var a=r(1721),n=r(1766),l=r(6125),o=r(7198),i=r(6179),m=r(9799),c=r(4574);r(8973),r(4714),r(2943),r(2638),r(9692);var u=function(t){function e(){return t.apply(this,arguments)||this}return(0,a.Z)(e,t),e.prototype.render=function(){var t,e,r=this.props.data.markdownRemark,a=this.props.data.site.siteMetadata,u=(0,l.d)(r.frontmatter.coverPhoto),s={};if(null!==(t=r.frontmatter.coverPhoto)&&void 0!==t&&t.publicURL){var f,p=(0,c.p)(a.siteUrl,null===(f=r.frontmatter.coverPhoto)||void 0===f?void 0:f.publicURL);s["twitter:card"]="summary_large_image",s["twitter:image"]=p,s["twitter:image:alt"]=r.frontmatter.coverPhotoAlt,s["og:image"]=p}return s["og:type"]="article",s["og:article:published_time"]=r.frontmatter.date,s["og:article:modified_time"]=r.frontmatter.dateModified,n.default.createElement(o.Z,{location:this.props.location,title:a.title},n.default.createElement(i.Z,{title:r.frontmatter.title,description:r.frontmatter.description||r.excerpt,meta:s,debug:!1}),n.default.createElement(m.r,{post:r,debug:!1}),n.default.createElement("article",{className:"prose-slate"},n.default.createElement("header",null,n.default.createElement("h1",{className:"text-3xl columnbreak:text-5xl mb-2 columnbreak:mb-4"},r.frontmatter.title),n.default.createElement("p",{className:"mb-0"},n.default.createElement("em",null,r.frontmatter.subtitle)),n.default.createElement("p",{className:"text-sm leading-loose mb-4"},n.default.createElement("time",{dateTime:r.frontmatter.isoDate},r.frontmatter.readableDate)),null!=r.frontmatter.coverPhoto?n.default.createElement(l.G,{image:u,alt:null!==(e=r.frontmatter.coverPhotoAlt)&&void 0!==e?e:"",className:"hero-image mb-4"}):n.default.createElement("hr",null)),n.default.createElement("section",{className:"markdown",dangerouslySetInnerHTML:{__html:r.html}})))},e}(n.default.Component);e.default=u},4574:function(t,e,r){function a(t,e){return"/"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),"/"===e[0]&&(e=e.substring(1)),t+"/"+e}r.d(e,{p:function(){return a}})},2943:function(t,e,r){r.r(e)},4714:function(t,e,r){r.r(e)},8973:function(t,e,r){r.r(e)},9692:function(t,e,r){r.r(e)},2638:function(t,e,r){r.r(e)}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-313d8220c9e9c9688b4d.js.map