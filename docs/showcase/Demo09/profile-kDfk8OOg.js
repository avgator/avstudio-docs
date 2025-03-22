import{w as N,r as w,j as e,Q as y,U as n,a3 as L,aK as C,y as S,B as d,D as f,bQ as T,cc as B,i as D,aG as A,F as l,M as E,G as j,cd as M,ce as $,z as b,a6 as q,ay as K,u as U,g as z,at as O}from"./main-C9kTvUvK.js";import{A as _}from"./leftSidebar-BPb112nM.js";import"./Styles-B6kWeBqL.js";const{Paragraph:G}=T,g=({title:r,fieldKey:s,fieldvalue:a})=>{const[x,c]=w.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"ghostTag",children:r}),e.jsx(G,{editable:{icon:x?e.jsx(D,{}):e.jsx(A,{}),onChange:p=>{c(!0),B({[s]:p}).finally(()=>{c(!1)})}},children:a})]})},Q=()=>{const r=N(m=>m.user),[s,a]=w.useState(!1),x=()=>{const[m,P]=w.useState(!1),[v]=l.useForm();function k(t){P(!0),$(t).then(()=>{b.success("Password changed"),a(!1)}).catch(o=>{b.warning("Something went wrong"),console.log(o)}).finally(()=>{P(!1)})}return e.jsx(E,{title:"Change password",open:!0,okText:"Change Password",onOk:()=>{v.submit()},okButtonProps:{loading:m},onCancel:()=>{a(!1)},children:e.jsxs(l,{disabled:m,form:v,layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:k,autoComplete:"off",children:[e.jsx(l.Item,{label:"Current Password",name:"currentPassword",rules:[{required:!0,message:"Please input current password!"}],children:e.jsx(j.Password,{})}),e.jsx(l.Item,{hasFeedback:!0,dependencies:["currentPassword"],label:"New Password",name:"newPassword",rules:[{required:!0,message:"Please input new password!"},({getFieldValue:t})=>({validator(o,h){return t("currentPassword")!==h?Promise.resolve():Promise.reject(new Error("New password should not be the same as current one."))}}),()=>({validator(t,o){return M(o)}})],children:e.jsx(j.Password,{})}),e.jsx(l.Item,{label:"Repeat New Password",name:"repeatNewPassword",dependencies:["newPassword"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},({getFieldValue:t})=>({validator(o,h){return!h||t("newPassword")===h?Promise.resolve():Promise.reject(new Error("The two passwords that you entered do not match!"))}})],children:e.jsx(j.Password,{})})]})})};if(!r)return null;const{email:c,blocked:p,confirmed:u,firstName:I,lastName:F,company:R}=r;return e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsxs(n,{span:8,children:[e.jsx("div",{className:"ghostTag",children:"email"}),c,e.jsx(L,{style:{padding:3,borderRadius:10,lineHeight:"1em",marginBottom:5,marginLeft:5,fontSize:10},icon:u?e.jsx(C,{style:{marginRight:-5}}):e.jsx(S,{style:{marginRight:-5}}),color:u?"success":"warning",children:u?"Confirmed":"Not confirmed"}),!u&&e.jsx("div",{style:{marginTop:10},children:e.jsx(d,{type:"primary",children:"Confirm Email"})})]}),e.jsxs(n,{span:8,children:[e.jsx("div",{className:"ghostTag",children:"account status"}),p?"Blocked":"Active"]}),e.jsxs(n,{span:8,children:[e.jsx("div",{className:"ghostTag",children:"password"}),e.jsx(d,{onClick:()=>{a(!0)},children:"Change password"})]})]}),e.jsx(f,{}),e.jsxs(y,{children:[e.jsx(n,{span:8,children:e.jsx(g,{title:"First name",fieldKey:"firstName",fieldvalue:I})}),e.jsx(n,{span:8,children:e.jsx(g,{title:"Last name",fieldKey:"lastName",fieldvalue:F})}),e.jsx(n,{span:8,children:e.jsx(g,{title:"Company",fieldKey:"company",fieldvalue:R})})]}),s&&e.jsx(x,{})]})},V=q.div`
  position: relative;
  display: flex;
  align-items: stretch;
  height: 100%;

  section {
    flex: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
    border-radius: 3px;
    padding: 1em;

    &.individual {
      background-color: rgb(143 101 255);
      color: #fff;

      .ant-divider {
        border-top-color: #fff;
      }

      .resultButton {
        &,
        * {
          color: #fff !important;
          border-color: #fff !important;
        }
      }
    }

    .title {
      padding: 1em 0;
      font-size: 1.2em;
    }

    .price {
      text-transform: uppercase;
    }

    ul.features {
      flex: 1;
      padding-top: 2em;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      gap: 1em;
      font-size: 0.9em;
    }
  }
`,i=({isIncluded:r=!0,children:s})=>e.jsxs("li",{children:[r?e.jsx(C,{style:{color:"#5cca5c",marginRight:3}}):e.jsx(K,{style:{color:"#ff9c9c",marginRight:3}}),s]}),H=()=>N(s=>s.user)?e.jsxs(V,{children:[e.jsxs("section",{children:[e.jsx("div",{className:"title",children:"Free"}),e.jsx(f,{}),e.jsx("div",{className:"price",children:"free forever"}),e.jsxs("ul",{className:"features",children:[e.jsx(i,{children:"Lorem ipsum dolor sit amet"}),e.jsx(i,{isIncluded:!1,children:"Lorem ipsum dolor"})]}),e.jsx(d,{block:!0,children:"Activate"})]}),e.jsxs("section",{className:"individual",children:[e.jsx("div",{className:"title",children:"Standart"}),e.jsx(f,{}),e.jsx("div",{className:"price",children:"$25 / month"}),e.jsxs("ul",{className:"features",children:[e.jsx(i,{children:"Lorem ipsum dolor sit amet"}),e.jsx(i,{isIncluded:!1,children:"Lorem ipsum dolor"})]}),e.jsx(d,{className:"resultButton",ghost:!0,block:!0,children:"Activate"})]}),e.jsxs("section",{children:[e.jsx("div",{className:"title",children:"Pro"}),e.jsx(f,{}),e.jsx("div",{className:"price",children:"request"}),e.jsxs("ul",{className:"features",children:[e.jsx(i,{children:"Lorem ipsum dolor sit amet"}),e.jsx(i,{isIncluded:!1,children:"Lorem ipsum dolor"})]}),e.jsx(d,{block:!0,children:"Activate"})]})]}):null,Y=()=>{let r=U();const{profileSection:s="profileData"}=z();return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx(O,{onSelect:a=>r(`/profile/${a.key}`),selectedKeys:[s],mode:"inline",items:[{key:"profileData",label:"Profile Data"}]})}),e.jsx("div",{className:"appLayoutContent",children:e.jsxs("div",{style:{padding:10},className:"scrollable",children:[s==="profileData"&&e.jsx(Q,{}),s==="subscriptionPlan"&&e.jsx(H,{})]})})]})};export{Y as default};
