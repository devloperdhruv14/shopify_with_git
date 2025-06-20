/*  Loop Subscription Bundle Snippet v3.1

Created and maintained by LOOP SUBSCRIPTIONS (https://apps.shopify.com/loop-subscriptions)
DO NOT modify source code of this file because
- It is an automatically generated file from LOOP SUBSCRIPTIONS backend.
- LOOP SUBSCRIPTIONS will keep releasing new versions of this file. You can check the latest version
  available by visiting Loop Admin > Bundles > Snippets > Install bundle snippet.
- Updating will replace the existing file implying that all the custom code on the existing file 
  (if any) will be lost. 
- If you need to make changes, please do it using our standard bundle style settings available inside each bundle details page on Loop admin portal.
If you need any help, please contact us at support@loopwork.co.
*/

const BUNDLE_LINK_PREFIX = "/a/loop_subscriptions/bundle";
const LOOP_BUNDLE_URL =
  "https://api-service.loopwork.co/bundleTransaction/getBundleCartDetails";
const LOOP_API_SERVICE_URL = "https://api-service.loopwork.co";
let BUNDLE_CONTAINER_CLASS = "BUNDLE_CONTAINER_CLASS";
let CART_SUBTOTAL_CLASS = "CART_SUBTOTAL_CLASS";

//dev
// const LOOP_BUNDLE_URL =
//   "https://dev-api-service.loopwork.co/bundleTransaction/getBundleCartDetails";
// const LOOP_API_SERVICE_URL = "https://dev-api-service.loopwork.co";

//prod
// const LOOP_BUNDLE_URL =
//   "https://api-service.loopwork.co/bundleTransaction/getBundleCartDetails";
// const LOOP_API_SERVICE_URL = "https://api-service.loopwork.co";

const getItemsHtmlLoop = (item, bundleQuantityMapping) => {
  let quantity = item.quantity;
  if (bundleQuantityMapping) {
    let variant = bundleQuantityMapping.find(
      (v) => v.childProductId === item.id
    );
    if (variant) {
      quantity = variant.quantity;
    }
  }
  return `<p><span style="display:block;" class="data-cart-item-selling-plan-name">${
    item.title || ""
  } x ${quantity || ""}</span></p>`;
};

// const getEditCartButton = (bundleTransactionId) => {
//     return `<button onclick="event.preventDefault(); changeBundleCartItems('${bundleTransactionId}');" style="background:none;border:none;display:flex;align-items:center;gap:3px;cursor:pointer;padding:0; text-decoration:underline;">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 17 17">
//             <path fill-rule="evenodd" d="M15.655 4.344a2.695 2.695 0 0 0-3.81 0l-.599.599-.009-.009-1.06 1.06.008.01-5.88 5.88a2.75 2.75 0 0 0-.805 1.944v1.922a.75.75 0 0 0 .75.75h1.922a2.75 2.75 0 0 0 1.944-.806l7.54-7.539a2.695 2.695 0 0 0 0-3.81Zm-4.409 2.72-5.88 5.88a1.25 1.25 0 0 0-.366.884v1.172h1.172c.331 0 .65-.132.883-.366l5.88-5.88-1.689-1.69Zm2.75.629.599-.599a1.195 1.195 0 1 0-1.69-1.689l-.598.599 1.69 1.689Z"></path>
//         </svg>
//         <p style="padding:0px;margin:0px;margin-top:5px">Edit</p>
//     </button>`;
// };

const getItemsHtml2Loop = (item, bundleQuantityMapping) => {
  let quantity = item.quantity;
  if (bundleQuantityMapping) {
    let variant = bundleQuantityMapping.find(
      (v) => v.childProductId === item.id
    );
    if (variant) {
      quantity = variant.quantity;
    }
  }
  return `<p style="font-size:10px">${item.title || ""} x ${
    quantity || ""
  }</p>`;
};

