"use strict";

const bnf = `

    document           ::=  ( unorderedList | orderedList | listing | heading | lineBreak | paragraph | verticalSpace | error )+ ;

    
    unorderedList      ::=  unorderedListItem+ ;


    orderedList        ::=  orderedListItem+ ;


    listing            ::=  listingStart ( line | verticalSpace )* listingEnd ;


    heading            ::=  [heading] line ;


    lineBreak          ::=  [line-break] <END_OF_LINE> ;


    paragraph          ::=  line+ ;
    

    verticalSpace      ::=  <END_OF_LINE>+ ;


    error              ::=  . ;


    unorderedListItem  ::=  [bullet] line ;


    orderedListItem    ::=  [marker] line ;

    
    listingStart       ::=  [listing] language? <END_OF_LINE> ;


    listingEnd         ::=  [listing] <END_OF_LINE> ;


    language           ::=  <NO_WHITESPACE>[identifier] ;


    line               ::=  ( [escaped] | [identifier] | [unassigned] )+ <END_OF_LINE> ;

`;

export default bnf;
