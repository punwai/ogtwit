
var func = async (ix) => {
    const favicon = document.querySelector('link[rel="shortcut icon"]');
    console.log(favicon);

    let url = "data:image/png;base64,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";

    if (favicon) {
        console.log(favicon);
        favicon.href = url;
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = url;
      document.head.appendChild(newFavicon);
    }

    if (ix == 5) return;
    let elements = document.querySelectorAll('.r-16ek5rh.r-4qtqp9.r-yyyyoo');
    if (elements.length > 0) {
        let url = chrome.runtime.getURL('twitter.svg');
        elements[0].outerHTML= `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 248 204" class="r-16ek5rh r-4qtqp9 r-yyyyoo" style="width:32px">
            <path fill="#1d9bf0" d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"/>
        </svg>`;
    }
    setTimeout(() => { func(ix + 1) }, 100);
    // }
}

func(0);