const getEditCartButton = (bundleTransactionId) => {
  return `<button onclick="event.preventDefault(); changeBundleCartItems('${bundleTransactionId}');" style="background:none;border:none;display:flex;align-items:center;gap:3px;cursor:pointer;padding:0; text-decoration:underline;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 17 17">
            <path fill-rule="evenodd" d="M15.655 4.344a2.695 2.695 0 0 0-3.81 0l-.599.599-.009-.009-1.06 1.06.008.01-5.88 5.88a2.75 2.75 0 0 0-.805 1.944v1.922a.75.75 0 0 0 .75.75h1.922a2.75 2.75 0 0 0 1.944-.806l7.54-7.539a2.695 2.695 0 0 0 0-3.81Zm-4.409 2.72-5.88 5.88a1.25 1.25 0 0 0-.366.884v1.172h1.172c.331 0 .65-.132.883-.366l5.88-5.88-1.689-1.69Zm2.75.629.599-.599a1.195 1.195 0 1 0-1.69-1.689l-.598.599 1.69 1.689Z"></path>
        </svg>
        <p style="padding:0px;margin:0px;margin-top:5px">Edit Bundle</p>
    </button>`;
};
const getEditCartButton2 = (bundleTransactionId) => {
  return `<button onclick="event.preventDefault(); changeBundleCartItems('${bundleTransactionId}');" style="background:none;border:none;display:flex;align-items:center;gap:3px;cursor:pointer;padding:0; text-decoration:underline;font-size:12px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 17 17">
            <path fill-rule="evenodd" d="M15.655 4.344a2.695 2.695 0 0 0-3.81 0l-.599.599-.009-.009-1.06 1.06.008.01-5.88 5.88a2.75 2.75 0 0 0-.805 1.944v1.922a.75.75 0 0 0 .75.75h1.922a2.75 2.75 0 0 0 1.944-.806l7.54-7.539a2.695 2.695 0 0 0 0-3.81Zm-4.409 2.72-5.88 5.88a1.25 1.25 0 0 0-.366.884v1.172h1.172c.331 0 .65-.132.883-.366l5.88-5.88-1.689-1.69Zm2.75.629.599-.599a1.195 1.195 0 1 0-1.69-1.689l-.598.599 1.69 1.689Z"></path>
        </svg>
        <p style="padding:0px;margin:0px;margin-top:5px">Edit Bundle</p>
    </button>`;
};

const getBundleCartTableTemplateLoop = (bundleItem, index, bundleLink) => {
  return `
        <tr class="cart-item" id="CartBundleItem-${index}">
    <td class="cart-item__media">
        <a href="${bundleLink}" class="cart-item__link" aria-hidden="true" tabindex="-1"> </a>
          <div class="cart-item__image-container gradient global-media-settings">
            <img src="${
              bundleItem.image || ""
            }"  class="cart-item__image" alt="" loading="lazy" width="150" height="94">
          </div>
    </td>

    <td class="cart-item__details"><a href="" class="cart-item__name h4 break">${
      bundleItem.label
    }</a>
                <div class="product-option">
            ${bundleItem.items.map((item) => getItemsHtmlLoop(item)).join("")}
              <br/>
        </div>
        <div class="product-option">
         ${bundleItem.price}
        </div><dl></dl>
        <p class="product-option">${
          bundleItem.sellingPlan || ""
        }</p><ul class="discounts list-unstyled" role="list" aria-label="Discount"></ul>
        ${getEditCartButton(bundleItem.bundleId)}
    </td>

    <td class="cart-item__totals right medium-hide large-up-hide">
      <div class="cart-item__price-wrapper">
        <span class="price price--end">
             ${bundleItem.price}
        </span>
      </div>
    </td>

    <td class="cart-item__quantity">
      <div class="cart-item__quantity-wrapper">
        <quantity-input class="quantity">
          <input disabled class="quantity__input" type="number" value="1" min="0">
        </quantity-input>
        <cart-remove-button>
          <a onclick="removeBundleLoop('${
            bundleItem.bundleId
          }')" class="button button--tertiary" aria-label="${
    bundleItem.label
  }" style="cursor : pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" class="icon icon-remove">
                <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
            </svg>
          </a>
        </cart-remove-button>
      </div>
    </td>

    <td class="cart-item__totals right small-hide">
      <div class="cart-item__price-wrapper"><span class="price price--end">
           ${bundleItem.price}
          </span></div>
    </td>
  </tr>
    `;
};

// const getBundleCartDrawerTemplateLoop = (bundleItem, index, bundleLink) => {
//   return `
//         <tr class="cart-item" id="CartBundleItem-${index}">
//           <td class="cart-item__media" style="text-align:center;">
//             <img class="cart-item__image"
//               src="${bundleItem.image || ""}"
//               alt="${bundleItem.label}" loading="lazy" width="75" height="75">
//           </td>
//           <td class="cart-item__details">
//             <a href="${bundleLink}"
//               class="cart-item__name break">
//               ${bundleItem.label || ""}
//             </a>
//             <dl>
//               <div class="product-option">
//                 ${bundleItem.items
//                   .map((item) => getItemsHtmlLoop(item))
//                   .join("")}
//                   <br/>
//                   <p><span class="data-cart-item-selling-plan-name">
//                     ${bundleItem.sellingPlan || ""}
//                   </span></p>
//               </div>
//             </dl>
//           </td>
//           <td class="cart-item__quantity small-hide">
//             ${bundleItem.quantity}
//           </td>
//           <td class="right medium-hide large-up-hide">
//             <div class="cart-item__price-wrapper medium-up" style="display: flex; gap: 10px;">
//               <span class="price price--end" style="text-decoration:line-through;">
//                 ${bundleItem.priceWithoutDiscount}
//               </span>
//               <span class="price price--end" style="font-weight: 600;">
//                 ${bundleItem.price}
//               </span>
//             </div>
//             ${getEditCartButton(bundleItem.bundleId)}
//             <div onclick="removeBundleLoop('${
//               bundleItem.bundleId
//             }')" style="cursor:pointer; width: fit-content;height: 15px;display: inline-flex;flex-direction: row-reverse;">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="width: 1em; height: 1em;" aria-hidden="true" focusable="false" role="presentation" class="icon icon-remove">
//                     <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
//                     <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
//               </svg>
//             </div>
//           </td>
//         </tr>
//     `;
// };

