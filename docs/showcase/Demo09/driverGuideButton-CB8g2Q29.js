import{a6 as e,cK as d,j as t,a1 as L}from"./main-C9kTvUvK.js";const c=d`
  from {
opacity: 0;
transform: scaleY(0.8) translateY(-100%);
height: 0;
  }

  to {
   opacity: 1;
   transform: scaleY(1) translateY(0);
   height: auto;
  }
`,x=e.div`
  position: relative;

  display: flex;
  flex-flow: column;

  .ant-card-body {
    flex: 1;
  }

  .ant-card-meta {
    display: block;
  }

  .ant-table-tbody > tr:last-child > td {
    border-bottom: 0;
  }


  .ant-table-tbody > tr {
    overflow: hidden;
    transition: 200ms;
    animation-name: ${c};
    animation-timing-function: linear;
    animation-duration: 300ms;
  }

  .ant-card-actions > li > span {
    cursor: default;
  }

  .lastProjectLink {
    color: var(--ant-primary-5);
    cursor: pointer;
  }

  .projectCardActionsBox {
    display: flex;
    gap: 20px;
  }
`,f=e.div`
  position: absolute;
  left: 2px;
  top: 2px;
  right: 2px;
  height: 5px;
  background-color: gray;
  border-radius: 2px;
`,u=e.div`
  display: grid;
  gap: 1vmax;
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 400px)); */
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`,h=e.div`
  position: relative;
  display: flex;
  white-space: nowrap;
  align-items: center;
  gap: 5px;

  .innerBox {
    flex: 1;
    position: relative;

    .ant-input {
      width: '100%';
    }
  }
`,g=({tooltipText:s="Open help guide",guideStartTargetElement:a,guide:i})=>{if(!i)return null;const{steps:n}=i.getConfig();if(!n?.length)return null;let o=0;if(a){const r=n.findIndex(p=>p.element.includes(a));r>=0&&(o=r)}const l=()=>{i.drive(o)};return t.jsx(L,{title:s,children:t.jsx("div",{style:{display:"inline-block",verticalAlign:"middle",marginInline:"0.3em",cursor:"pointer",fontSize:"1.5em",color:"var(--ant-primary-5)",translate:"0 0.07em"},onClick:()=>l(),children:t.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M16 2.66666L16.856 2.67332L17.6773 2.69599L18.076 2.71332L18.848 2.75866L19.5853 2.81999C25.8346 3.42666 28.452 5.93066 29.14 12.028L29.18 12.4147L29.2413 13.152L29.296 14.1213L29.304 14.3213L29.3266 15.144L29.3333 16L29.3266 16.856L29.304 17.6773L29.2866 18.076L29.2413 18.848L29.18 19.5853C28.5733 25.8347 26.0693 28.452 19.972 29.14L19.5853 29.18L18.848 29.2413L17.8786 29.296L17.6786 29.304L16.856 29.3267L16 29.3333L15.144 29.3267L14.3226 29.304L13.924 29.2867L13.152 29.2413L12.4146 29.18C6.1653 28.5733 3.54797 26.0693 2.85997 19.972L2.81997 19.5853L2.75864 18.848L2.70397 17.8787L2.69597 17.6787L2.6733 16.856L2.66797 16.432V15.568L2.6733 15.144L2.69597 14.3227L2.7133 13.924L2.75864 13.152L2.81997 12.4147C3.42664 6.16532 5.93064 3.54799 12.028 2.85999L12.4146 2.81999L13.152 2.75866L14.1213 2.70399L14.3213 2.69599L15.144 2.67332C15.424 2.66888 15.7093 2.66666 16 2.66666ZM16 20C15.6734 20 15.3582 20.1199 15.1141 20.3369C14.8701 20.554 14.7142 20.853 14.676 21.1773L14.6666 21.3333L14.676 21.5027C14.7145 21.8267 14.8706 22.1254 15.1146 22.3421C15.3586 22.5588 15.6736 22.6785 16 22.6785C16.3263 22.6785 16.6413 22.5588 16.8853 22.3421C17.1294 22.1254 17.2854 21.8267 17.324 21.5027L17.3333 21.3467L17.324 21.1773C17.2858 20.853 17.1298 20.554 16.8858 20.3369C16.6418 20.1199 16.3265 20 16 20ZM17.824 11.1027C17.0258 10.6946 16.1131 10.5685 15.2342 10.7447C14.3553 10.9209 13.5618 11.3891 12.9826 12.0733C12.7618 12.332 12.6482 12.6653 12.665 13.005C12.6818 13.3447 12.8278 13.6651 13.0731 13.9007C13.3184 14.1363 13.6445 14.2692 13.9846 14.2723C14.3247 14.2754 14.6531 14.1484 14.9026 13.9173L15.1306 13.6773C15.3273 13.4968 15.5746 13.3808 15.8392 13.345C16.1039 13.3093 16.3731 13.3555 16.6106 13.4773C16.8667 13.6069 17.0742 13.8157 17.2021 14.0727C17.3301 14.3297 17.3717 14.621 17.3207 14.9035C17.2698 15.186 17.1291 15.4445 16.9195 15.6406C16.7099 15.8367 16.4426 15.96 16.1573 15.992L15.848 16.008C15.5088 16.0453 15.1969 16.2112 14.9764 16.4715C14.7559 16.7318 14.6436 17.0668 14.6625 17.4074C14.6815 17.7481 14.8303 18.0685 15.0784 18.3027C15.3264 18.537 15.6548 18.6672 15.996 18.6667C16.8955 18.6694 17.7696 18.3688 18.4773 17.8135C19.1849 17.2582 19.6848 16.4806 19.8961 15.6063C20.1074 14.732 20.0178 13.8119 19.6418 12.9948C19.2659 12.1776 18.6254 11.511 17.824 11.1027Z",fill:"url(#paint0_linear_34_2)"}),t.jsx("defs",{children:t.jsxs("linearGradient",{id:"paint0_linear_34_2",x1:"9",y1:"3",x2:"27",y2:"29",gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#BE5FA7"}),t.jsx("stop",{offset:"0.455",stopColor:"#7D43FF"}),t.jsx("stop",{offset:"1",stopColor:"#00D5FF"})]})})]})})})};export{x as C,g as D,h as P,u as T,f as a};
