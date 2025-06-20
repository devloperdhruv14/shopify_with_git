class CartRemoveButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', (event) => {
      event.preventDefault();
      const cartItems = this.closest('cart-items') || this.closest('cart-drawer-items');
      cartItems.updateQuantity(this.dataset.index, 0);
    });
  }
}

customElements.define('cart-remove-button', CartRemoveButton);

class CartItems extends HTMLElement {
  constructor() {
    super();
    this.lineItemStatusElement =
      document.getElementById('shopping-cart-line-item-status') || document.getElementById('CartDrawer-LineItemStatus');

    const debouncedOnChange = debounce((event) => {
      this.onChange(event);
    }, ON_CHANGE_DEBOUNCE_TIMER);

    this.addEventListener('change', debouncedOnChange.bind(this));
  }

  cartUpdateUnsubscriber = undefined;

  connectedCallback() {
    this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
      if (event.source === 'cart-items') {
        return;
      }
      this.onCartUpdate();
    });

    console.log("asdad");


    /* Progressbar code */

    //  var vars = parseInt(window.settings.product_range_price);
    // var currnt = $(
    //   ".cart-drawer__footer .totals__total-value"
    // ).text();
    // var matchResult = currnt.match(/\d+\.\d+/);
    // if (matchResult !== null) {
    //   var currnt = parseFloat(matchResult[0]);
    // }

    // const currency = 100 * vars * window.Shopify.currency.rate / 100;
    
    // var percentage = (currnt / vars) * 100;
    // console.log("loop-cart: progress bar calculation", {
    //   percentage,
    //   currnt,
    //   vars,
    // });
    // if (percentage >= "100") {
    //   $(".progress_bar .progress_range_line").css("width", "100%");
    // } else {
    //   $(".progress_bar .progress_range_line").css("width", percentage + "%");
    // }
    
    // function customRound(amount) {
    //   if (isNaN(amount)) {
    //     throw new Error('Input must be a number');
    //   }
    //   let rounded = Math.round(amount * 10);
    //   let finalAmount = Math.round(rounded / 10);
    //   return finalAmount.toString();
    // }

    // var tot = currency - currnt;
    // console.log(tot, 'tot-currency')
    // $(".progress_range_label .price").text(
    //   '<span class="price">$' + customRound(tot) + "</span>"
    // );

    // if (currnt > vars) {
    //   $(".complete_progress").show();
    //   $(".progress_range_label").html("Free Shipping <span>Unlocked!</span>");
    // } else {
    //   $(".complete_progress").hide();
    //   $(".progress_range_label").html(
    //     'Just <span class="price">$' +
    //       customRound(tot) +
    //       "</span> Away from Free Shipping"
    //   );
    // }
    var vars = parseInt(window.settings.product_range_price);
    var currntElement = document.querySelector(".cart-drawer__footer .totals__total-value");
    var currnt = parseFloat(currntElement.textContent.match(/\d+\.\d+/)?.[0] || 0);
    
    const currency = 100 * vars * window.Shopify.currency.rate / 100;
    
    var percentage = (currnt / vars) * 100;
    console.log("loop-cart: progress bar calculation", {
      percentage,
      currnt,
      vars,
    });
    
    var progressBar = document.querySelector(".progress_bar .progress_range_line");
    progressBar.style.width = percentage >= 100 ? "100%" : percentage + "%";
    
    function customRound(amount) {
      let rounded = Math.round(amount * 10);
      let finalAmount = Math.round(rounded / 10);
      return finalAmount.toString();
    }
    
    var tot = currency - currnt;
    console.log(tot, 'tot-currency');
    
    var priceLabel = document.querySelector(".progress_range_label .price");
    // priceLabel.innerHTML = '<span class="price">$' + customRound(tot) + "</span>";
    priceLabel.innerHTML = '<span class="price">$' + tot.toFixed(2) + "</span>";
    if (currnt > vars) {
      document.querySelector(".progress_range_label").innerHTML = "Free Shipping <span>Unlocked!</span>";
    } else {
      document.querySelector(".progress_range_label").innerHTML =
        // 'You’re only <span class="price">$' + customRound(tot) + "</span> away from free shipping";
        'You’re only <span class="price">$' + tot.toFixed(2) + "</span> away from free shipping";
    }
  
    /* Cart Drawer slider code */
    var mySwiper = new Swiper(".cart-swiper-container", {
      loop: false,
      slidesPerView: 2,
      navigation: {
        nextEl: ".cart--button-next",
        prevEl: ".cart--button-prev",
      },
      paginationClickable: true,
      spaceBetween: 4,
    });
    
  }

  disconnectedCallback() {
    console.log("ooo");
    if (this.cartUpdateUnsubscriber) {
      this.cartUpdateUnsubscriber();
    }
  }

  resetQuantityInput(id) { 
    console.log("llkl");
    const input = this.querySelector(`#Quantity-${id}`);
    input.value = input.getAttribute('value');
    this.isEnterPressed = false;
  }

  setValidity(event, index, message) {
      console.log("jjj");
    event.target.setCustomValidity(message);
    event.target.reportValidity();
    this.resetQuantityInput(index);
    event.target.select();
  }

  validateQuantity(event) {
      console.log("asdasd");
    const inputValue = parseInt(event.target.value);
    const index = event.target.dataset.index;
    let message = '';

    if (inputValue < event.target.dataset.min) {
      message = window.quickOrderListStrings.min_error.replace('[min]', event.target.dataset.min);
    } else if (inputValue > parseInt(event.target.max)) {
      message = window.quickOrderListStrings.max_error.replace('[max]', event.target.max);
    } else if (inputValue % parseInt(event.target.step) !== 0) {
      message = window.quickOrderListStrings.step_error.replace('[step]', event.target.step);
    }

    if (message) {
      this.setValidity(event, index, message);
    } else {
      event.target.setCustomValidity('');
      event.target.reportValidity();
      this.updateQuantity(
        index,
        inputValue,
        document.activeElement.getAttribute('name'),
        event.target.dataset.quantityVariantId
      );
    }
  }

  onChange(event) {
    this.validateQuantity(event);
    
    // setTimeout(() => {
    // var vars = parseInt(window.settings.product_range_price);
    // console.log(vars);
    // var currntElement = document.querySelector(".cart__footer .totals__total-value");
    // var currnt = parseFloat(currntElement.textContent.match(/\d+\.\d+/)?.[0] || 0);
    
    // const currency = 100 * vars * window.Shopify.currency.rate / 100;
    
    // var percentage = (currnt / vars) * 100;
    // console.log("loop-cart: progress bar calculation", {
    //   percentage,
    //   currnt,
    //   vars,
    // });
    
    // var progressBar = document.querySelector(".progress_bar .progress_range_line");
    // progressBar.style.width = percentage >= 100 ? "100%" : percentage + "%";
    
    // function customRound(amount) {
    //   let rounded = Math.round(amount * 10);
    //   let finalAmount = Math.round(rounded / 10);
    //   return finalAmount.toString();
    // }
    
    // var tot = currency - currnt;
    // console.log(tot, 'tot-currency');
    
    // var priceLabel = document.querySelector("#main-cart-footer .progress_range_label .price");
    // priceLabel.innerHTML = '<span class="price">$' + tot.toFixed(2) + "</span>";
    
    // if (currnt > vars) {
    //   document.querySelector("#main-cart-footer .progress_range_label").innerHTML = "Free Shipping <span>Unlocked!</span>";
    // } else {
    //   document.querySelector("#main-cart-footer .progress_range_label").innerHTML =
    //     'You’re only <span class="price">$' + tot.toFixed(2) + "</span> away from free shipping";
    // }
      
    // }, 1000);
  }

  onCartUpdate() {
    console.log("sssss");
    if (this.tagName === 'CART-DRAWER-ITEMS') {
      fetch(`${routes.cart_url}?section_id=cart-drawer`)
        .then((response) => response.text())
        .then((responseText) => {
          const html = new DOMParser().parseFromString(responseText, 'text/html');
          const selectors = ['cart-drawer-items', '.cart-drawer__footer'];
          for (const selector of selectors) {
            const targetElement = document.querySelector(selector);
            const sourceElement = html.querySelector(selector);
            if (targetElement && sourceElement) {
              targetElement.replaceWith(sourceElement);
            }
          }
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      fetch(`${routes.cart_url}?section_id=main-cart-items`)
        .then((response) => response.text())
        .then((responseText) => {
          const html = new DOMParser().parseFromString(responseText, 'text/html');
          const sourceQty = html.querySelector('cart-items');
          this.innerHTML = sourceQty.innerHTML;
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }

  getSectionsToRender() {
    return [
      {
        id: 'main-cart-items',
        section: document.getElementById('main-cart-items').dataset.id,
        selector: '.js-contents',
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section',
      },
      {
        id: 'cart-live-region-text',
        section: 'cart-live-region-text',
        selector: '.shopify-section',
      },
      {
        id: 'main-cart-footer',
        section: document.getElementById('main-cart-footer').dataset.id,
        selector: '.js-contents',
      },
    ];
  }

  updateQuantity(line, quantity, name, variantId) {
    /* cart Progressbar call */
    cart_progress();
    
    this.enableLoading(line);

    const body = JSON.stringify({
      line,
      quantity,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname,
    });

    fetch(`${routes.cart_change_url}`, { ...fetchConfig(), ...{ body } })
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        const parsedState = JSON.parse(state);
        const quantityElement =
          document.getElementById(`Quantity-${line}`) || document.getElementById(`Drawer-quantity-${line}`);
        const items = document.querySelectorAll('.cart-item');

        if (parsedState.errors) {
          quantityElement.value = quantityElement.getAttribute('value');
          this.updateLiveRegions(line, parsedState.errors);
          return;
        }

        this.classList.toggle('is-empty', parsedState.item_count === 0);
        const cartDrawerWrapper = document.querySelector('cart-drawer');
        const cartFooter = document.getElementById('main-cart-footer');

        if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
        if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);

        this.getSectionsToRender().forEach((section) => {
          const elementToReplace =
            document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
          elementToReplace.innerHTML = this.getSectionInnerHTML(
            parsedState.sections[section.section],
            section.selector
          );
        });
        const updatedValue = parsedState.items[line - 1] ? parsedState.items[line - 1].quantity : undefined;
        let message = '';
        if (items.length === parsedState.items.length && updatedValue !== parseInt(quantityElement.value)) {
          if (typeof updatedValue === 'undefined') {
            message = window.cartStrings.error;
          } else {
            message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
          }
        }
        this.updateLiveRegions(line, message);

        const lineItem =
          document.getElementById(`CartItem-${line}`) || document.getElementById(`CartDrawer-Item-${line}`);
        if (lineItem && lineItem.querySelector(`[name="${name}"]`)) {
          cartDrawerWrapper
            ? trapFocus(cartDrawerWrapper, lineItem.querySelector(`[name="${name}"]`))
            : lineItem.querySelector(`[name="${name}"]`).focus();
        } else if (parsedState.item_count === 0 && cartDrawerWrapper) {
          trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'));
        } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {
          trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'));
        }

        publish(PUB_SUB_EVENTS.cartUpdate, { source: 'cart-items', cartData: parsedState, variantId: variantId });
      })
      .catch(() => {
        this.querySelectorAll('.loading__spinner').forEach((overlay) => overlay.classList.add('hidden'));
        const errors = document.getElementById('cart-errors') || document.getElementById('CartDrawer-CartErrors');
        errors.textContent = window.cartStrings.error;
      })
      .finally(() => {
        this.disableLoading(line);
      });
  }

  updateLiveRegions(line, message) {
    const lineItemError =
      document.getElementById(`Line-item-error-${line}`) || document.getElementById(`CartDrawer-LineItemError-${line}`);
    if (lineItemError) lineItemError.querySelector('.cart-item__error-text').textContent = message;

    this.lineItemStatusElement.setAttribute('aria-hidden', true);

    const cartStatus =
      document.getElementById('cart-live-region-text') || document.getElementById('CartDrawer-LiveRegionText');
    cartStatus.setAttribute('aria-hidden', false);

    setTimeout(() => {
      cartStatus.setAttribute('aria-hidden', true);
    }, 1000);
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }

  enableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.add('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading__spinner`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading__spinner`);

    [...cartItemElements, ...cartDrawerItemElements].forEach((overlay) => overlay.classList.remove('hidden'));

    document.activeElement.blur();
    this.lineItemStatusElement.setAttribute('aria-hidden', false);
  }

  disableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.remove('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading__spinner`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading__spinner`);

    cartItemElements.forEach((overlay) => overlay.classList.add('hidden'));
    cartDrawerItemElements.forEach((overlay) => overlay.classList.add('hidden'));
  }
}

customElements.define('cart-items', CartItems);

if (!customElements.get('cart-note')) {
  customElements.define(
    'cart-note',
    class CartNote extends HTMLElement {
      constructor() {
        super();

        this.addEventListener(
          'input',
          debounce((event) => {
            const body = JSON.stringify({ note: event.target.value });
            fetch(`${routes.cart_update_url}`, { ...fetchConfig(), ...{ body } });
          }, ON_CHANGE_DEBOUNCE_TIMER)
        );
      }
    }
  );
}



/* Cart page progressbar function */

function cart_progress() {
    // Delay execution for 1 second
    setTimeout(() => {

      var vars = parseInt(window.settings.product_range_price);
      console.log(vars);
      
      // Get the current total from the cart
      var currntElement = document.querySelector(".cart__footer .totals__total-value");
      var currnt = parseFloat(currntElement.textContent.match(/\d+\.\d+/)?.[0] || 0);
      console.log(currnt);
      
      // Calculate the currency value
      const currency = (100 * vars * window.Shopify.currency.rate) / 100;
      
      // Calculate the percentage of progress
      var percentage = (currnt / vars) * 100;
      console.log(percentage + "%");
      console.log("loop-cart: progress bar calculation", {
          percentage,
          currnt,
          vars,
      });
      
      // Update the progress bar
      var progressBar = document.querySelector("#main-cart-footer .progress_bar .progress_range_line");
      if (progressBar) {
          progressBar.style.width = percentage >= 100 ? "100%" : percentage + "%";
      }
      
      // Calculate the total amount needed for free shipping
      var tot = currency - currnt;
      console.log(tot, 'tot-currency');
      
      // Update the price label
      var priceLabel = document.querySelector("#main-cart-footer .progress_range_label .price");
      if (priceLabel) {
          priceLabel.innerHTML = '<span class="price">$' + tot.toFixed(2) + "</span>";
      } else {
          console.warn("Price label element not found");
      }
      
      // Update the message based on current amount
      var messageLabel = document.querySelector("#main-cart-footer .progress_range_label");
      if (messageLabel) {
          if (currnt >= vars) {
              messageLabel.innerHTML = "Free Shipping <span>Unlocked!</span>";
          } else {
              messageLabel.innerHTML = 'You’re only <span class="price">$' + tot.toFixed(2) + "</span> away from free shipping";
          }
      } else {
          console.warn("Message label element not found");
      }
          }, 2000);
      }

// Call the function whenever needed
cart_progress();