const getBundleCartDrawerTemplateLoop = (bundleItem, index, bundleLink) => {
  return `
    <tr id="CartDrawer-Item-${index}" class="cart-item" role="row" data-bundleid="${
    bundleItem.bundleId
  }">
      <td class="cart-item__media" role="cell" headers="CartDrawer-ColumnProductImage">
        <a href="${bundleLink}" class="cart-item__link" tabindex="-1" aria-hidden="true"></a>
        <img class="cart-item__image" 
          src="${bundleItem.image || ""}" 
          alt="${bundleItem.label}" loading="lazy" width="150" height="150">
      </td>
      <td class="cart-item__details" role="cell" headers="CartDrawer-ColumnProduct">
        <a href="${bundleLink}" class="cart-item__name h4 break">
          ${bundleItem.label || ""}
        </a>
        
          
            ${bundleItem.items.map((item) => getItemsHtml2Loop(item)).join("")}

            ${getEditCartButton2(
              bundleItem.bundleId
            )} <div onclick="removeBundleLoop('${
    bundleItem.bundleId
  }')" style="cursor:pointer; vertical-align: text-top; width: fit-content;height: 15px;display: inline-flex;flex-direction: row-reverse;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" class="icon icon-remove">
  <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
  <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
</svg>
            </div>
            <div class="product-option">
            
            <p style="font-size:10px">
              ${bundleItem.sellingPlan || ""}
            </p>

          </div>

      </td>
      <td class="cart-item__totals right" role="cell" headers="CartDrawer-ColumnTotal">
                          <div class="cart-item__quantity" role="cell" headers="CartDrawer-ColumnQuantity">
                            <quantity-popover>
                              <div class="cart-item__quantity-wrapper quantity-popover-wrapper">
                                <div class="quantity-popover-container">
                                  <quantity-input class="quantity cart-quantity aaaaaaaaaaaa">
                                    <button class="quantity__button no-js-hidden disabled" name="minus" type="button">
                                      <span class="visually-hidden">Decrease quantity for VolumeCare+ Mascara</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="icon icon-minus" fill="none" viewBox="0 0 10 2">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor">
</path></svg>

                                    </button>
                                    <input class="quantity__input" type="number" data-quantity-variant-id="40617171681446" name="updates[]" value="1" data-cart-quantity="1" min="1" step="1" aria-label="Quantity for VolumeCare+ Mascara" id="Drawer-quantity-1" data-index="1">
                                    <button class="quantity__button no-js-hidden" name="plus" type="button">
                                      <span class="visually-hidden">Increase quantity for VolumeCare+ Mascara</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="icon icon-plus" fill="none" viewBox="0 0 10 10">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor">
</path></svg>

                                    </button>
                                  </quantity-input>
                                </div>
                              </div><div id="CartDrawer-LineItemError-1" class="cart-item__error" role="alert">
                                <small class="cart-item__error-text"></small>
                                <svg aria-hidden="true" focusable="false" class="icon icon-error" viewBox="0 0 13 13">
                                  <circle cx="6.5" cy="6.50049" r="5.5" stroke="white" stroke-width="2"></circle>
                                  <circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B" stroke-width="0.7"></circle>
                                  <path d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z" fill="white"></path>
                                  <path d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z" fill="white" stroke="#EB001B" stroke-width="0.7">
                                </path></svg>
                              </div>
                            </quantity-popover>
                          </div>

<link href="//rumicosmetiques.com/cdn/shop/t/139/assets/component-loading-spinner.css?v=116724955567955766481720611339" rel="stylesheet" type="text/css" media="all">

<div class="loading__spinner hidden">
  <svg aria-hidden="true" focusable="false" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
  </svg>
</div>
<div class="cart-item__price-wrapper" 3500="" --=""><div class="cart-item__discounted-prices">
                                <span class="visually-hidden">
                                  Regular price
                                </span>
                                <s class="cart-item__old-price price price--end aaa1">
                                  ${bundleItem.priceWithoutDiscount}
                                </s>
                                <span class="visually-hidden">
                                  Sale price
                                </span>
                                <span class="price price--end aaa2">
                                  ${bundleItem.price}
                                </span>
                              </div></div>
                        </td>
    </tr>
  `;
};

