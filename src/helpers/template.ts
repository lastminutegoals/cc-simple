import type { InitParams } from '../types.js';

function renderItems(items: InitParams['consentList']) {
    return items.map(item => /*html*/`
        <li data-expanded="false" data-cc-value="${item.value}">
            <div>
                <div class="cc-expand" data-cc="li-expand">
                    <div class="cc-icon cc-icon-chevron"></div>
                    <h3>${item.title}</h3>
                </div>
                <label class="cc-toggle">
                    <input type="checkbox" checked ${item.required ? 'disabled' : ''}>
                    <div><span></span><span></span></div>
                </label>
            </div>
            <p>${item.description}</p>
        </li>
    `).join('');
}

export function renderConsent(items: InitParams['consentList'], policyURL: InitParams['policyURL']) {
    const html = document.createRange().createContextualFragment(/*html*/`
        <div class="cc-simple">
            <div class="cc-prompt animate-prompt-up">
                <main>
                    <h3>We use cookies!</h3>
                    <p>Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a class="cc-link" data-cc="modal-up">Let me choose.</a></p>
                    <div class="cc-btn cc-btn-blue" data-cc="accept">Accept all</div>
                </main>
            </div>
            <div class="cc-modal" role="alertdialog" aria-modal="true" data-visible="false">
                <div class="cc-modal-inner">
                    <header>
                        <h3>Cookie preferences</h3>
                        <div class="cc-btn cc-btn-square cc-btn-gray" data-cc="modal-down">
                            <div class="cc-icon cc-icon-x"></div>
                        </div>                
                    </header>
                    <main>
                        <div>
                            <h3 class="cc-title">Cookie usage</h3>
                            <p>We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full privacy policy.</p>
                        </div>
                        <ul>
                            ${renderItems(items)}
                        </ul>
                        <div>
                            <h3 class="cc-title">More information</h3>
                            <p>To reset your preferences, clear web storage (also known as local storage) associated with this domain. For any queries in relation to our policy on cookies and your choices, please review our <a class="cc-link" href="${policyURL}">Privacy policy</a>.</p>
                        </div>
                    </main>
                    <footer>
                        <div class="cc-btn cc-btn-blue" data-cc="accept">Accept all</div>
                        <div class="cc-btn cc-btn-gray cc-btn-inverted" data-cc="save">Save settings</div>
                    </footer>
                </div>
            </div>
        </div>`
    );

    document.body.appendChild(html);
}