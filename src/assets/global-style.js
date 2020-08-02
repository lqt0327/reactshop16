const extendClick = () => {
    return `
      position: relative;
      &:before{
        content: '';
        position: absolute;
        top: -10px; bottom: -10px; left: -10px; right: -10px;
      };
    `;
  };
  
  const noWrap = () => {
    return `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `;
  };
  
  const bgFull = () => {
    return `
      background-position: 50%;
      background-size: contain;
      background-repeat: no-repeat;
    `
  };
  
  export default {
    "theme-color": "#d44439",
    "theme-color-shadow": "rgba(212, 68, 57, .5)",
    "font-color-v1":"#666",
    "font-color-light": "#dd1a21",
    "font-color-light-shadow": "rgba(241, 241, 241, 0.6)",//略淡
    "font-color-desc": "#2E3030",
    "font-color-desc-v2": "#bba8a8", //略淡
    "font-size-ss": "16px",
    "font-size-s": ".32rem",
    "font-size-m": ".37333rem",
    "font-size-l": ".42667rem",
    "font-size-ll": "0.4267rem",
    "border-color": "#e4e4e4",
    "border-color-v2": "rgba(228, 228, 228, 0.1)",
    "background-color": "#efefef",
    "background-color-v2": "#ededed",
    "background-color-v3": "#fff",
    "background-color-shadow": "rgba(0, 0, 0, 0.3)",
    "official-red": "#E82001",
    extendClick,
    noWrap,
    bgFull
  };