const getBundleCartItemsDivTemplateLoop = (bundleItem, index, bundleLink) => {
  return `
        <div style="display:flex; gap:20px; justify-content: space-between;" id="CartBundleItem-${index}">
          <div style="display:flex; gap:20px;">
            <div style="text-align:center;">
              <img
                src="${bundleItem.image || ""}" 
                alt="${bundleItem.label}" loading="lazy" width="75" height="75">
            </div>
            <div>
              <a href="${bundleLink}" 
                 style="font-weight:600">
                ${bundleItem.label || ""}
              </a>
              <div>
                ${bundleItem.items
                  .map((item) => getItemsHtmlLoop(item))
                  .join("")}
                  <br/>
                  <p><span>${bundleItem.sellingPlan || ""}</span></p>
              </div>
            </div>
          </div>
          <div>
            ${bundleItem.quantity}
          </div>
          <div>
            <div style="display: flex; gap: 10px;">
              <span style="text-decoration:line-through;"> 
               ${bundleItem.priceWithoutDiscount}
              </span>
              <span style="font-weight: 600;">${bundleItem.price}</span>
            </div>
            ${getEditCartButton(bundleItem.bundleId)}
            <div onclick="removeBundleLoop('${
              bundleItem.bundleId
            }')" style="cursor:pointer; vertical-align: text-top; width: fit-content;height: 15px;display: inline-flex;flex-direction: row-reverse;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style="width: 1em; height: 1em;" aria-hidden="true" focusable="false" role="presentation" class="icon icon-remove">
                    <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                    <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </div>
    `;
};

const getPresetBundleCartTemplateLoop = (bundleItem, index, bundleLink) => {
  return `
        <tr class="cart-item" id="CartBundleItem-${index}">
    <td class="cart-item__media">
        <a href="${bundleLink}" class="cart-item__link" aria-hidden="true" tabindex="-1"> </a>
          <div class="cart-item__image-container gradient global-media-settings">
            <img src="${
              bundleItem.image || ""
            }"  class="cart-item__image" alt="" loading="lazy" width="150" height="94">
          </div>
    </td>

    <td class="cart-item__details"><a href="${bundleLink}" class="cart-item__name h4 break">${
    bundleItem.label
  }</a>
        <div class="product-option">
            ${bundleItem.items
              .map((item) =>
                getItemsHtmlLoop(item, bundleItem.bundleQuantityMapping)
              )
              .join("")}
              <br/>
        </div>
        <div class="product-option">
         ${bundleItem.eachBundleAmount}
        </div><dl></dl>

        <p class="product-option">${bundleItem.sellingPlan || ""}</p>
        ${
          bundleItem.discountTitle
            ? `<ul class="discounts list-unstyled" role="list" aria-label="Discount">
            <li class="discounts__discount">
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-discount color-foreground-text" viewBox="0 0 12 12">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0h3a2 2 0 012 2v3a1 1 0 01-.3.7l-6 6a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4l6-6A1 1 0 017 0zm2 2a1 1 0 102 0 1 1 0 00-2 0z" fill="currentColor">
                    </path>
                </svg>
                ${bundleItem.discountTitle}
            </li>
        </ul>`
            : ""
        }
    </td>

    <td class="cart-item__totals right medium-hide large-up-hide">
      <div class="cart-item__price-wrapper"><span class="price price--end">
           ${bundleItem.final_line_price}
          </span></div>
    </td>

    <td class="cart-item__quantity">
      <div class="cart-item__quantity-wrapper">
        <quantity-input class="quantity">
          <input disabled class="quantity__input" type="number" value="${
            bundleItem.bundleProductQuantity
          }" min="0">
        </quantity-input>
        <cart-remove-button>
          <a onclick="removeBundleLoop('${
            bundleItem.bundleId
          }')" class="button button--tertiary" aria-label="${
    bundleItem.label
  }" style="cursor : pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" class="icon icon-remove">
                <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
            </svg>
          </a>
        </cart-remove-button>
      </div>
    </td>

    <td class="cart-item__totals right small-hide">
      <div class="cart-item__price-wrapper"><span class="price price--end">
           ${bundleItem.final_line_price_currency}
          </span></div>
    </td>
  </tr>
    `;
};

