const merge=(target,element)=>{
   const ele=document.createElement(element.type);
   ele.innerHTML=element.text;
   ele.setAttribute('href',element.props.href);
   ele.setAttribute('target',element.props.target);
   target.appendChild(ele);
   return
}
const element={
    type:'a',
    props: {
       href:'https://www.google.com',
       target:'_blank'
    },
    text:'click me'
}
const target=document.getElementById('root');
merge(target,element);