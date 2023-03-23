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
            <div>${item.description}</div>
        </li>
    `).join('');
}

export function renderConsent(props: Pick<InitParams, 'consentList' | 'promptHTML' | 'headerHTML' | 'footerHTML'>) {
    const html = document.createRange().createContextualFragment(/*html*/`
        <div class="cc-simple">
            <div class="cc-prompt animate-prompt-up">
                <main>
                    <h3>We use cookies!</h3>
                    ${props.promptHTML}
                    <div>
                        <div class="cc-btn cc-btn-blue" data-cc="accept">Accept all</div>
                        <div class="cc-btn cc-btn-gray cc-btn-inverted" data-cc="modal-up">Cookie preferences</div>
                    </div>
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
                            ${props.headerHTML}
                        </div>
                        <ul>
                            ${renderItems(props.consentList)}
                        </ul>
                        <div>
                            <h3 class="cc-title">More information</h3>
                            ${props.footerHTML}
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