const getPresetBundleCartDrawerTemplateLoop = (
  bundleItem,
  index,
  bundleLink
) => {
  return `
        <tr class="cart-item" id="CartBundleItem-${index}">
    <td class="cart-item__media">
        <a href="${bundleLink}" class="cart-item__link" aria-hidden="true" tabindex="-1"> </a>
          <div class="cart-item__image-container gradient global-media-settings">
            <img src="${
              bundleItem.image || ""
            }"  class="cart-item__image" alt="" loading="lazy" width="150" height="94">
          </div>
    </td>

    <td class="cart-item__details"><a href="${bundleLink}" class="cart-item__name h4 break">${
    bundleItem.label
  }</a>
                <div class="product-option">
            ${bundleItem.items
              .map((item) =>
                getItemsHtmlLoop(item, bundleItem.bundleQuantityMapping)
              )
              .join("")}
              <br/>
        </div>
        <div class="product-option">
         ${bundleItem.eachBundleAmount}
        </div><dl></dl>

        <p class="product-option">${bundleItem.sellingPlan || ""}</p>
        ${
          bundleItem.discountTitle
            ? `<ul class="discounts list-unstyled" role="list" aria-label="Discount">
            <li class="discounts__discount">
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-discount color-foreground-text" viewBox="0 0 12 12">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0h3a2 2 0 012 2v3a1 1 0 01-.3.7l-6 6a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4l6-6A1 1 0 017 0zm2 2a1 1 0 102 0 1 1 0 00-2 0z" fill="currentColor">
                    </path>
                </svg>
                ${bundleItem.discountTitle}
            </li>
        </ul>`
            : ""
        }
    </td>

    <td class="cart-item__totals right medium-hide large-up-hide">
      <div class="cart-item__price-wrapper"><span class="price price--end">
           ${bundleItem.final_line_price}
          </span></div>
    </td>

    <td class="cart-item__quantity">
      <div class="cart-item__quantity-wrapper">
        <quantity-input class="quantity">
          <input disabled class="quantity__input" type="number" value="${
            bundleItem.bundleProductQuantity
          }" min="0">
        </quantity-input>
        <cart-remove-button>
          <a onclick="removeBundleLoop('${
            bundleItem.bundleId
          }')" class="button button--tertiary" aria-label="${
    bundleItem.label
  }" style="cursor : pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" class="icon icon-remove">
                <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
            </svg>
          </a>
        </cart-remove-button>
      </div>
    </td>

    <td class="cart-item__totals right small-hide">
      <div class="cart-item__price-wrapper"><span class="price price--end">
           ${bundleItem.final_line_price_currency}
          </span></div>
    </td>
  </tr>
    `;
};

// returns cart item key of a bundleId
const getItemKeysByBundleIdLoop = (bundleId) => {
  const cartItems = window.Loop.bundleCartAllItems;
  const data = {
    updates: {},
  };
  for (const item of cartItems) {
    const _bundleId = item?.properties?._bundleId ?? item?.properties?.bundleId;
    if (!_bundleId || _bundleId !== bundleId) continue;
    data.updates[item.key] = 0;
  }
  return data;
};

// removes a bundleId from cart
const removeBundleLoop = async (bundleId) => {
  const data = getItemKeysByBundleIdLoop(bundleId);
  const endpoint = `${window.Shopify.routes.root}cart/update.js`;
  await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  window.location.href = window.location.href;
};

const changeBundleCartItems = async (bundleTransactionId) => {
  disableEditButton();
  const currentLocale = window?.Shopify?.locale;
  const root = window?.Shopify?.routes?.root ?? "/";

  if (bundleTransactionId) {
    const _editBundleRef = `${BUNDLE_LINK_PREFIX}/change/${bundleTransactionId}`;
    if (currentLocale && root !== "/") {
      window.location.href = `/${currentLocale}${_editBundleRef}`;
    } else {
      window.location.href = _editBundleRef;
    }
  }
};

const disableEditButton = (bundleId) => {
  console.log(`disabling bundle edit button: ${bundleId}`);
  const editButttons = document.querySelectorAll(
    `loop-edit-bundle-${bundleId}`
  );
  for (const button of editButttons) {
    button.disabled = true;
  }
};

const fetchLoopBundleTransactionCartDetails = async (loopBundleGuid) => {
  const _endpoint = `${LOOP_BUNDLE_URL}/${loopBundleGuid}`;
  const _response = await fetch(_endpoint);
  return await _response.json();
};

