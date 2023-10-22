import{C as s}from"./codemirror.es-52e8b92d.js";import{o,v as e,w as l,x as n,y as r}from"./index-c9acfd68.js";import{r as c}from"./mode-indent.es-057a4f6a.js";import"./codemirror.es2-5884f31a.js";var b=Object.defineProperty,d=(a,t)=>b(a,"name",{value:t,configurable:!0});s.defineMode("graphql-variables",a=>{const t=o({eatWhitespace:u=>u.eatSpace(),lexRules:m,parseRules:V,editorConfig:{tabSize:a.tabSize}});return{config:a,startState:t.startState,token:t.token,indent:c,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}});const m={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},V={Document:[e("{"),l("Variable",n(e(","))),e("}")],Variable:[i("variable"),e(":"),"Value"],Value(a){switch(a.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(a.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(a.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[r("Number","number")],StringValue:[r("String","string")],BooleanValue:[r("Keyword","builtin")],NullValue:[r("Keyword","keyword")],ListValue:[e("["),l("Value",n(e(","))),e("]")],ObjectValue:[e("{"),l("ObjectField",n(e(","))),e("}")],ObjectField:[i("attribute"),e(":"),"Value"]};function i(a){return{style:a,match:t=>t.kind==="String",update(t,u){t.name=u.value.slice(1,-1)}}}d(i,"namedKey");