const addExtraDetailsToBundleItemsLoop = async (bundleItems) => {
  let totalDiscount = 0;
  let currencySymbol = "";
  let currency = "";

  const fetchDetailsPromises = bundleItems.map((bundleItem) =>
    fetchLoopBundleTransactionCartDetails(bundleItem.bundleId)
  );
  const allExtraDetails = await Promise.all(fetchDetailsPromises);
  for (let i = 0; i < allExtraDetails.length; ++i) {
    const extraDetails = allExtraDetails[i];
    const bundleItem = bundleItems[i];
    const quantityMapping =
      extraDetails?.variantMap?.[bundleItem.bundleId] ?? [];
    const isPresetBundleProduct = bundleItem.isPresetBundleProduct;
    const totalBundleItemsQuantity = bundleItem.items.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    let price = isPresetBundleProduct
      ? bundleItem.discounted_price
      : bundleItem.price;

    bundleItem.label = extraDetails?.label;
    bundleItem.image = extraDetails?.image;
    bundleItem.sellingPlan = extraDetails?.name;
    bundleItem.priceWithoutDiscount = `${
      extraDetails.currencySymbol
    }${price.toFixed(2)}`;
    bundleItem.final_line_price_currency = `${
      extraDetails.currencySymbol
    }${parseFloat(bundleItem.final_line_price).toFixed(2)}`;
    bundleItem.loopBundleId = extraDetails.loopBundleId;
    currencySymbol = extraDetails.currencySymbol;
    currency = extraDetails.currency;

    if (
      extraDetails.discountType &&
      extraDetails.discountValue &&
      !isPresetBundleProduct
    ) {
      if (extraDetails.discountType === "PERCENTAGE") {
        if (extraDetails.appliesOnEachItem) {
          // if discount in each item
          totalDiscount +=
            price *
            (parseFloat(extraDetails.discountValue) / 100) *
            totalBundleItemsQuantity;
          price =
            price -
            price *
              (parseFloat(extraDetails.discountValue) / 100) *
              totalBundleItemsQuantity;
        } else {
          totalDiscount +=
            price * (parseFloat(extraDetails.discountValue) / 100);
          price =
            price - price * (parseFloat(extraDetails.discountValue) / 100);
        }
      } else {
        if (extraDetails.appliesOnEachItem) {
          // if discount in each item
          totalDiscount +=
            parseFloat(extraDetails.discountValue) * totalBundleItemsQuantity;
          price =
            price -
            parseFloat(extraDetails.discountValue) * totalBundleItemsQuantity;
        } else {
          totalDiscount += parseFloat(extraDetails.discountValue);
          price = price - parseFloat(extraDetails.discountValue);
        }
      }
    }

    bundleItem.price = `${extraDetails.currencySymbol}${parseFloat(
      price
    ).toFixed(2)}`;

    if (extraDetails?.productsQuantity) {
      bundleItems[i]["bundleProductQuantity"] = extraDetails.productsQuantity;
      bundleItems[i]["eachBundleAmount"] = `${
        extraDetails.currencySymbol
      }${parseFloat(
        bundleItems[i].final_line_price / extraDetails.productsQuantity
      ).toFixed(2)}`;
    } else {
      bundleItems[i]["bundleProductQuantity"] = 1;
      bundleItems[i]["eachBundleAmount"] = `${
        extraDetails.currencySymbol
      }${parseFloat(price / 1).toFixed(2)}`;
    }
    if (quantityMapping.length) {
      bundleItem.bundleQuantityMapping = quantityMapping;
    }
    if (isPresetBundleProduct) {
      bundleItem.productHandle = extraDetails.product_handle;
    }
  }

  removeDiscountFromSubtotalInCartLoop(totalDiscount, currencySymbol, currency);
};

const removeDiscountFromSubtotalInCartLoop = (
  totalDiscount,
  currencySymbol,
  currency
) => {
  let targetNode = null;
  targetNode = document.querySelector(`.totals__subtotal-value`);
  if (targetNode) {
    applyDiscountByCartLineItemsLoop(
      targetNode,
      totalDiscount,
      currencySymbol,
      currency
    );
  }
};

function applyDiscountByCartLineItemsLoop(
  element,
  discount,
  currencySymbol,
  currency
) {
  const totalLineItemsPrice = window.Loop.bundleCartAllItems.reduce(
    (acc, item) => {
      return (
        acc +
        (item.properties._isPresetBundleProduct
          ? item.discounted_price
          : item.price) *
          item.quantity
      );
    },
    0
  );
  const discountedPrice = (
    (totalLineItemsPrice / 100).toFixed(2) - discount
  ).toFixed(2);

  if (!isNaN(discountedPrice)) {
    element.innerHTML = `${currencySymbol ?? ""}${discountedPrice} ${
      currency ?? ""
    }`;
  }
}

const getBundleItemsLoop = (items) => {
  const bundleItemsMap = {};
  for (const item of items) {
    const bundleId = item?.properties?._bundleId ?? item?.properties?.bundleId;
    if (!bundleId) continue;
    if (!Object.hasOwn(bundleItemsMap, bundleId)) {
      bundleItemsMap[bundleId] = {
        bundleId,
        quantity: 1,
        price: (Number(item.price) * Number(item.quantity)) / 100,
        amount: (Number(item.price) * Number(item.quantity)) / 100,
        items: [item],
        discounted_price:
          (Number(item.discounted_price) * Number(item.quantity)) / 100,
        isPresetBundleProduct: item?.properties?._isPresetBundleProduct,
        discountTitle: item?.discounts?.[0]?.title ?? "",
        final_line_price: Number(item.final_line_price) / 100,
      };
    } else {
      bundleItemsMap[bundleId].price +=
        (Number(item.price) * Number(item.quantity)) / 100;
      bundleItemsMap[bundleId].discounted_price +=
        (Number(item.discounted_price) * Number(item.quantity)) / 100;
      bundleItemsMap[bundleId].amount +=
        (Number(item.price) * Number(item.quantity)) / 100;
      bundleItemsMap[bundleId].final_line_price +=
        Number(item.final_line_price) / 100;
      bundleItemsMap[bundleId].items.push(item);
    }
  }
  return sortItemsByTitleLoop(Object.values(bundleItemsMap));
};

const sortItemsByTitleLoop = (bundles) => {
  return bundles.map((bundle) => {
    bundle.items.sort((a, b) => {
      let titleA = a.title.toUpperCase();
      let titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
    return bundle;
  });
};

// const renderBundleItemsLoop = (bundleItems, clientId) => {
//     let _parent = document.querySelector(`.${clientId}`);
//     if (!_parent) {
//         _parent = document.querySelector(`.${BUNDLE_CONTAINER_CLASS}`);
//     }
//     if (!_parent) {
//         return;
//     }

//     for (let i = 0; i < bundleItems.length; ++i) {
//         let bundleItem = bundleItems[i];
//         const _bundleLink = bundleItem.isPresetBundleProduct
//             ? `https://${window.Shopify.shop}/products/${bundleItem.productHandle}`
//             : `${BUNDLE_LINK_PREFIX}/${bundleItem.loopBundleId}`;
//         let _template = undefined;
//         let hasTable = document.getElementsByTagName("table");

//         if (
//             bundleItem["isPresetBundleProduct"] &&
//             window.location.pathname === "/cart"
//         ) {
//             _template = getPresetBundleCartTemplateLoop(
//                 bundleItem,
//                 i + 1,
//                 _bundleLink
//             );
//         } else if (
//             bundleItem["isPresetBundleProduct"] &&
//             window.location.pathname !== "/cart"
//         ) {
//             _template = getPresetBundleCartDrawerTemplateLoop(
//                 bundleItem,
//                 i + 1,
//                 _bundleLink
//             );
//         } else if (clientId.includes("drawer") && hasTable.length) {
//             _template = getBundleCartDrawerTemplateLoop(
//                 bundleItem,
//                 i + 1,
//                 _bundleLink
//             );
//         } else if (hasTable.length) {
//             _template = getBundleCartTableTemplateLoop(
//                 bundleItem,
//                 i + 1,
//                 _bundleLink
//             );
//         } else {
//             _template = getBundleCartItemsDivTemplateLoop(
//                 bundleItem,
//                 i + 1,
//                 _bundleLink
//             );
//         }
//         _parent.innerHTML = `${_template} ${_parent.innerHTML}`;
//     }
// };

// const renderBundleItemsLoop = (bundleItems, clientId) => {
//   console.log("loop - renderBundleItemsLoop called with clientId:", clientId);

//   let _parent = document.querySelector(`.${clientId}`);
//   if (!_parent) {
//     console.log(
//       "loop - _parent not found using clientId, using BUNDLE_CONTAINER_CLASS"
//     );
//     _parent = document.querySelector(`.${BUNDLE_CONTAINER_CLASS}`);
//   }
//   if (!_parent) {
//     console.log("loop - _parent not found, exiting function");
//     return;
//   }

//   for (let i = 0; i < bundleItems.length; ++i) {
//     let bundleItem = bundleItems[i];
//     console.log("loop - Processing bundleItem:", bundleItem);

//     const _bundleLink = bundleItem.isPresetBundleProduct
//       ? `https://${window.Shopify.shop}/products/${bundleItem.productHandle}`
//       : `${BUNDLE_LINK_PREFIX}/${bundleItem.loopBundleId}`;
//     console.log("loop - Generated _bundleLink:", _bundleLink);

//     let _template = undefined;
//     let hasTable = document.getElementsByTagName("table");
//     console.log("loop - hasTable length:", hasTable.length);

//     if (
//       bundleItem["isPresetBundleProduct"] &&
//       window.location.pathname === "/cart"
//     ) {
//       console.log("loop - Using getPresetBundleCartTemplateLoop");
//       _template = getPresetBundleCartTemplateLoop(
//         bundleItem,
//         i + 1,
//         _bundleLink
//       );
//     } else if (
//       bundleItem["isPresetBundleProduct"] &&
//       window.location.pathname !== "/cart"
//     ) {
//       console.log("loop - Using getPresetBundleCartDrawerTemplateLoop");
//       _template = getPresetBundleCartDrawerTemplateLoop(
//         bundleItem,
//         i + 1,
//         _bundleLink
//       );
//     } else if (clientId.includes("drawer") && hasTable.length) {
//       console.log("loop - Using getBundleCartDrawerTemplateLoop");
//       _template = getBundleCartDrawerTemplateLoop(
//         bundleItem,
//         i + 1,
//         _bundleLink
//       );
//     } else if (hasTable.length) {
//       console.log("loop - Using getBundleCartTableTemplateLoop");
//       _template = getBundleCartTableTemplateLoop(
//         bundleItem,
//         i + 1,
//         _bundleLink
//       );
//     } else {
//       console.log("loop - Using getBundleCartItemsDivTemplateLoop");
//       _template = getBundleCartItemsDivTemplateLoop(
//         bundleItem,
//         i + 1,
//         _bundleLink
//       );
//     }
//     console.log("loop - Inserting _template into _parent");
//     _parent.innerHTML = `${_template} ${_parent.innerHTML}`;
//   }
// };

const renderBundleItemsLoop = (bundleItems, clientId) => {
  console.log("loop - renderBundleItemsLoop called with clientId:", clientId);

  let _parent = document.querySelector(`.${clientId}`);
  if (!_parent) {
    console.log("loop - _parent not found using clientId");
    return;
  }

  for (let i = 0; i < bundleItems.length; ++i) {
    let bundleItem = bundleItems[i];

    console.log("loop - Processing bundleItem:", bundleItem);

    const _bundleLink = bundleItem.isPresetBundleProduct
      ? `https://${window.Shopify.shop}/products/${bundleItem.productHandle}`
      : `${BUNDLE_LINK_PREFIX}/${bundleItem.loopBundleId}`;
    console.log("loop - Generated _bundleLink:", _bundleLink);

    let _template;
    if (clientId === "LOOP_rumi-cosmetiques_bundles") {
      console.log("loop - Using getBundleCartTableTemplateLoop");
      _template = getBundleCartTableTemplateLoop(
        bundleItem,
        i + 1,
        _bundleLink
      );
    } else if (clientId === "drawer-loop") {
      const existingItem = Array.from(
        _parent.querySelectorAll("[data-bundleid]")
      ).find(
        (item) => item.getAttribute("data-bundleid") === bundleItem.bundleId
      );
      if (existingItem) {
        console.log(
          "loop - _bundleLink already present, skipping:",
          bundleItem.bundleId
        );
        continue;
      } else {
        console.log("loop - Using getBundleCartDrawerTemplateLoop");
        _template = getBundleCartDrawerTemplateLoop(
          bundleItem,
          i + 1,
          _bundleLink
        );
      }
    } else {
      console.log("loop - No matching template found, exiting function");
      return;
    }

    console.log("loop - Inserting _template into _parent");
    _parent.innerHTML = `${_template} ${_parent.innerHTML}`;
  }
};

async function getCartItemsLoop() {
  const url = `https://${Shopify.cdnHost.split("/cdn")[0]}/cart.json`;
  const res = await (await fetch(url)).json();
  return res?.items ?? [];
}

function setupMutationLoop() {
  if (window.location.pathname.includes("/a/loop_subscriptions/bundle")) {
    return;
  }

  let previousQuantity = window.Loop.bundleCartAllItems.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
  let timeoutId;
  const handleChanges = async () => {
    const res = await getCartItemsLoop();
    let currenctQuantity = res.reduce((acc, curr) => acc + curr.quantity, 0);
    if (currenctQuantity !== previousQuantity) {
      window.location.reload();
    }
  };

  let targetNodes = document.querySelectorAll("form");
  const config = { childList: true, subtree: true };

  targetNodes.forEach((targetNode) => {
    const observer = new MutationObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleChanges, 500);
    });
    observer.observe(targetNode, config);
  });
}

function setupMutationIfElementDelete() {
  let firstChange = true;
  let timeoutId;
  const handleChanges = () => {
    if (firstChange) {
      firstChange = false;
    } else {
      if (!window.location.pathname.includes("/a/loop_subscriptions/bundle")) {
        firstChange = true;
        window.location.reload();
      }
    }
  };

  let targetNode = document.querySelector(".cart-container");
  if (!targetNode) {
    targetNode = document.querySelector(".cart__blocks");
  }
  if (!targetNode) {
    return;
  }

  const observer = new MutationObserver(() => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(handleChanges, 1000);
  });
  const config = { childList: true, subtree: true };
  observer.observe(targetNode, config);
}

function setupMutationOldLoop() {
  var firstChange = true;
  let targetNode = null;
  let observerNode = null;
  targetNode = document.querySelectorAll(`[data-cart-subtotal]`);
  if ((targetNode && targetNode.length > 1) || !targetNode.length) {
    observerNode = document.querySelector(`.${CART_SUBTOTAL_CLASS}`);
  } else {
    observerNode = targetNode[0];
  }

  if (!observerNode) {
    return;
  }

  const config = { attributes: true, childList: true, subtree: true };
  const callback = (mutationList, observer) => {
    if (firstChange) {
      firstChange = false;
      return;
    } else {
      firstChange = true;
      setTimeout(window.location.reload(), 1000);
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(observerNode, config);
}

const initLoopBundle = async (clientId) => {
  console.log(`Loop Bundle Initialized for ${clientId}`);

  try {
    let response = await fetch(
      `https://snippets.loopwork.co/bundle/${Shopify.shop}/${Shopify.theme.id}.json`
    );

    let data = (await response.json()) || {};
    // console.log("data", data);
    if (Object.keys(data).length) {
      BUNDLE_CONTAINER_CLASS = data.cartContainerClass;
      CART_SUBTOTAL_CLASS = data.cartSubtotalClass;
    }
  } catch (error) {
    console.log("Error fetching loop bundle classes");
  }

  const _cartItems = window.Loop.bundleCartAllItems;
  const _bundleItems = getBundleItemsLoop(_cartItems);
  await addExtraDetailsToBundleItemsLoop(_bundleItems);
  if (_bundleItems?.length) {
    setupMutationLoop();
    // setupMutationOldLoop();
    // setupMutationIfElementDelete();
  }
  renderBundleItemsLoop(_bundleItems, clientId);
};
