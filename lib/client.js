// Generated from templates/ by scripts/build-client.mjs. Edit the sources.
(function () {
/* clsx
MIT License

Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
const clsx = (() => {
  const module = { exports: {} };
  function r(e){var o,t,f="";if("string"==typeof e||"number"==typeof e)f+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(o=0;o<n;o++)e[o]&&(t=r(e[o]))&&(f&&(f+=" "),f+=t)}else for(t in e)e[t]&&(f&&(f+=" "),f+=t);return f}function e(){for(var e,o,t=0,f="",n=arguments.length;t<n;t++)(e=arguments[t])&&(o=r(e))&&(f&&(f+=" "),f+=o);return f}module.exports=e,module.exports.clsx=e;
  return module.exports.clsx;
})();
const styles = Object.freeze({"dshc-root":"dshc-root","topbar":"dsh-calendar_topbar","dialog":"dsh-calendar_dialog","dshc-float":"dshc-float","dshc-fab":"dshc-fab","selectable":"dsh-calendar_selectable","dshc-shell":"dshc-shell","dshc-toolbar":"dshc-toolbar","calendarToolbar":"dsh-calendar_calendarToolbar","brand":"dsh-calendar_brand","topActions":"dsh-calendar_topActions","period":"dsh-calendar_period","emptyActions":"dsh-calendar_emptyActions","dshc-btn":"dshc-btn","commandTrigger":"dsh-calendar_commandTrigger","dshc-title":"dshc-title","brandMark":"dsh-calendar_brandMark","emptyIcon":"dsh-calendar_emptyIcon","zone":"dsh-calendar_zone","layoutChoices":"dsh-calendar_layoutChoices","paletteChoices":"dsh-calendar_paletteChoices","paletteSwatch":"dsh-calendar_paletteSwatch","triggerKey":"dsh-calendar_triggerKey","layoutDropdown":"dsh-calendar_layoutDropdown","segments":"dsh-calendar_segments","segment":"dsh-calendar_segment","outline":"dsh-calendar_outline","ghost":"dsh-calendar_ghost","primary":"dsh-calendar_primary","danger":"dsh-calendar_danger","iconButton":"dsh-calendar_iconButton","fallbackIcon":"dsh-calendar_fallbackIcon","dshc-spacer":"dshc-spacer","dshc-monthhead":"dshc-monthhead","dshc-sub":"dshc-sub","dshc-mono":"dshc-mono","dshc-time":"dshc-time","dshc-hour":"dshc-hour","miniDay":"dsh-calendar_miniDay","slotRange":"dsh-calendar_slotRange","schedule":"dsh-calendar_schedule","railHandle":"dsh-calendar_railHandle","rail":"dsh-calendar_rail","railScroll":"dsh-calendar_railScroll","railSection":"dsh-calendar_railSection","miniHeading":"dsh-calendar_miniHeading","miniCalendar":"dsh-calendar_miniCalendar","miniGrid":"dsh-calendar_miniGrid","miniWeekday":"dsh-calendar_miniWeekday","out":"dsh-calendar_out","calendarSource":"dsh-calendar_calendarSource","dshc-check":"dshc-check","conflictCard":"dsh-calendar_conflictCard","warn":"dsh-calendar_warn","conflictRange":"dsh-calendar_conflictRange","conflictLink":"dsh-calendar_conflictLink","workspacePanel":"dsh-calendar_workspacePanel","scheduleMain":"dsh-calendar_scheduleMain","calendarSurface":"dsh-calendar_calendarSurface","weekView":"dsh-calendar_weekView","dshc-grid":"dshc-grid","dshc-cell":"dshc-cell","dshc-dow":"dshc-dow","dshc-dayhead":"dshc-dayhead","dshc-daynum":"dshc-daynum","dshc-chip":"dshc-chip","dshc-slot":"dshc-slot","allday":"dsh-calendar_allday","recurring":"dsh-calendar_recurring","dshc-slot-time":"dshc-slot-time","dshc-more":"dshc-more","conflicted":"dsh-calendar_conflicted","dshc-week":"dshc-week","dshc-daycol":"dshc-daycol","hourSlot":"dsh-calendar_hourSlot","movable":"dsh-calendar_movable","dragging":"dsh-calendar_dragging","dshc-slot-title":"dshc-slot-title","dshc-resize":"dshc-resize","dshc-ghost":"dshc-ghost","allDayList":"dsh-calendar_allDayList","dshc-draghint":"dshc-draghint","dshc-footer":"dshc-footer","dshc-emptyhint":"dshc-emptyhint","shortcutHints":"dsh-calendar_shortcutHints","dshc-agenda":"dshc-agenda","dshc-daygroup":"dshc-daygroup","dshc-row":"dshc-row","dshc-main":"dshc-main","dshc-daylabel":"dshc-daylabel","rowTrigger":"dsh-calendar_rowTrigger","rowActions":"dsh-calendar_rowActions","dshc-name":"dshc-name","dshc-meta":"dshc-meta","dshc-tag":"dshc-tag","success":"dsh-calendar_success","error":"dsh-calendar_error","w-empty":"w-empty","dshc-skel":"dshc-skel","dshc-alert":"dshc-alert","dshc-undo":"dshc-undo","demo":"dsh-calendar_demo","workspacePage":"dsh-calendar_workspacePage","workspaceScroll":"dsh-calendar_workspaceScroll","pageUpdates":"dsh-calendar_pageUpdates","draftControls":"dsh-calendar_draftControls","pageInner":"dsh-calendar_pageInner","pageHeading":"dsh-calendar_pageHeading","pageIntro":"dsh-calendar_pageIntro","card":"dsh-calendar_card","pageHeader":"dsh-calendar_pageHeader","cardToolbar":"dsh-calendar_cardToolbar","dshc-field":"dshc-field","dshc-two":"dshc-two","formGrid":"dsh-calendar_formGrid","fullField":"dsh-calendar_fullField","dshc-input":"dshc-input","fieldControl":"dsh-calendar_fieldControl","pickerTrigger":"dsh-calendar_pickerTrigger","temporalField":"dsh-calendar_temporalField","temporalIcon":"dsh-calendar_temporalIcon","picker":"dsh-calendar_picker","toolbarPicker":"dsh-calendar_toolbarPicker","layoutTrigger":"dsh-calendar_layoutTrigger","menu":"dsh-calendar_menu","dshc-actions":"dshc-actions","dshc-steps":"dshc-steps","dshc-link":"dshc-link","helpLinks":"dsh-calendar_helpLinks","draftHint":"dsh-calendar_draftHint","reviewMeta":"dsh-calendar_reviewMeta","dshc-kv":"dshc-kv","dshc-overlay":"dshc-overlay","dshc-modalwrap":"dshc-modalwrap","dshc-drawer":"dshc-drawer","dshc-modal":"dshc-modal","dialogFrame":"dsh-calendar_dialogFrame","dialogHeader":"dsh-calendar_dialogHeader","dialogBody":"dsh-calendar_dialogBody","dialogFooter":"dsh-calendar_dialogFooter","commandBody":"dsh-calendar_commandBody","commandList":"dsh-calendar_commandList","conflictList":"dsh-calendar_conflictList","commandRow":"dsh-calendar_commandRow","commandKey":"dsh-calendar_commandKey","availabilityDays":"dsh-calendar_availabilityDays","availabilityFieldset":"dsh-calendar_availabilityFieldset","slotGrid":"dsh-calendar_slotGrid","slotCard":"dsh-calendar_slotCard","copyRow":"dsh-calendar_copyRow","copyStatus":"dsh-calendar_copyStatus","tourTrigger":"dsh-calendar_tourTrigger","tourLayer":"dsh-calendar_tourLayer","tourSpotlight":"dsh-calendar_tourSpotlight","tourBackdropFallback":"dsh-calendar_tourBackdropFallback","tourCard":"dsh-calendar_tourCard","tourArrow":"dsh-calendar_tourArrow","tourHead":"dsh-calendar_tourHead","tourStepMeta":"dsh-calendar_tourStepMeta","tourStepBadge":"dsh-calendar_tourStepBadge","tourDots":"dsh-calendar_tourDots","tourDot":"dsh-calendar_tourDot","tourSkip":"dsh-calendar_tourSkip","tourTitle":"dsh-calendar_tourTitle","tourDesc":"dsh-calendar_tourDesc","tourInlineAction":"dsh-calendar_tourInlineAction","tourFooter":"dsh-calendar_tourFooter","tourNav":"dsh-calendar_tourNav","dshc-import-actions":"dshc-import-actions","dshc-import-rows":"dshc-import-rows","dshc-import-row":"dshc-import-row","dshc-import-pick":"dshc-import-pick","dshc-import-warning":"dshc-import-warning","importText":"dsh-calendar_importText","layoutFloating":"dsh-calendar_layoutFloating","layoutSpotlight":"dsh-calendar_layoutSpotlight","focusRibbon":"dsh-calendar_focusRibbon","focusDatePill":"dsh-calendar_focusDatePill","focusNextPill":"dsh-calendar_focusNextPill","focusConflictPill":"dsh-calendar_focusConflictPill","focusQuickNew":"dsh-calendar_focusQuickNew","focusDot":"dsh-calendar_focusDot","focusDateLabel":"dsh-calendar_focusDateLabel","focusDateValue":"dsh-calendar_focusDateValue","focusNextTag":"dsh-calendar_focusNextTag","focusNextTitle":"dsh-calendar_focusNextTitle","focusCountdown":"dsh-calendar_focusCountdown","focusClearPill":"dsh-calendar_focusClearPill","focusRight":"dsh-calendar_focusRight","layoutCards":"dsh-calendar_layoutCards","calendarPageIn":"dsh-calendar_calendarPageIn","toolbarConflicts":"dsh-calendar_toolbarConflicts"});
const CSS = `:where([data-dsh-style]),
:where([data-dsh-portal-synced]),
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]){--dsh-ease-out:cubic-bezier(0.22, 1, 0.36, 1);--dsh-ease-in-out:cubic-bezier(0.4, 0, 0.2, 1);--dsh-ease-spring:cubic-bezier(0.34, 1.56, 0.64, 1);--dsh-motion-fast:140ms;--dsh-motion-base:200ms;--dsh-motion-dialog:220ms;--dsh-control-border-width:0.5px;--dsh-button-shadow:none;--dsh-button-hover-shadow:0 2px 6px rgba(15, 23, 42, 0.06);--dsh-card-shadow:none;--dsh-card-hover-shadow:0 6px 18px rgba(15, 23, 42, 0.08);--dsh-font-display:"Cascadia Code SemiBold", "Cascadia Code", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-body:"Cascadia Code", "Cascadia Mono", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-mono:"Cascadia Mono", "Cascadia Code", "YouYuan", "幼圆", Consolas, monospace;--dsh-display-weight:700;--dsh-display-tracking:0.015em;--dsh-body-tracking:normal;--dsh-serif-font:"Palatino Linotype", Georgia, "Noto Serif SC", "STZhongsong", "华文中宋", "STSong", "华文宋体", serif;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
@supports (transition-timing-function: linear(0, 1)){:where([data-dsh-style]),
  :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]){--dsh-ease-spring:linear(
      0, 0.402 7.4%, 0.711 15.3%, 0.929 23.7%, 1.008 28.2%,
      1.067 33%, 1.099 36.9%, 1.12 41%, 1.13 45.4%, 1.13 50.1%,
      1.111 58.5%, 1.019 83.2%, 1.004 91.3%, 1
    )}}
[data-window-drag-exclude]{-webkit-app-region:no-drag}
[data-dsh-style="harness"],
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="harness"], :has([data-dsh-style="harness"])){--dsh-font-display:"Cascadia Code SemiBold", "Cascadia Code", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-body:"Cascadia Code", "Cascadia Mono", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-mono:"Cascadia Mono", "Cascadia Code", "YouYuan", "幼圆", Consolas, monospace;--dsh-display-weight:700;--dsh-display-tracking:0.015em;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
:where(body:not([data-ds-dark-theme])) [data-dsh-style="harness"],
:where(body:not([data-ds-dark-theme])) :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style="harness"]){color-scheme:light;accent-color:var(--dsw-alias-state-business-primary, #4176e6)}
:root:not([data-dsh-host-tokens]) [data-dsh-style="harness"]{--dsw-radius-xs:6px;--dsw-radius-sm:8px;--dsw-radius-md:12px;--dsw-radius-lg:16px;--dsw-radius-xl:20px}
body:not([data-ds-dark-theme]) [data-dsh-style="harness"]{--dsh-surface-spotlight:rgba(65, 118, 230, 0.06)}
body[data-ds-dark-theme] [data-dsh-style="harness"],
body[data-ds-dark-theme] :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="harness"], :has([data-dsh-style="harness"])){color-scheme:dark;accent-color:#7aaaff;--dsw-alias-bg-base:#1f232b;--dsw-alias-bg-layer-1:#272c36;--dsw-alias-bg-layer-2:#2f3542;--dsw-alias-bg-layer-3:#373e4d;--dsw-alias-bg-overlay:#2a303c;--dsw-alias-bg-module-platform:#2c323e;--dsw-alias-settings-card-fill:#262b35;--dsw-alias-settings-card-stroke:rgba(226, 232, 240, 0.12);--dsw-specific-menu:rgba(39, 44, 54, 0.96);--dsw-alias-border-l1:rgba(226, 232, 240, 0.09);--dsw-alias-border-l2:rgba(226, 232, 240, 0.15);--dsw-alias-border-l3:rgba(226, 232, 240, 0.22);--dsw-alias-border-l4:rgba(226, 232, 240, 0.28);--dsw-alias-label-primary:#eef2f7;--dsw-alias-label-secondary:#b6c0cf;--dsw-alias-label-tertiary:#8d98ab;--dsw-alias-label-dimmed:#737e91;--dsw-alias-brand-primary:#7aaaff;--dsw-alias-brand-text:#eef2f7;--dsw-alias-state-business-primary:#7aaaff;--dsw-alias-state-business-tertiary:rgba(122, 170, 255, 0.16);--dsw-alias-link:#8bb6ff;--dsw-alias-button-primary-fill:#5b8def;--dsw-alias-button-primary-hover:#6f9cf4;--dsw-alias-button-primary-ink:#ffffff;--dsw-alias-interactive-bg-hover:rgba(226, 232, 240, 0.07);--dsw-alias-interactive-bg-active:rgba(226, 232, 240, 0.13);--dsw-alias-interactive-bg-hover-accent:rgba(122, 170, 255, 0.15);--dsw-alias-interactive-bg-hover-danger:rgba(248, 113, 113, 0.16);--dsw-alias-state-error-primary:#f87171;--dsw-alias-state-warn-primary:#fbbf24;--dsw-alias-state-warn-label:#fcd34d;--dsw-alias-state-warn-tertiary:rgba(251, 191, 36, 0.15);--dsw-alias-state-success-primary:#4ade80;--dsw-elevation-panel:0 4px 16px rgba(10, 14, 22, 0.28), 0 0 0 1px rgba(226, 232, 240, 0.12);--dsw-elevation-prominent:0 14px 38px rgba(10, 14, 22, 0.42), 0 0 0 1px rgba(226, 232, 240, 0.16);--dsh-button-hover-shadow:0 2px 8px rgba(10, 14, 22, 0.25);--dsh-card-hover-shadow:0 8px 22px rgba(10, 14, 22, 0.32);--dsh-surface-spotlight:rgba(122, 170, 255, 0.10)}
[data-dsh-style="cream"],
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="cream"], :has([data-dsh-style="cream"])){color-scheme:light;accent-color:#9e5829;--dsw-alias-bg-base:#faf7f0;--dsw-alias-bg-layer-1:#f3efe4;--dsw-alias-bg-layer-2:#eae3d3;--dsw-alias-bg-layer-3:#e0d7c3;--dsw-alias-bg-overlay:#fcfaf4;--dsw-alias-bg-module-platform:#efe9da;--dsw-alias-settings-card-fill:#fdfbf6;--dsw-alias-settings-card-stroke:#d4c8ae;--dsw-specific-menu:rgba(252, 250, 244, 0.97);--dsw-alias-border-l1:#e6dec8;--dsw-alias-border-l2:#d4c8ae;--dsw-alias-border-l3:#c0b193;--dsw-alias-border-l4:#ad9c7c;--dsw-alias-label-primary:#2b2620;--dsw-alias-label-secondary:#655b4e;--dsw-alias-label-tertiary:#857968;--dsw-alias-label-dimmed:#9c907f;--dsw-alias-brand-primary:#9e5829;--dsw-alias-brand-text:#2b2620;--dsw-alias-state-business-primary:#a65e2e;--dsw-alias-state-business-tertiary:rgba(166, 94, 46, 0.13);--dsw-alias-link:#934e20;--dsw-alias-button-primary-fill:#9e5829;--dsw-alias-button-primary-hover:#86481e;--dsw-alias-button-primary-ink:#fffdf9;--dsw-alias-interactive-bg-hover:rgba(108, 84, 50, 0.075);--dsw-alias-interactive-bg-active:rgba(166, 94, 46, 0.14);--dsw-alias-interactive-bg-hover-accent:rgba(166, 94, 46, 0.12);--dsw-alias-interactive-bg-hover-danger:rgba(185, 56, 44, 0.11);--dsw-alias-state-error-primary:#b9382c;--dsw-alias-state-warn-primary:#b45309;--dsw-alias-state-warn-label:#8c3d08;--dsw-alias-state-warn-tertiary:#fdefd6;--dsw-alias-state-success-primary:#2a6f4e;--dsw-radius-xs:6px;--dsw-radius-sm:9px;--dsw-radius-md:13px;--dsw-radius-lg:16px;--dsw-radius-xl:20px;--dsw-elevation-panel:0 1px 2px rgba(68, 52, 32, 0.06), 3px 3px 0 #ebe3d1, 0 0 0 1px rgba(180, 164, 138, 0.42);--dsw-elevation-prominent:0 14px 34px rgba(68, 52, 32, 0.14), 3px 3px 0 #ebe3d1, 0 0 0 1px rgba(180, 164, 138, 0.48);--dsh-control-border-width:1px;--dsh-button-hover-shadow:0 2px 6px rgba(84, 62, 34, 0.09);--dsh-card-shadow:0 1px 2px rgba(68, 52, 32, 0.06), 3px 3px 0 #ebe3d1;--dsh-card-hover-shadow:0 4px 10px rgba(68, 52, 32, 0.10), 4px 4px 0 #e2d7be;--dsh-surface-spotlight:rgba(166, 94, 46, 0.08);--dsh-font-display:"Trebuchet MS", "STKaiti", "华文楷体", "Noto Serif SC SemiBold", serif;--dsh-font-body:"Source Sans 3", "Noto Sans SC", "Microsoft YaHei UI", sans-serif;--dsh-font-mono:"Cascadia Mono", Consolas, monospace;--dsh-display-weight:700;--dsh-display-tracking:normal;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
[data-dsh-style="cream"] :where([data-dsh-card], .dsh-card){border-color:var(--dsw-alias-border-l2);box-shadow:var(--dsh-card-shadow)}
[data-dsh-style="cream"] :where([data-dsh-row], .dsh-row){border-block-end:1px dashed var(--dsw-alias-border-l2)}
[data-dsh-style="cream"] [role="tab"][aria-selected="true"]{background:rgba(158, 88, 41, 0.10);color:#7d4119;box-shadow:inset 0 2px 0 rgba(158, 88, 41, 0.22)}
[data-dsh-style="cream"] [role="tab"][aria-selected="true"]::after{border-block-end-color:#9e5829;border-block-end-width:2.5px}
[data-dsh-style="claude"],
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="claude"], :has([data-dsh-style="claude"])){color-scheme:light;accent-color:#c96442;--dsw-alias-bg-base:#f5f4ed;--dsw-alias-bg-layer-1:#ece9df;--dsw-alias-bg-layer-2:#e3dfd2;--dsw-alias-bg-layer-3:#d8d3c3;--dsw-alias-bg-overlay:#faf9f4;--dsw-alias-bg-module-platform:#e7e3d6;--dsw-alias-settings-card-fill:#faf9f4;--dsw-alias-settings-card-stroke:transparent;--dsw-specific-menu:rgba(250, 249, 244, 0.97);--dsw-alias-border-l1:#e4e0d3;--dsw-alias-border-l2:#d5d0c3;--dsw-alias-border-l3:#c1bbb0;--dsw-alias-border-l4:#aba495;--dsw-alias-label-primary:#1f1e1b;--dsw-alias-label-secondary:#5d5a51;--dsw-alias-label-tertiary:#7b776c;--dsw-alias-label-dimmed:#948f83;--dsw-alias-brand-primary:#c96442;--dsw-alias-brand-text:#1f1e1b;--dsw-alias-state-business-primary:#c96442;--dsw-alias-state-business-tertiary:rgba(201, 100, 66, 0.14);--dsw-alias-link:#b35030;--dsw-alias-button-primary-fill:#c96442;--dsw-alias-button-primary-hover:#b25232;--dsw-alias-button-primary-ink:#faf9f5;--dsw-alias-interactive-bg-hover:rgba(31, 30, 27, 0.055);--dsw-alias-interactive-bg-active:rgba(201, 100, 66, 0.14);--dsw-alias-interactive-bg-hover-accent:rgba(201, 100, 66, 0.11);--dsw-alias-interactive-bg-hover-danger:rgba(180, 48, 42, 0.11);--dsw-alias-state-error-primary:#b4302a;--dsw-alias-state-warn-primary:#b85d19;--dsw-alias-state-warn-label:#8c430c;--dsw-alias-state-warn-tertiary:#f7e8d6;--dsw-alias-state-success-primary:#2d6a4f;--dsw-radius-xs:7px;--dsw-radius-sm:10px;--dsw-radius-md:14px;--dsw-radius-lg:18px;--dsw-radius-xl:22px;--dsw-elevation-panel:0 2px 12px rgba(31, 30, 27, 0.05), 0 0 0 1px rgba(145, 139, 126, 0.18);--dsw-elevation-prominent:0 16px 38px rgba(31, 30, 27, 0.13), 0 2px 8px rgba(31, 30, 27, 0.05), 0 0 0 1px rgba(145, 139, 126, 0.24);--dsh-control-border-width:1px;--dsh-button-hover-shadow:0 2px 7px rgba(31, 30, 27, 0.08);--dsh-card-shadow:0 1px 3px rgba(31, 30, 27, 0.05), 0 0 0 1px rgba(145, 139, 126, 0.13);--dsh-card-hover-shadow:0 8px 22px rgba(31, 30, 27, 0.08), 0 0 0 1px rgba(145, 139, 126, 0.20);--dsh-surface-spotlight:rgba(201, 100, 66, 0.08);--dsh-font-display:"Palatino Linotype", Georgia, "Noto Serif SC SemiBold", "Noto Serif SC", "STZhongsong", "华文中宋", serif;--dsh-font-body:Georgia, "Noto Serif SC", "STSong", "华文宋体", serif;--dsh-font-mono:"Cascadia Code", "Cascadia Mono", Consolas, monospace;--dsh-display-weight:700;--dsh-display-tracking:-0.01em;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
[data-dsh-style="claude"]{background-color:var(--dsw-alias-bg-base);background-image:radial-gradient(rgba(31, 30, 27, 0.024) 0.75px, transparent 0),
    linear-gradient(180deg, rgba(255, 253, 247, 0.45), rgba(236, 233, 223, 0.25));background-size:16px 16px, 100% 100%}
[data-dsh-style="claude"] :where([data-dsh-card], .dsh-card){background:var(--dsw-alias-settings-card-fill);border-color:transparent;box-shadow:var(--dsh-card-shadow)}
[data-dsh-style="claude"] :where(
  header h1,
  [data-dsh-editorial-heading],
  [data-dsh-serif],
  [data-dsh-card] :is(h2, h3, .dsh-card-title),
  .dsh-card :is(h2, h3, .dsh-card-title),
  [data-dsh-reader] :is(h1, h2),
  .dsh-reader :is(h1, h2)
),
:where([role="dialog"], dialog):where([data-dsh-style="claude"], :has([data-dsh-style="claude"])) header h2{font-family:var(--dsh-font-display);font-weight:var(--dsh-display-weight, 700);letter-spacing:var(--dsh-display-tracking, -0.01em)}
[data-dsh-style="pixel8bit"],
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="pixel8bit"], :has([data-dsh-style="pixel8bit"])){color-scheme:light;accent-color:#2e7d5b;--dsw-alias-bg-base:#f4f6e8;--dsw-alias-bg-layer-1:#e7eed2;--dsw-alias-bg-layer-2:#dbe5c0;--dsw-alias-bg-layer-3:#cedaad;--dsw-alias-bg-overlay:#f9fbf0;--dsw-alias-bg-module-platform:#e2ebc9;--dsw-alias-settings-card-fill:#edf2dc;--dsw-alias-settings-card-stroke:#1e2826;--dsw-specific-menu:#f9fbf0;--dsw-alias-border-l1:#7e9478;--dsw-alias-border-l2:#1e2826;--dsw-alias-border-l3:#1e2826;--dsw-alias-border-l4:#1e2826;--dsw-alias-label-primary:#1e2826;--dsw-alias-label-secondary:#3d514c;--dsw-alias-label-tertiary:#58706a;--dsw-alias-label-dimmed:#6e857f;--dsw-alias-brand-primary:#2e7d5b;--dsw-alias-brand-text:#1e2826;--dsw-alias-state-business-primary:#2e7d5b;--dsw-alias-state-business-tertiary:rgba(46, 125, 91, 0.18);--dsw-alias-link:#226448;--dsw-alias-button-primary-fill:#2e7d5b;--dsw-alias-button-primary-hover:#24674a;--dsw-alias-button-primary-ink:#f4f6e8;--dsw-alias-interactive-bg-hover:#dfe9c4;--dsw-alias-interactive-bg-active:#cfe0ad;--dsw-alias-interactive-bg-hover-accent:rgba(46, 125, 91, 0.16);--dsw-alias-interactive-bg-hover-danger:rgba(217, 91, 67, 0.18);--dsw-alias-state-error-primary:#d95b43;--dsw-alias-state-warn-primary:#c47614;--dsw-alias-state-warn-label:#7a4808;--dsw-alias-state-warn-tertiary:#f6e7b4;--dsw-alias-state-success-primary:#2e7d5b;--dsh-pixel-accent-secondary:#d95b43;--dsw-radius-xs:0px;--dsw-radius-sm:0px;--dsw-radius-md:0px;--dsw-radius-lg:0px;--dsw-radius-xl:0px;--dsw-corner-shape:square;--dsw-elevation-panel:2px 2px 0px #1e2826;--dsw-elevation-prominent:4px 4px 0px #1e2826;--dsh-control-border-width:2px;--dsh-button-shadow:2px 2px 0px #1e2826;--dsh-button-hover-shadow:3px 3px 0px #1e2826;--dsh-card-shadow:2px 2px 0px #1e2826;--dsh-card-hover-shadow:4px 4px 0px #1e2826;--dsh-surface-spotlight:rgba(46, 125, 91, 0.12);--dsh-font-display:"Cascadia Code SemiBold", "Cascadia Code", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-body:"Cascadia Code", "Cascadia Mono", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-mono:"Cascadia Mono", "Cascadia Code", "YouYuan", "幼圆", Consolas, monospace;--dsh-display-weight:700;--dsh-display-tracking:0.03em;--dsh-body-tracking:0.03em;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
[data-dsh-style="pixel8bit"] :where(.dsh-header, [data-dsh-header], .dsh-wb-header){background-color:var(--dsw-alias-bg-layer-1);background-image:radial-gradient(rgba(30, 40, 38, 0.14) 1px, transparent 0);background-size:6px 6px;border-block-end:2px solid #1e2826}
[data-dsh-style="pixel8bit"] :where(button, input, select, textarea, [role="button"], [role="tab"], [role="menuitem"], [role="menuitemradio"], [data-dsh-card], .dsh-card, [data-dsh-panel], .dsh-panel),
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="pixel8bit"], :has([data-dsh-style="pixel8bit"])),
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="pixel8bit"], :has([data-dsh-style="pixel8bit"])) :where(button, input, select, textarea, [role="menuitem"], [role="menuitemradio"]){border-radius:0px !important;corner-shape:square}
[data-dsh-style="pixel8bit"] :where(button:not([role="tab"]), .dsh-btn),
:where([role="dialog"], [role="alertdialog"], dialog):where([data-dsh-style="pixel8bit"], :has([data-dsh-style="pixel8bit"])) :where(button:not([role="tab"]), .dsh-btn){border:2px solid #1e2826;box-shadow:2px 2px 0px #1e2826}
[data-dsh-style="pixel8bit"] :where([data-dsh-card], .dsh-card, [data-dsh-panel], .dsh-panel){border:2px solid #1e2826;box-shadow:2px 2px 0px #1e2826}
[data-dsh-style="pixel8bit"] :where(input:not([type="checkbox"]):not([type="radio"]):not([type="range"]), select, textarea),
:where([role="dialog"], [role="alertdialog"], dialog):where([data-dsh-style="pixel8bit"], :has([data-dsh-style="pixel8bit"])) :where(input:not([type="checkbox"]):not([type="radio"]):not([type="range"]), select, textarea){border-width:2px;border-color:#1e2826}
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="pixel8bit"], :has([data-dsh-style="pixel8bit"])){border:2px solid #1e2826 !important;box-shadow:4px 4px 0px #1e2826 !important;backdrop-filter:none}
[data-dsh-style="pixel8bit"] [role="tab"][aria-selected="true"]::after,
[data-dsh-style="pixel8bit"] .dsh-tab-indicator{border-block-end-color:#d95b43;border-block-end-width:3px}
.dsh-pixel-cursor{display:none;flex:none;font-size:10px;line-height:1;color:var(--dsh-pixel-accent-secondary, #d95b43)}
@keyframes dsh-pixel-cursor-nudge{0%, 100%{translate:0px 0px}50%{translate:2px 0px}}
[data-dsh-style="pixel8bit"] :where([data-dsh-row], .dsh-row):where([data-active="true"], [data-selected="true"], [aria-selected="true"]){background-color:var(--dsw-alias-interactive-bg-active);box-shadow:inset 3px 0 0 #d95b43}
[data-dsh-style="pixel8bit"] :where([data-dsh-row], .dsh-row):where([data-active="true"], [data-selected="true"], [aria-selected="true"]):not(:has(.dsh-pixel-cursor))::before{content:"▶";display:inline-block;flex:none;margin-inline-end:6px;font-size:10px;line-height:1;color:#d95b43}
[data-dsh-style="pixel8bit"] :where([data-active="true"], [data-selected="true"], [aria-selected="true"]) .dsh-pixel-cursor{display:inline-flex;align-items:center}
@media (prefers-reduced-motion: no-preference){[data-dsh-style="pixel8bit"] :where([data-dsh-row], .dsh-row):where([data-active="true"], [data-selected="true"], [aria-selected="true"]):not(:has(.dsh-pixel-cursor))::before,
  [data-dsh-style="pixel8bit"] :where([data-active="true"], [data-selected="true"], [aria-selected="true"]) .dsh-pixel-cursor{animation:dsh-pixel-cursor-nudge 760ms steps(2, end) infinite}}
[data-dsh-style="mint"],
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="mint"], :has([data-dsh-style="mint"])){color-scheme:light;accent-color:#0f766e;--dsw-alias-bg-base:#f5fafb;--dsw-alias-bg-layer-1:#eaf3f6;--dsw-alias-bg-layer-2:#dcebf0;--dsw-alias-bg-layer-3:#cce1e8;--dsw-alias-bg-overlay:#fafdff;--dsw-alias-bg-module-platform:#e3eff3;--dsw-alias-settings-card-fill:#eef6f8;--dsw-alias-settings-card-stroke:#c7dde5;--dsw-specific-menu:rgba(250, 253, 255, 0.97);--dsw-alias-border-l1:#d5e6ec;--dsw-alias-border-l2:#bdd5de;--dsw-alias-border-l3:#9ec0cd;--dsw-alias-border-l4:#7faab9;--dsw-alias-label-primary:#132a2e;--dsw-alias-label-secondary:#426067;--dsw-alias-label-tertiary:#628088;--dsw-alias-label-dimmed:#7c98a0;--dsw-alias-brand-primary:#0f766e;--dsw-alias-brand-text:#132a2e;--dsw-alias-state-business-primary:#0f766e;--dsw-alias-state-business-tertiary:rgba(15, 118, 110, 0.13);--dsw-alias-link:#0284c7;--dsw-alias-button-primary-fill:#0f766e;--dsw-alias-button-primary-hover:#0d635c;--dsw-alias-button-primary-ink:#f5fafb;--dsw-alias-interactive-bg-hover:rgba(15, 118, 110, 0.07);--dsw-alias-interactive-bg-active:rgba(15, 118, 110, 0.13);--dsw-alias-interactive-bg-hover-accent:rgba(2, 132, 199, 0.11);--dsw-alias-interactive-bg-hover-danger:rgba(200, 50, 64, 0.11);--dsw-alias-state-error-primary:#c83240;--dsw-alias-state-warn-primary:#b4690e;--dsw-alias-state-warn-label:#864c07;--dsw-alias-state-warn-tertiary:#fdf1d6;--dsw-alias-state-success-primary:#0f766e;--dsh-mint-sky-accent:#0284c7;--dsw-radius-xs:6px;--dsw-radius-sm:9px;--dsw-radius-md:12px;--dsw-radius-lg:16px;--dsw-radius-xl:20px;--dsw-elevation-panel:0 3px 12px rgba(15, 76, 92, 0.07), 0 0 0 1px rgba(127, 170, 185, 0.28);--dsw-elevation-prominent:0 14px 34px rgba(15, 76, 92, 0.13), 0 2px 6px rgba(15, 76, 92, 0.05), 0 0 0 1px rgba(127, 170, 185, 0.34);--dsh-control-border-width:1px;--dsh-button-hover-shadow:0 2px 7px rgba(15, 118, 110, 0.11);--dsh-card-hover-shadow:0 8px 22px rgba(2, 132, 199, 0.10);--dsh-surface-spotlight:rgba(2, 132, 199, 0.08);--dsh-font-display:"Cascadia Code SemiBold", "Cascadia Code", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-body:"Cascadia Code", "Cascadia Mono", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-mono:"Cascadia Mono", "Cascadia Code", "YouYuan", "幼圆", Consolas, monospace;--dsh-display-weight:700;--dsh-display-tracking:0.015em;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
[data-dsh-style="glass"],
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="glass"], :has([data-dsh-style="glass"])){color-scheme:light;accent-color:#4f6df5;--dsw-alias-bg-base:#f3f7ff;--dsw-alias-bg-layer-1:rgba(255, 255, 255, 0.70);--dsw-alias-bg-layer-2:rgba(240, 245, 255, 0.78);--dsw-alias-bg-layer-3:rgba(226, 236, 255, 0.84);--dsw-alias-bg-overlay:rgba(255, 255, 255, 0.84);--dsw-alias-bg-module-platform:rgba(244, 248, 255, 0.76);--dsw-alias-settings-card-fill:rgba(255, 255, 255, 0.70);--dsw-alias-settings-card-stroke:rgba(255, 255, 255, 0.82);--dsw-specific-menu:rgba(255, 255, 255, 0.86);--dsw-alias-border-l1:rgba(148, 173, 219, 0.24);--dsw-alias-border-l2:rgba(132, 159, 212, 0.34);--dsw-alias-border-l3:rgba(114, 144, 204, 0.46);--dsw-alias-border-l4:rgba(96, 128, 196, 0.56);--dsw-alias-label-primary:#172033;--dsw-alias-label-secondary:#4b5973;--dsw-alias-label-tertiary:#6b7994;--dsw-alias-label-dimmed:#8895ae;--dsw-alias-brand-primary:#4f6df5;--dsw-alias-brand-text:#172033;--dsw-alias-state-business-primary:#4f6df5;--dsw-alias-state-business-tertiary:rgba(79, 109, 245, 0.14);--dsw-alias-link:#3b59e2;--dsw-alias-button-primary-fill:#4f6df5;--dsw-alias-button-primary-hover:#3f5de3;--dsw-alias-button-primary-ink:#ffffff;--dsw-alias-interactive-bg-hover:rgba(79, 109, 245, 0.08);--dsw-alias-interactive-bg-active:rgba(79, 109, 245, 0.14);--dsw-alias-interactive-bg-hover-accent:rgba(14, 165, 233, 0.12);--dsw-alias-interactive-bg-hover-danger:rgba(220, 56, 82, 0.12);--dsw-alias-state-error-primary:#d13850;--dsw-alias-state-warn-primary:#c06a12;--dsw-alias-state-warn-label:#8a4a09;--dsw-alias-state-warn-tertiary:rgba(251, 191, 36, 0.18);--dsw-alias-state-success-primary:#15805d;--dsw-radius-xs:8px;--dsw-radius-sm:11px;--dsw-radius-md:15px;--dsw-radius-lg:18px;--dsw-radius-xl:22px;--dsw-elevation-panel:inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 4px 18px rgba(59, 92, 168, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.72);--dsw-elevation-prominent:inset 0 1px 0 rgba(255, 255, 255, 0.95), 0 16px 40px rgba(59, 92, 168, 0.16), 0 0 0 1px rgba(255, 255, 255, 0.80);--dsh-control-border-width:1px;--dsh-button-hover-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.92), 0 3px 10px rgba(79, 109, 245, 0.12);--dsh-card-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 4px 16px rgba(59, 92, 168, 0.07);--dsh-card-hover-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.96), 0 10px 26px rgba(59, 92, 168, 0.12);--dsh-surface-spotlight:rgba(79, 109, 245, 0.08);--dsh-font-display:"Cascadia Code SemiBold", "Cascadia Code", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-body:"Cascadia Code", "Cascadia Mono", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-mono:"Cascadia Mono", "Cascadia Code", "YouYuan", "幼圆", Consolas, monospace;--dsh-display-weight:700;--dsh-display-tracking:0.015em;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
[data-dsh-style="glass"]{background-color:#f3f7ff;background-image:radial-gradient(64% 58% at 12% 8%, rgba(125, 211, 252, 0.30) 0%, transparent 65%),
    radial-gradient(58% 52% at 88% 14%, rgba(196, 181, 253, 0.28) 0%, transparent 65%),
    radial-gradient(60% 55% at 52% 96%, rgba(153, 246, 228, 0.24) 0%, transparent 68%)}
[data-dsh-style="glass"] :where([data-dsh-card], .dsh-card, [data-dsh-panel], .dsh-panel, .dsh-header, [data-dsh-header]),
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="glass"], :has([data-dsh-style="glass"])){background:rgba(255, 255, 255, 0.70);-webkit-backdrop-filter:blur(14px) saturate(140%);backdrop-filter:blur(14px) saturate(140%);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 4px 16px rgba(59, 92, 168, 0.07)}
@supports not (backdrop-filter: blur(1px)){[data-dsh-style="glass"] :where([data-dsh-card], .dsh-card, [data-dsh-panel], .dsh-panel, .dsh-header, [data-dsh-header]),
  :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="glass"], :has([data-dsh-style="glass"])){background:rgba(255, 255, 255, 0.92)}}
[data-dsh-style="eink"],
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="eink"], :has([data-dsh-style="eink"])){color-scheme:light;accent-color:#171716;--dsw-alias-bg-base:#f2f1ec;--dsw-alias-bg-layer-1:#eae8e1;--dsw-alias-bg-layer-2:#e1dfd6;--dsw-alias-bg-layer-3:#d6d3c9;--dsw-alias-bg-overlay:#f7f6f2;--dsw-alias-bg-module-platform:#eae8e1;--dsw-alias-settings-card-fill:#f7f6f2;--dsw-alias-settings-card-stroke:#9e9c93;--dsw-specific-menu:#f7f6f2;--dsw-alias-border-l1:#c5c2b8;--dsw-alias-border-l2:#9e9c93;--dsw-alias-border-l3:#78766e;--dsw-alias-border-l4:#54534d;--dsw-alias-label-primary:#171716;--dsw-alias-label-secondary:#484742;--dsw-alias-label-tertiary:#66645d;--dsw-alias-label-dimmed:#807e76;--dsw-alias-brand-primary:#171716;--dsw-alias-brand-text:#171716;--dsw-alias-state-business-primary:#171716;--dsw-alias-state-business-tertiary:rgba(23, 23, 22, 0.10);--dsw-alias-link:#171716;--dsw-alias-button-primary-fill:#171716;--dsw-alias-button-primary-hover:#2f2f2c;--dsw-alias-button-primary-ink:#f7f6f2;--dsw-alias-interactive-bg-hover:rgba(23, 23, 22, 0.06);--dsw-alias-interactive-bg-active:rgba(23, 23, 22, 0.12);--dsw-alias-interactive-bg-hover-accent:rgba(23, 23, 22, 0.08);--dsw-alias-interactive-bg-hover-danger:rgba(23, 23, 22, 0.10);--dsw-alias-state-error-primary:#2d2c28;--dsw-alias-state-warn-primary:#45443e;--dsw-alias-state-warn-label:#171716;--dsw-alias-state-warn-tertiary:#e6e4db;--dsw-alias-state-success-primary:#242422;--dsw-radius-xs:2px;--dsw-radius-sm:3px;--dsw-radius-md:4px;--dsw-radius-lg:4px;--dsw-radius-xl:4px;--dsw-elevation-panel:0 0 0 1px #9e9c93;--dsw-elevation-prominent:0 2px 0 #9e9c93, 0 0 0 1px #78766e;--dsh-control-border-width:1px;--dsh-motion-fast:60ms;--dsh-motion-base:60ms;--dsh-motion-dialog:60ms;--dsh-button-shadow:none;--dsh-button-hover-shadow:none;--dsh-card-shadow:none;--dsh-card-hover-shadow:none;--dsh-surface-spotlight:rgba(23, 23, 22, 0.06);--dsh-font-display:"Palatino Linotype", Georgia, "Noto Serif SC SemiBold", "Noto Serif SC", "STZhongsong", "华文中宋", serif;--dsh-font-body:Georgia, "Noto Serif SC", "STSong", "华文宋体", serif;--dsh-font-mono:"Cascadia Code", "Cascadia Mono", Consolas, monospace;--dsh-display-weight:700;--dsh-display-tracking:normal;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
[data-dsh-style="eink"] :where([data-dsh-card], .dsh-card, [data-dsh-panel], .dsh-panel){border:1px solid #9e9c93;box-shadow:none}
[data-dsh-style="eink"] :where([data-dsh-row], .dsh-row){border-block-end:1px solid #c5c2b8}
[data-dsh-style="eink"] :where(button, [role="button"], [data-dsh-card], .dsh-card, [data-dsh-row], .dsh-row){translate:none !important;scale:none !important;transition-duration:60ms}
[data-dsh-style="blueprint"],
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="blueprint"], :has([data-dsh-style="blueprint"])){color-scheme:light;accent-color:#e05a2b;--dsw-alias-bg-base:#eaf3fb;--dsw-alias-bg-layer-1:#f4f9fe;--dsw-alias-bg-layer-2:#dfeef9;--dsw-alias-bg-layer-3:#cfe3f4;--dsw-alias-bg-overlay:#f7fbff;--dsw-alias-bg-module-platform:#e3f0fa;--dsw-alias-settings-card-fill:rgba(244, 249, 254, 0.92);--dsw-alias-settings-card-stroke:#1b5e8a;--dsw-specific-menu:rgba(247, 251, 255, 0.98);--dsw-alias-border-l1:rgba(27, 94, 138, 0.28);--dsw-alias-border-l2:#1b5e8a;--dsw-alias-border-l3:#0d3b66;--dsw-alias-border-l4:#092b4c;--dsw-alias-label-primary:#0d3b66;--dsw-alias-label-secondary:#1d4e78;--dsw-alias-label-tertiary:#3b6f99;--dsw-alias-label-dimmed:#5b89ad;--dsw-alias-brand-primary:#e05a2b;--dsw-alias-brand-text:#0d3b66;--dsw-alias-state-business-primary:#e05a2b;--dsw-alias-state-business-tertiary:rgba(224, 90, 43, 0.14);--dsw-alias-link:#0d3b66;--dsw-alias-button-primary-fill:#e05a2b;--dsw-alias-button-primary-hover:#c94b20;--dsw-alias-button-primary-ink:#ffffff;--dsw-alias-interactive-bg-hover:rgba(27, 94, 138, 0.08);--dsw-alias-interactive-bg-active:rgba(224, 90, 43, 0.13);--dsw-alias-interactive-bg-hover-accent:rgba(224, 90, 43, 0.12);--dsw-alias-interactive-bg-hover-danger:rgba(185, 45, 38, 0.12);--dsw-alias-state-error-primary:#b92d26;--dsw-alias-state-warn-primary:#c05614;--dsw-alias-state-warn-label:#7c3408;--dsw-alias-state-warn-tertiary:#fce9d8;--dsw-alias-state-success-primary:#156d5b;--dsw-radius-xs:2px;--dsw-radius-sm:2px;--dsw-radius-md:3px;--dsw-radius-lg:4px;--dsw-radius-xl:4px;--dsw-elevation-panel:0 0 0 1px #1b5e8a;--dsw-elevation-prominent:0 8px 24px rgba(13, 59, 102, 0.14), 0 0 0 1px #1b5e8a;--dsh-control-border-width:1px;--dsh-button-shadow:none;--dsh-button-hover-shadow:0 2px 0 #1b5e8a;--dsh-card-shadow:0 0 0 1px #1b5e8a;--dsh-card-hover-shadow:0 3px 0 #1b5e8a;--dsh-surface-spotlight:rgba(27, 94, 138, 0.09);--dsh-font-display:"Cascadia Mono SemiBold", "Cascadia Mono", "STZhongsong", "华文中宋", "FangSong", "仿宋", monospace;--dsh-font-body:"Cascadia Mono", "STFangsong", "华文仿宋", "FangSong", "仿宋", monospace;--dsh-font-mono:"Cascadia Mono", "STFangsong", "华文仿宋", "FangSong", "仿宋", monospace;--dsh-display-weight:700;--dsh-display-tracking:0.02em;--dsh-body-tracking:0.02em;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
[data-dsh-style="blueprint"]{background-color:#eaf3fb;background-image:linear-gradient(to right, rgba(18, 78, 120, 0.09) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(18, 78, 120, 0.09) 1px, transparent 1px),
    linear-gradient(to right, rgba(18, 78, 120, 0.045) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(18, 78, 120, 0.045) 1px, transparent 1px);background-size:24px 24px, 24px 24px, 6px 6px, 6px 6px}
[data-dsh-style="blueprint"] :where(.dsh-header, [data-dsh-header], .dsh-wb-header){background:rgba(244, 249, 254, 0.90);border-block-end:1px solid #1b5e8a}
[data-dsh-style="blueprint"] :where([data-dsh-card], .dsh-card){position:relative;border:1px solid #1b5e8a;background:rgba(244, 249, 254, 0.92)}
[data-dsh-style="blueprint"] :where([data-dsh-card], .dsh-card):not([role="tab"])::after{content:"+";position:absolute;inset-block-start:4px;inset-inline-end:6px;font-family:ui-monospace, "Cascadia Mono", Menlo, Consolas, monospace;font-size:11px;line-height:1;color:#e05a2b;opacity:0.78;pointer-events:none}
[data-dsh-style="blueprint"] :where(button:not([role="tab"]), .dsh-btn){border:1px solid #1b5e8a}
[data-dsh-style="risograph"],
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="risograph"], :has([data-dsh-style="risograph"])){color-scheme:light;accent-color:#ff3e7f;--dsw-alias-bg-base:#faf6ee;--dsw-alias-bg-layer-1:#f5efe2;--dsw-alias-bg-layer-2:#ede4d1;--dsw-alias-bg-layer-3:#e3d7be;--dsw-alias-bg-overlay:#fffdf7;--dsw-alias-bg-module-platform:#f5efe2;--dsw-alias-settings-card-fill:#fffdf7;--dsw-alias-settings-card-stroke:#18181b;--dsw-specific-menu:#fffdf7;--dsw-alias-border-l1:#d4cbb8;--dsw-alias-border-l2:#18181b;--dsw-alias-border-l3:#18181b;--dsw-alias-border-l4:#18181b;--dsw-alias-label-primary:#18181b;--dsw-alias-label-secondary:#3f3f46;--dsw-alias-label-tertiary:#52525b;--dsw-alias-label-dimmed:#71717a;--dsw-alias-brand-primary:#ff3e7f;--dsw-alias-brand-text:#18181b;--dsw-alias-state-business-primary:#ff3e7f;--dsw-alias-state-business-tertiary:rgba(255, 62, 127, 0.14);--dsw-alias-link:#2563eb;--dsw-alias-button-primary-fill:#ff3e7f;--dsw-alias-button-primary-hover:#e62e6d;--dsw-alias-button-primary-ink:#ffffff;--dsw-alias-interactive-bg-hover:rgba(253, 224, 71, 0.38);--dsw-alias-interactive-bg-active:#fde047;--dsw-alias-interactive-bg-hover-accent:rgba(37, 99, 235, 0.14);--dsw-alias-interactive-bg-hover-danger:rgba(255, 62, 127, 0.18);--dsw-alias-state-error-primary:#dc2626;--dsw-alias-state-warn-primary:#ca8a04;--dsw-alias-state-warn-label:#713f12;--dsw-alias-state-warn-tertiary:#fef08a;--dsw-alias-state-success-primary:#15803d;--dsw-radius-xs:3px;--dsw-radius-sm:4px;--dsw-radius-md:6px;--dsw-radius-lg:8px;--dsw-radius-xl:10px;--dsw-elevation-panel:4px 4px 0px #2563eb;--dsw-elevation-prominent:4px 4px 0px #ff3e7f;--dsh-control-border-width:2px;--dsh-button-shadow:3px 3px 0px #18181b;--dsh-button-hover-shadow:4px 4px 0px #2563eb;--dsh-card-shadow:4px 4px 0px #2563eb;--dsh-card-hover-shadow:5px 5px 0px #ff3e7f;--dsh-surface-spotlight:rgba(253, 224, 71, 0.35);--dsh-font-display:Impact, "Arial Black", "Noto Sans SC Black", "SimHei", "黑体", sans-serif;--dsh-font-body:"Source Sans 3", "Noto Sans SC Medium", "Noto Sans SC", sans-serif;--dsh-font-mono:"Cascadia Code", "Cascadia Mono", Consolas, monospace;--dsh-display-weight:900;--dsh-display-tracking:-0.02em;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
[data-dsh-style="risograph"] :where(.dsh-header, [data-dsh-header], .dsh-wb-header){background-color:#fffdf7;background-image:radial-gradient(rgba(255, 62, 127, 0.15) 1px, transparent 0);background-size:7px 7px;border-block-end:2px solid #18181b}
[data-dsh-style="risograph"] :where(button:not([role="tab"]), .dsh-btn),
:where([role="dialog"], [role="alertdialog"], dialog):where([data-dsh-style="risograph"], :has([data-dsh-style="risograph"])) :where(button:not([role="tab"]), .dsh-btn){border:2px solid #18181b;box-shadow:3px 3px 0px #18181b}
[data-dsh-style="risograph"] :where([data-dsh-card], .dsh-card, [data-dsh-panel], .dsh-panel){border:2px solid #18181b;box-shadow:4px 4px 0px #2563eb}
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="risograph"], :has([data-dsh-style="risograph"])){border:2px solid #18181b !important;box-shadow:4px 4px 0px #ff3e7f !important}
[data-dsh-style="risograph"] [role="tab"][aria-selected="true"]{background:#fde047;color:#18181b;font-weight:700}
[data-dsh-style="risograph"] [role="tab"][aria-selected="true"]::after,
[data-dsh-style="risograph"] .dsh-tab-indicator{border-block-end-color:#ff3e7f;border-block-end-width:3px}
[data-dsh-style="win98"],
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="win98"], :has([data-dsh-style="win98"])){color-scheme:light;accent-color:#1b4f9c;--dsw-alias-bg-base:#dcdcdc;--dsw-alias-bg-layer-1:#e4e4e4;--dsw-alias-bg-layer-2:#d0d0d0;--dsw-alias-bg-layer-3:#c0c0c0;--dsw-alias-bg-overlay:#e4e4e4;--dsw-alias-bg-module-platform:#d4d4d4;--dsw-alias-settings-card-fill:#ffffff;--dsw-alias-settings-card-stroke:#808080;--dsw-specific-menu:#dcdcdc;--dsw-alias-border-l1:#b8b8b8;--dsw-alias-border-l2:#808080;--dsw-alias-border-l3:#5a5a5a;--dsw-alias-border-l4:#222222;--dsw-alias-label-primary:#111111;--dsw-alias-label-secondary:#333333;--dsw-alias-label-tertiary:#555555;--dsw-alias-label-dimmed:#767676;--dsw-alias-brand-primary:#1b4f9c;--dsw-alias-brand-text:#111111;--dsw-alias-state-business-primary:#1b4f9c;--dsw-alias-state-business-tertiary:rgba(27, 79, 156, 0.14);--dsw-alias-link:#0b3c88;--dsw-alias-button-primary-fill:#1b4f9c;--dsw-alias-button-primary-hover:#245cb0;--dsw-alias-button-primary-ink:#ffffff;--dsw-alias-interactive-bg-hover:rgba(27, 79, 156, 0.09);--dsw-alias-interactive-bg-active:rgba(27, 79, 156, 0.16);--dsw-alias-interactive-bg-hover-accent:rgba(59, 130, 196, 0.15);--dsw-alias-interactive-bg-hover-danger:rgba(185, 28, 28, 0.13);--dsw-alias-state-error-primary:#b91c1c;--dsw-alias-state-warn-primary:#9a5b08;--dsw-alias-state-warn-label:#6e3f04;--dsw-alias-state-warn-tertiary:#fef3c7;--dsw-alias-state-success-primary:#166534;--dsw-radius-xs:0px;--dsw-radius-sm:0px;--dsw-radius-md:0px;--dsw-radius-lg:0px;--dsw-radius-xl:0px;--dsw-corner-shape:square;--dsw-elevation-panel:inset 1.5px 1.5px 0 #ffffff, inset -1.5px -1.5px 0 #5a5a5a, inset 2.5px 2.5px 0 #f4f4f4, inset -2.5px -2.5px 0 #9a9a9a;--dsw-elevation-prominent:inset 1.5px 1.5px 0 #ffffff, inset -1.5px -1.5px 0 #5a5a5a, inset 2.5px 2.5px 0 #f4f4f4, inset -2.5px -2.5px 0 #9a9a9a, 4px 4px 12px rgba(0, 0, 0, 0.18);--dsh-control-border-width:1px;--dsh-button-shadow:inset 1.5px 1.5px 0 #ffffff, inset -1.5px -1.5px 0 #5a5a5a, inset 2.5px 2.5px 0 #f4f4f4, inset -2.5px -2.5px 0 #9a9a9a;--dsh-button-hover-shadow:inset 1.5px 1.5px 0 #ffffff, inset -1.5px -1.5px 0 #5a5a5a, inset 2.5px 2.5px 0 #f4f4f4, inset -2.5px -2.5px 0 #9a9a9a;--dsh-card-shadow:inset 1.5px 1.5px 0 #808080, inset -1.5px -1.5px 0 #ffffff, inset 2.5px 2.5px 0 #5a5a5a, inset -2.5px -2.5px 0 #dcdcdc;--dsh-card-hover-shadow:inset 1.5px 1.5px 0 #808080, inset -1.5px -1.5px 0 #ffffff, inset 2.5px 2.5px 0 #5a5a5a, inset -2.5px -2.5px 0 #dcdcdc;--dsh-surface-spotlight:rgba(27, 79, 156, 0.10);--dsh-font-display:Tahoma, "SimSun", "NSimSun", "宋体", "新宋体", sans-serif;--dsh-font-body:Tahoma, "SimSun", "NSimSun", "宋体", "新宋体", sans-serif;--dsh-font-mono:"Fixedsys", Consolas, "Courier New", "SimSun", "宋体", monospace;--dsh-display-weight:700;--dsh-display-tracking:normal;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
[data-dsh-style="win98"] :where(button, input, select, textarea, [role="button"], [role="tab"], [role="menuitem"], [role="menuitemradio"], [data-dsh-card], .dsh-card, [data-dsh-panel], .dsh-panel),
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="win98"], :has([data-dsh-style="win98"])),
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="win98"], :has([data-dsh-style="win98"])) :where(button, input, select, textarea, [role="menuitem"], [role="menuitemradio"]){border-radius:0px !important;corner-shape:square}
[data-dsh-style="win98"] :where(button:not([role="tab"]), .dsh-btn),
:where([role="dialog"], [role="alertdialog"], dialog):where([data-dsh-style="win98"], :has([data-dsh-style="win98"])) :where(button:not([role="tab"]), .dsh-btn){border:0;background-color:#dcdcdc;box-shadow:inset 1.5px 1.5px 0 #ffffff, inset -1.5px -1.5px 0 #5a5a5a, inset 2.5px 2.5px 0 #f4f4f4, inset -2.5px -2.5px 0 #9a9a9a}
[data-dsh-style="win98"] :where(.dsh-wb-btn-primary, .dsh-btn-primary){background-color:#1b4f9c;color:#ffffff;box-shadow:inset 1.5px 1.5px 0 #6ca0e8, inset -1.5px -1.5px 0 #0d2b57, inset 2.5px 2.5px 0 #4a82d1, inset -2.5px -2.5px 0 #143c78}
[data-dsh-style="win98"] :where(button, [role="button"]):is(:active, [aria-pressed="true"], [aria-expanded="true"]):not(:disabled):not([aria-disabled="true"]),
[data-dsh-style="win98"] [role="tab"][aria-selected="true"],
:where([role="dialog"], [role="alertdialog"], dialog):where([data-dsh-style="win98"], :has([data-dsh-style="win98"])) :where(button, [role="button"]):is(:active, [aria-pressed="true"]):not(:disabled):not([aria-disabled="true"]){translate:0px 0px !important;scale:1 !important;background-color:#e4e4e4;box-shadow:inset 1.5px 1.5px 0 #5a5a5a, inset -1.5px -1.5px 0 #ffffff, inset 2.5px 2.5px 0 #9a9a9a, inset -2.5px -2.5px 0 #f4f4f4 !important}
[data-dsh-style="win98"] :where([data-dsh-card], .dsh-card, input:not([type="checkbox"]):not([type="radio"]):not([type="range"]), select, textarea){border:0;background:#ffffff;box-shadow:inset 1.5px 1.5px 0 #808080, inset -1.5px -1.5px 0 #ffffff, inset 2.5px 2.5px 0 #5a5a5a, inset -2.5px -2.5px 0 #dcdcdc}
[data-dsh-style="win98"] :where(.dsh-header, [data-dsh-header], .pageHeader, .dsh-wb-header, .topbar){background:linear-gradient(180deg, #ececec 0%, #dcdcdc 100%) !important;color:#111111;border-block-start:3px solid #1b4f9c !important;border-block-end:2px solid #808080;box-shadow:inset 0 1px 0 #ffffff, inset 0 -1px 0 #808080}
[data-dsh-style="win98"] .dsh-header-badge{background:linear-gradient(90deg, #1b4f9c 0%, #3b82c4 100%);color:#ffffff}
:where([role="dialog"], [role="alertdialog"], dialog):where([data-dsh-style="win98"], :has([data-dsh-style="win98"])) header{background:linear-gradient(90deg, #1b4f9c 0%, #3b82c4 100%);color:#ffffff}
:where([role="dialog"], [role="alertdialog"], dialog):where([data-dsh-style="win98"], :has([data-dsh-style="win98"])) header h2{color:#ffffff}
[data-dsh-style="songhui"],
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="songhui"], :has([data-dsh-style="songhui"])){color-scheme:light;accent-color:#b83b2a;--dsw-alias-bg-base:#f7f3e8;--dsw-alias-bg-layer-1:#f0ead9;--dsw-alias-bg-layer-2:#e7dec8;--dsw-alias-bg-layer-3:#dcd0b4;--dsw-alias-bg-overlay:#fbf9f2;--dsw-alias-bg-module-platform:#ede6d4;--dsw-alias-settings-card-fill:#fbf9f2;--dsw-alias-settings-card-stroke:#d4c4a2;--dsw-specific-menu:#fbf9f2;--dsw-alias-border-l1:#e4dac2;--dsw-alias-border-l2:#cfbda0;--dsw-alias-border-l3:#b8a382;--dsw-alias-border-l4:#9d8765;--dsw-alias-label-primary:#252019;--dsw-alias-label-secondary:#5c5142;--dsw-alias-label-tertiary:#7d705e;--dsw-alias-label-dimmed:#998c79;--dsw-alias-brand-primary:#b83b2a;--dsw-alias-brand-text:#252019;--dsw-alias-state-business-primary:#b83b2a;--dsw-alias-state-business-tertiary:rgba(184, 59, 42, 0.12);--dsw-alias-link:#9e2f20;--dsw-alias-button-primary-fill:#b83b2a;--dsw-alias-button-primary-hover:#9f3021;--dsw-alias-button-primary-ink:#fbf9f2;--dsw-alias-interactive-bg-hover:rgba(184, 59, 42, 0.065);--dsw-alias-interactive-bg-active:rgba(184, 59, 42, 0.13);--dsw-alias-interactive-bg-hover-accent:rgba(184, 59, 42, 0.11);--dsw-alias-interactive-bg-hover-danger:rgba(184, 59, 42, 0.15);--dsw-alias-state-error-primary:#a62b1c;--dsw-alias-state-warn-primary:#9c6216;--dsw-alias-state-warn-label:#704309;--dsw-alias-state-warn-tertiary:#f7ecd1;--dsw-alias-state-success-primary:#2e664b;--dsw-radius-xs:2px;--dsw-radius-sm:2px;--dsw-radius-md:3px;--dsw-radius-lg:4px;--dsw-radius-xl:4px;--dsw-elevation-panel:0 2px 10px rgba(66, 52, 32, 0.06), 0 0 0 1px #cfbda0;--dsw-elevation-prominent:0 12px 30px rgba(66, 52, 32, 0.14), 0 0 0 1px #b8a382;--dsh-control-border-width:1px;--dsh-button-hover-shadow:0 2px 6px rgba(184, 59, 42, 0.12);--dsh-card-shadow:0 1px 2px rgba(66, 52, 32, 0.05);--dsh-card-hover-shadow:0 6px 16px rgba(66, 52, 32, 0.09);--dsh-surface-spotlight:rgba(184, 59, 42, 0.07);--dsh-font-display:"STZhongsong", "华文中宋", "Noto Serif SC Black", "SimSun", "宋体", serif;--dsh-font-body:"Palatino Linotype", "STKaiti", "华文楷体", "KaiTi", "楷体", "Noto Serif SC", serif;--dsh-font-mono:"Cascadia Mono", Consolas, "STFangsong", "华文仿宋", monospace;--dsh-display-weight:700;--dsh-display-tracking:0.04em;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
[data-dsh-style="songhui"]{background-color:#f7f3e8;background-image:radial-gradient(rgba(196, 152, 64, 0.18) 1px, transparent 0),
    radial-gradient(rgba(196, 152, 64, 0.11) 0.75px, transparent 0);background-size:18px 18px, 29px 29px;background-position:0 0, 9px 7px}
[data-dsh-style="songhui"] :where(.pageHeader, .dsh-header, [data-dsh-header], .dsh-wb-header){background:rgba(251, 249, 242, 0.90);border-block-end:3px double #b83b2a}
[data-dsh-style="songhui"] :where(.dsh-wb-btn-primary, .dsh-btn-primary, .dsh-header-badge){background:#b83b2a;color:#fbf9f2;border-color:#9e2f20;border-radius:2px;box-shadow:inset 0 0 0 1px rgba(251, 249, 242, 0.28)}
[data-dsh-style="frutiger"],
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="frutiger"], :has([data-dsh-style="frutiger"])){color-scheme:light;accent-color:#0284c7;--dsw-alias-bg-base:#eaf7ff;--dsw-alias-bg-layer-1:rgba(255, 255, 255, 0.78);--dsw-alias-bg-layer-2:rgba(232, 246, 255, 0.86);--dsw-alias-bg-layer-3:rgba(209, 236, 255, 0.90);--dsw-alias-bg-overlay:rgba(248, 253, 255, 0.93);--dsw-alias-bg-module-platform:rgba(232, 246, 255, 0.84);--dsw-alias-settings-card-fill:rgba(255, 255, 255, 0.82);--dsw-alias-settings-card-stroke:rgba(56, 189, 248, 0.44);--dsw-specific-menu:rgba(248, 253, 255, 0.95);--dsw-alias-border-l1:rgba(56, 189, 248, 0.26);--dsw-alias-border-l2:rgba(14, 165, 233, 0.36);--dsw-alias-border-l3:rgba(2, 132, 199, 0.48);--dsw-alias-border-l4:rgba(3, 105, 161, 0.58);--dsw-alias-label-primary:#0c2b45;--dsw-alias-label-secondary:#275373;--dsw-alias-label-tertiary:#487596;--dsw-alias-label-dimmed:#6c96b5;--dsw-alias-brand-primary:#0284c7;--dsw-alias-brand-text:#0c2b45;--dsw-alias-state-business-primary:#0284c7;--dsw-alias-state-business-tertiary:rgba(14, 165, 233, 0.16);--dsw-alias-link:#0369a1;--dsw-alias-button-primary-fill:#0284c7;--dsw-alias-button-primary-hover:#0369a1;--dsw-alias-button-primary-ink:#ffffff;--dsw-alias-interactive-bg-hover:rgba(14, 165, 233, 0.10);--dsw-alias-interactive-bg-active:rgba(14, 165, 233, 0.18);--dsw-alias-interactive-bg-hover-accent:rgba(56, 189, 248, 0.16);--dsw-alias-interactive-bg-hover-danger:rgba(220, 56, 82, 0.13);--dsw-alias-state-error-primary:#c83244;--dsw-alias-state-warn-primary:#c06a12;--dsw-alias-state-warn-label:#8a4a09;--dsw-alias-state-warn-tertiary:#fef0d6;--dsw-alias-state-success-primary:#0f766e;--dsw-radius-xs:10px;--dsw-radius-sm:999px;--dsw-radius-md:18px;--dsw-radius-lg:22px;--dsw-radius-xl:26px;--dsw-elevation-panel:inset 0 1.5px 0 rgba(255, 255, 255, 0.92), 0 6px 20px rgba(14, 165, 233, 0.12), 0 0 0 1px rgba(56, 189, 248, 0.36);--dsw-elevation-prominent:inset 0 1.5px 0 rgba(255, 255, 255, 0.95), 0 16px 38px rgba(14, 165, 233, 0.18), 0 0 0 1px rgba(56, 189, 248, 0.44);--dsh-control-border-width:1px;--dsh-button-shadow:inset 0 1.5px 0 rgba(255, 255, 255, 0.92), 0 2px 6px rgba(14, 165, 233, 0.12);--dsh-button-hover-shadow:inset 0 1.5px 0 rgba(255, 255, 255, 0.96), 0 4px 12px rgba(2, 132, 199, 0.22);--dsh-card-shadow:inset 0 1.5px 0 rgba(255, 255, 255, 0.92), 0 6px 20px rgba(14, 165, 233, 0.10);--dsh-card-hover-shadow:inset 0 1.5px 0 rgba(255, 255, 255, 0.98), 0 10px 26px rgba(2, 132, 199, 0.16);--dsh-surface-spotlight:rgba(14, 165, 233, 0.10);--dsh-font-display:"Cascadia Code SemiBold", "Cascadia Code", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-body:"Cascadia Code", "Cascadia Mono", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-mono:"Cascadia Mono", "Cascadia Code", "YouYuan", "幼圆", Consolas, monospace;--dsh-display-weight:700;--dsh-display-tracking:0.015em;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
[data-dsh-style="frutiger"]{background-color:#eaf7ff;background-image:radial-gradient(60% 48% at 15% 6%, rgba(125, 211, 252, 0.34) 0%, transparent 65%),
    linear-gradient(180deg, #eaf7ff 0%, #f4fbff 55%, #e5f5fe 100%)}
[data-dsh-style="frutiger"] :where(button:not([role="tab"]), .dsh-btn),
:where([role="dialog"], [role="alertdialog"], dialog):where([data-dsh-style="frutiger"], :has([data-dsh-style="frutiger"])) :where(button:not([role="tab"]), .dsh-btn){border-radius:999px;border:1px solid rgba(14, 165, 233, 0.42);background:linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(224, 244, 255, 0.88) 49%, rgba(204, 236, 255, 0.92) 51%, rgba(235, 249, 255, 0.96) 100%);box-shadow:inset 0 1.5px 0 rgba(255, 255, 255, 0.92), 0 2px 6px rgba(14, 165, 233, 0.12)}
[data-dsh-style="frutiger"] :where(.dsh-wb-btn-primary, .dsh-btn-primary, .dsh-header-badge){border-radius:999px;border:1px solid #0284c7;color:#ffffff;background:linear-gradient(180deg, #7dd3fc 0%, #0ea5e9 48%, #0284c7 52%, #38bdf8 100%);box-shadow:inset 0 1.5px 0 rgba(255, 255, 255, 0.88), 0 3px 10px rgba(2, 132, 199, 0.24)}
[data-dsh-style="frutiger"] :where([data-dsh-card], .dsh-card, [data-dsh-panel], .dsh-panel, .dsh-header, [data-dsh-header]){background:linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(240, 250, 255, 0.78) 100%);-webkit-backdrop-filter:blur(10px) saturate(130%);backdrop-filter:blur(10px) saturate(130%);box-shadow:var(--dsh-card-shadow)}
[data-dsh-style="gazette"],
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="gazette"], :has([data-dsh-style="gazette"])){color-scheme:light;accent-color:#9b1c1c;--dsw-alias-bg-base:#f6f3ec;--dsw-alias-bg-layer-1:#ede8dd;--dsw-alias-bg-layer-2:#e3dccd;--dsw-alias-bg-layer-3:#d6cebc;--dsw-alias-bg-overlay:#faf8f3;--dsw-alias-bg-module-platform:#ebe5d8;--dsw-alias-settings-card-fill:#faf8f3;--dsw-alias-settings-card-stroke:#161514;--dsw-specific-menu:#faf8f3;--dsw-alias-border-l1:#cec6b6;--dsw-alias-border-l2:#161514;--dsw-alias-border-l3:#161514;--dsw-alias-border-l4:#161514;--dsw-alias-label-primary:#161514;--dsw-alias-label-secondary:#43403c;--dsw-alias-label-tertiary:#635f59;--dsw-alias-label-dimmed:#827d75;--dsw-alias-brand-primary:#9b1c1c;--dsw-alias-brand-text:#161514;--dsw-alias-state-business-primary:#9b1c1c;--dsw-alias-state-business-tertiary:rgba(155, 28, 28, 0.12);--dsw-alias-link:#9b1c1c;--dsw-alias-button-primary-fill:#161514;--dsw-alias-button-primary-hover:#2d2b28;--dsw-alias-button-primary-ink:#faf8f3;--dsw-alias-interactive-bg-hover:rgba(22, 21, 20, 0.06);--dsw-alias-interactive-bg-active:rgba(155, 28, 28, 0.11);--dsw-alias-interactive-bg-hover-accent:rgba(155, 28, 28, 0.10);--dsw-alias-interactive-bg-hover-danger:rgba(155, 28, 28, 0.14);--dsw-alias-state-error-primary:#9b1c1c;--dsw-alias-state-warn-primary:#9a5b08;--dsw-alias-state-warn-label:#6e3f04;--dsw-alias-state-warn-tertiary:#f6ead2;--dsw-alias-state-success-primary:#1f5c3a;--dsw-radius-xs:0px;--dsw-radius-sm:1px;--dsw-radius-md:2px;--dsw-radius-lg:2px;--dsw-radius-xl:2px;--dsw-elevation-panel:0 1px 0 #161514, 0 0 0 1px #161514;--dsw-elevation-prominent:3px 3px 0 #161514, 0 0 0 1px #161514;--dsh-control-border-width:1px;--dsh-button-shadow:none;--dsh-button-hover-shadow:0 2px 0 #161514;--dsh-card-shadow:none;--dsh-card-hover-shadow:2px 2px 0 #161514;--dsh-surface-spotlight:rgba(155, 28, 28, 0.06);--dsh-font-display:Garamond, Georgia, "STZhongsong", "华文中宋", "Noto Serif SC Black", serif;--dsh-font-body:Georgia, "Noto Serif SC", "STSong", "华文宋体", serif;--dsh-font-mono:"Cascadia Mono", Consolas, "Courier New", monospace;--dsh-display-weight:700;--dsh-display-tracking:-0.01em;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
[data-dsh-style="gazette"]{background-color:#f6f3ec}
[data-dsh-style="gazette"] :where(.pageHeader, .dsh-header, [data-dsh-header], .dsh-wb-header){background:#faf8f3;border-block-end:4px double #161514}
[data-dsh-style="gazette"] :where([data-dsh-card], .dsh-card, [data-dsh-panel], .dsh-panel){background:#faf8f3;border:1px solid #161514;border-radius:2px;box-shadow:none}
[data-dsh-style="gazette"] :where([data-dsh-row], .dsh-row){border-block-end:1px solid #161514}
[data-dsh-style="gazette"] .dsh-split-leading{border-inline-end:1px solid #161514}
[data-dsh-style="gazette"] .dsh-split-resizer::before{background:#161514}
[data-dsh-style="gazette"] :where(button:not([role="tab"]), .dsh-btn),
:where([role="dialog"], [role="alertdialog"], dialog):where([data-dsh-style="gazette"], :has([data-dsh-style="gazette"])) :where(button:not([role="tab"]), .dsh-btn){border:1px solid #161514;border-radius:1px}
[data-dsh-style="gazette"] :where(.dsh-wb-btn-primary, .dsh-btn-primary){background:#161514;color:#faf8f3;border-color:#161514}
[data-dsh-style="gazette"] :where(.dsh-wb-btn-primary, .dsh-btn-primary):hover:not(:disabled){background:#9b1c1c;border-color:#9b1c1c}
[data-dsh-style="gazette"] .dsh-header-badge{background:#9b1c1c;color:#faf8f3;border-radius:1px}
[data-dsh-style="gazette"] [role="tab"][aria-selected="true"]::after,
[data-dsh-style="gazette"] .dsh-tab-indicator{border-block-end-color:#9b1c1c;border-block-end-width:2.5px}
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="gazette"], :has([data-dsh-style="gazette"])){border:1px solid #161514 !important;border-radius:2px !important}
:root[data-dsh-font="songkai"] [data-dsh-style],
:root[data-dsh-font="songkai"] [data-dsh-portal-synced],
:root[data-dsh-font="songkai"] :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]),
[data-dsh-style][data-dsh-font="songkai"],
[data-dsh-portal-synced][data-dsh-font="songkai"]{--dsh-font-display:"STZhongsong", "华文中宋", "Noto Serif SC Black", "SimSun", "宋体", serif;--dsh-font-body:"Palatino Linotype", "STKaiti", "华文楷体", "KaiTi", "楷体", "Noto Serif SC", serif;--dsh-font-mono:"Cascadia Mono", Consolas, "STFangsong", "华文仿宋", monospace;--dsh-display-weight:700;--dsh-display-tracking:0.04em;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
:root[data-dsh-font="fangsong"] [data-dsh-style],
:root[data-dsh-font="fangsong"] [data-dsh-portal-synced],
:root[data-dsh-font="fangsong"] :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]),
[data-dsh-style][data-dsh-font="fangsong"],
[data-dsh-portal-synced][data-dsh-font="fangsong"]{--dsh-font-display:"Cascadia Mono SemiBold", "Cascadia Mono", "STZhongsong", "华文中宋", "FangSong", "仿宋", monospace;--dsh-font-body:"Cascadia Mono", "STFangsong", "华文仿宋", "FangSong", "仿宋", monospace;--dsh-font-mono:"Cascadia Mono", "STFangsong", "华文仿宋", "FangSong", "仿宋", monospace;--dsh-display-weight:700;--dsh-display-tracking:0.02em;--dsh-body-tracking:0.02em;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
:root[data-dsh-font="poster"] [data-dsh-style],
:root[data-dsh-font="poster"] [data-dsh-portal-synced],
:root[data-dsh-font="poster"] :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]),
[data-dsh-style][data-dsh-font="poster"],
[data-dsh-portal-synced][data-dsh-font="poster"]{--dsh-font-display:Impact, "Arial Black", "Noto Sans SC Black", "SimHei", "黑体", sans-serif;--dsh-font-body:"Source Sans 3", "Noto Sans SC Medium", "Noto Sans SC", sans-serif;--dsh-font-mono:"Cascadia Code", "Cascadia Mono", Consolas, monospace;--dsh-display-weight:900;--dsh-display-tracking:-0.02em;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
:root[data-dsh-font="retro98"] [data-dsh-style],
:root[data-dsh-font="retro98"] [data-dsh-portal-synced],
:root[data-dsh-font="retro98"] :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]),
[data-dsh-style][data-dsh-font="retro98"],
[data-dsh-portal-synced][data-dsh-font="retro98"]{--dsh-font-display:Tahoma, "SimSun", "NSimSun", "宋体", "新宋体", sans-serif;--dsh-font-body:Tahoma, "SimSun", "NSimSun", "宋体", "新宋体", sans-serif;--dsh-font-mono:"Fixedsys", Consolas, "Courier New", "SimSun", "宋体", monospace;--dsh-display-weight:700;--dsh-display-tracking:normal;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
:root[data-dsh-font="serif"] [data-dsh-style],
:root[data-dsh-font="serif"] [data-dsh-portal-synced],
:root[data-dsh-font="serif"] :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]),
[data-dsh-style][data-dsh-font="serif"],
[data-dsh-portal-synced][data-dsh-font="serif"]{--dsh-font-display:"Palatino Linotype", Georgia, "Noto Serif SC SemiBold", "Noto Serif SC", "STZhongsong", "华文中宋", serif;--dsh-font-body:Georgia, "Noto Serif SC", "STSong", "华文宋体", serif;--dsh-font-mono:"Cascadia Code", "Cascadia Mono", Consolas, monospace;--dsh-display-weight:700;--dsh-display-tracking:-0.01em;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
:root[data-dsh-font="arcade"] [data-dsh-style],
:root[data-dsh-font="arcade"] [data-dsh-portal-synced],
:root[data-dsh-font="arcade"] :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]),
[data-dsh-style][data-dsh-font="arcade"],
[data-dsh-portal-synced][data-dsh-font="arcade"]{--dsh-font-display:"Cascadia Code SemiBold", "Cascadia Code", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-body:"Cascadia Code", "Cascadia Mono", "YouYuan", "幼圆", "Noto Sans SC", monospace;--dsh-font-mono:"Cascadia Mono", "Cascadia Code", "YouYuan", "幼圆", Consolas, monospace;--dsh-display-weight:700;--dsh-display-tracking:0.015em;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
:root[data-dsh-font="modern"] [data-dsh-style],
:root[data-dsh-font="modern"] [data-dsh-portal-synced],
:root[data-dsh-font="modern"] :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]),
[data-dsh-style][data-dsh-font="modern"],
[data-dsh-portal-synced][data-dsh-font="modern"]{--dsh-font-display:"Source Sans 3", "Segoe UI", "Noto Sans SC", "Microsoft YaHei UI", sans-serif;--dsh-font-body:"Source Sans 3", "Segoe UI", "Noto Sans SC", "Microsoft YaHei UI", sans-serif;--dsh-font-mono:"Cascadia Code", "Cascadia Mono", Consolas, "Microsoft YaHei UI", monospace;--dsh-display-weight:650;--dsh-display-tracking:normal;--dsh-body-tracking:normal;--dsw-font-family:var(--dsh-font-body);--dsw-font-markdown-base:var(--dsh-font-body)}
:where([data-dsh-style], [data-dsh-portal-synced]),
:where([data-dsh-style], [data-dsh-portal-synced]) :where(button, input, select, textarea),
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style], [data-dsh-portal-synced], :has([data-dsh-style])),
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style], [data-dsh-portal-synced], :has([data-dsh-style])) :where(button, input, select, textarea){font-family:var(--dsh-font-body);letter-spacing:var(--dsh-body-tracking, normal)}
:where([data-dsh-style], [data-dsh-portal-synced]) :where(
  h1,
  h2,
  h3,
  [role="tab"],
  .dsh-header-title,
  [data-dsh-serif],
  [data-dsh-editorial-heading],
  [data-dsh-card] :is(h2, h3, .dsh-card-title),
  .dsh-card :is(h2, h3, .dsh-card-title),
  [data-dsh-reader] :is(h1, h2),
  .dsh-reader :is(h1, h2)
),
:where([role="dialog"], [role="alertdialog"], dialog):where([data-dsh-style], [data-dsh-portal-synced], :has([data-dsh-style])) :where(h1, h2, h3, header h2, [role="tab"], [data-dsh-serif]){font-family:var(--dsh-font-display);font-weight:var(--dsh-display-weight, 700);letter-spacing:var(--dsh-display-tracking, normal)}
:where([data-dsh-style], [data-dsh-portal-synced]) :where(code, pre, kbd, samp),
:where([role="dialog"], [role="alertdialog"], dialog):where([data-dsh-style], [data-dsh-portal-synced], :has([data-dsh-style])) :where(code, pre, kbd, samp){font-family:var(--dsh-font-mono)}
:where([data-dsh-style]) :where(button, [role="button"]),
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]) :where(button, [role="button"]){translate:0px 0px;scale:1;transition-property:background-color, border-color, color, box-shadow, opacity, translate, scale;transition-duration:var(--dsh-motion-fast);transition-timing-function:var(--dsh-ease-out)}
:where([data-dsh-style]) :where(button, [role="button"])[aria-expanded="true"]:not(:disabled):not([aria-disabled="true"]),
:where([role="dialog"], [role="alertdialog"], dialog):has([data-dsh-style]) :where(button, [role="button"])[aria-expanded="true"]:not(:disabled):not([aria-disabled="true"]){background-color:var(--dsw-alias-interactive-bg-active);color:var(--dsw-alias-label-primary)}
@media (prefers-reduced-motion: no-preference){@media (hover: hover){:where([data-dsh-style]:not([data-dsh-style="pixel8bit"]):not([data-dsh-style="eink"]):not([data-dsh-style="win98"]):not([data-dsh-style="risograph"])) :where(button:not([role="tab"]):not([role="menuitem"]):not([role="menuitemradio"]):not([role="switch"]), .dsh-btn):hover:not(:disabled):not([aria-disabled="true"]),
    :where([role="dialog"], [role="alertdialog"], dialog):has([data-dsh-style]:not([data-dsh-style="pixel8bit"]):not([data-dsh-style="eink"]):not([data-dsh-style="win98"]):not([data-dsh-style="risograph"])) :where(button:not([role="tab"]):not([role="menuitem"]):not([role="menuitemradio"]):not([role="switch"]), .dsh-btn):hover:not(:disabled):not([aria-disabled="true"]){translate:0px -0.5px}[data-dsh-style="pixel8bit"] :where(button:not([role="tab"]):not([role="menuitem"]):not([role="menuitemradio"]), .dsh-btn):hover:not(:disabled):not([aria-disabled="true"]),
    :where([role="dialog"], [role="alertdialog"], dialog):where([data-dsh-style="pixel8bit"], :has([data-dsh-style="pixel8bit"])) :where(button:not([role="tab"]):not([role="menuitem"]):not([role="menuitemradio"]), .dsh-btn):hover:not(:disabled):not([aria-disabled="true"]){translate:-1px -1px;box-shadow:3px 3px 0px #1e2826;transition-timing-function:steps(2, end);transition-duration:70ms}[data-dsh-style="risograph"] :where(button:not([role="tab"]):not([role="menuitem"]):not([role="menuitemradio"]), .dsh-btn):hover:not(:disabled):not([aria-disabled="true"]),
    :where([role="dialog"], [role="alertdialog"], dialog):where([data-dsh-style="risograph"], :has([data-dsh-style="risograph"])) :where(button:not([role="tab"]):not([role="menuitem"]):not([role="menuitemradio"]), .dsh-btn):hover:not(:disabled):not([aria-disabled="true"]){translate:-1px -1px;box-shadow:4px 4px 0px #2563eb}}:where([data-dsh-style]:not([data-dsh-style="pixel8bit"]):not([data-dsh-style="eink"]):not([data-dsh-style="win98"]):not([data-dsh-style="risograph"])) :where(button:not([role="switch"]), [role="button"]):active:not(:disabled):not([aria-disabled="true"]),
  :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]:not([data-dsh-style="pixel8bit"]):not([data-dsh-style="eink"]):not([data-dsh-style="win98"]):not([data-dsh-style="risograph"])) :where(button:not([role="switch"]), [role="button"]):active:not(:disabled):not([aria-disabled="true"]){scale:0.965;translate:0px 0.5px;transition-duration:80ms}[data-dsh-style="pixel8bit"] :where(button:not([role="tab"]):not([role="switch"]), .dsh-btn):active:not(:disabled):not([aria-disabled="true"]),
  :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="pixel8bit"], :has([data-dsh-style="pixel8bit"])) :where(button:not([role="tab"]):not([role="switch"]), .dsh-btn):active:not(:disabled):not([aria-disabled="true"]){translate:1px 1px !important;scale:1 !important;box-shadow:1px 1px 0px #1e2826 !important;transition-timing-function:steps(2, end);transition-duration:50ms}[data-dsh-style="risograph"] :where(button:not([role="tab"]):not([role="switch"]), .dsh-btn):active:not(:disabled):not([aria-disabled="true"]),
  :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style="risograph"], :has([data-dsh-style="risograph"])) :where(button:not([role="tab"]):not([role="switch"]), .dsh-btn):active:not(:disabled):not([aria-disabled="true"]){translate:2px 2px !important;scale:1 !important;box-shadow:1px 1px 0px #18181b !important;transition-duration:60ms}}
:where([data-dsh-style]) :where(button, [role="button"], summary) svg,
:where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]) :where(button, [role="button"], summary) svg{translate:0px 0px;rotate:0deg;scale:1;transform-origin:center}
@keyframes dsh-icon-spin{to{rotate:360deg}}
@keyframes dsh-icon-wiggle{0%{rotate:0deg}25%{rotate:-12deg}55%{rotate:10deg}80%{rotate:-5deg}100%{rotate:0deg}}
@keyframes dsh-icon-pop{0%{scale:1}45%{scale:1.26}75%{scale:0.94}100%{scale:1}}
@keyframes dsh-icon-bounce{0%, 100%{translate:0px 0px}45%{translate:0px 2.5px}75%{translate:0px -1px}}
@media (prefers-reduced-motion: no-preference){:where([data-dsh-style]) :where(button, [role="button"], summary) svg,
  :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]) :where(button, [role="button"], summary) svg{transition:translate var(--dsh-motion-base) var(--dsh-ease-spring),
      rotate 240ms var(--dsh-ease-spring),
      scale var(--dsh-motion-base) var(--dsh-ease-spring)}:where([data-dsh-style]) :where([aria-expanded="true"], [data-open="true"], details[open] > summary) :is(svg[data-dsh-icon="down"], svg[data-dsh-icon="chevron-down"], svg[data-icon="down"], svg[data-icon="chevron-down"]),
  :where([role="dialog"], [role="alertdialog"], dialog):has([data-dsh-style]) :where([aria-expanded="true"], [data-open="true"]) :is(svg[data-dsh-icon="down"], svg[data-dsh-icon="chevron-down"], svg[data-icon="down"], svg[data-icon="chevron-down"]){rotate:180deg}:where([data-dsh-style]) :where(button, [role="button"])[aria-busy="true"] :is(svg[data-dsh-icon="refresh"], svg[data-dsh-icon="sync"], svg[data-icon="refresh"], svg[data-icon="sync"]),
  :where([data-dsh-style]) :is(svg[data-dsh-icon="refresh"], svg[data-icon="refresh"])[data-spinning="true"]{animation:dsh-icon-spin 0.85s linear infinite}@media (hover: hover){:where([data-dsh-style], [role="dialog"], [role="alertdialog"], dialog) :where(button, [role="button"]):hover:not(:disabled):not([aria-disabled="true"]) :is(svg[data-dsh-icon="refresh"], svg[data-dsh-icon="sync"], svg[data-dsh-icon="reload"], svg[data-icon="refresh"], svg[data-icon="sync"], svg[data-icon="reload"]){rotate:180deg}:where([data-dsh-style], [role="dialog"], [role="alertdialog"], dialog) :where(button, [role="button"]):hover:not(:disabled):not([aria-disabled="true"]) :is(svg[data-dsh-icon="plus"], svg[data-dsh-icon="add"], svg[data-dsh-icon="close"], svg[data-dsh-icon="x"], svg[data-icon="plus"], svg[data-icon="add"], svg[data-icon="close"], svg[data-icon="x"]){rotate:90deg}:where([data-dsh-style], [role="dialog"], [role="alertdialog"], dialog) :where(button, [role="button"], a):hover:not(:disabled):not([aria-disabled="true"]) :is(svg[data-dsh-icon="send"], svg[data-dsh-icon="external"], svg[data-dsh-icon="link"], svg[data-icon="send"], svg[data-icon="external"], svg[data-icon="link"]){translate:2px -1.5px}:where([data-dsh-style], [role="dialog"], [role="alertdialog"], dialog) :where(button, [role="button"]):hover:not(:disabled):not([aria-disabled="true"]) :is(svg[data-dsh-icon="reply"], svg[data-dsh-icon="left"], svg[data-dsh-icon="undo"], svg[data-icon="reply"], svg[data-icon="left"], svg[data-icon="undo"]){translate:-2px 0px}:where([data-dsh-style], [role="dialog"], [role="alertdialog"], dialog) :where(button, [role="button"]):hover:not(:disabled):not([aria-disabled="true"]) :is(svg[data-dsh-icon="right"], svg[data-icon="right"]){translate:2px 0px}:where([data-dsh-style], [role="dialog"], [role="alertdialog"], dialog) :where(button, [role="button"]):hover:not(:disabled):not([aria-disabled="true"]) :is(svg[data-dsh-icon="play"], svg[data-icon="play"]){translate:1.5px 0px;scale:1.14}:where([data-dsh-style], [role="dialog"], [role="alertdialog"], dialog) :where(button, [role="button"]):hover:not(:disabled):not([aria-disabled="true"]) :is(svg[data-dsh-icon="trash"], svg[data-dsh-icon="delete"], svg[data-icon="trash"], svg[data-icon="delete"]){animation:dsh-icon-wiggle 360ms var(--dsh-ease-in-out)}:where([data-dsh-style], [role="dialog"], [role="alertdialog"], dialog) :where(button, [role="button"]):hover:not(:disabled):not([aria-disabled="true"]) :is(svg[data-dsh-icon="star"], svg[data-dsh-icon="check"], svg[data-dsh-icon="copy"], svg[data-dsh-icon="bookmark"], svg[data-icon="star"], svg[data-icon="check"], svg[data-icon="copy"], svg[data-icon="bookmark"]){scale:1.18}:where([data-dsh-style], [role="dialog"], [role="alertdialog"], dialog) :where(button, [role="button"]):hover:not(:disabled):not([aria-disabled="true"]) :is(svg[data-dsh-icon="download"], svg[data-dsh-icon="export"], svg[data-icon="download"], svg[data-icon="export"]){animation:dsh-icon-bounce 420ms var(--dsh-ease-out)}:where([data-dsh-style], [role="dialog"], [role="alertdialog"], dialog) :where(button, [role="button"]):hover:not(:disabled):not([aria-disabled="true"]) :is(svg[data-dsh-icon="palette"], svg[data-dsh-icon="sparkles"], svg[data-dsh-icon="edit"], svg[data-icon="palette"], svg[data-icon="sparkles"], svg[data-icon="edit"]){rotate:-12deg;scale:1.08}:where([data-dsh-style], [role="dialog"], [role="alertdialog"], dialog) :where(button, [role="button"])[aria-expanded="false"]:hover:not(:disabled):not([aria-disabled="true"]) :is(svg[data-dsh-icon="down"], svg[data-dsh-icon="chevron-down"], svg[data-icon="down"], svg[data-icon="chevron-down"]){translate:0px 1.5px}}:where([data-dsh-style], [role="dialog"], [role="alertdialog"], dialog) :where([aria-pressed="true"], [aria-checked="true"], [data-active="true"], [data-copied="true"]) :is(svg[data-dsh-icon="star"], svg[data-dsh-icon="check"], svg[data-dsh-icon="copy"], svg[data-icon="star"], svg[data-icon="check"], svg[data-icon="copy"]){animation:dsh-icon-pop 300ms var(--dsh-ease-spring)}}
:where([data-dsh-style]) :where(.dsh-header, [data-dsh-header]){display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:48px;padding:6px 14px;flex:none;min-width:0;background:var(--dsw-alias-bg-base);border-block-end:var(--dsh-control-border-width, 0.5px) solid var(--dsw-alias-border-l2)}
.dsh-header-leading{display:flex;align-items:center;gap:10px;min-width:0;flex:1 1 auto}
.dsh-header-brand{display:inline-flex;align-items:center;gap:8px;min-width:0;flex:none;white-space:nowrap}
.dsh-header-badge{display:inline-flex;align-items:center;justify-content:center;flex:none;width:24px;height:24px;border-radius:var(--dsw-radius-xs, 6px);background:var(--dsw-alias-button-primary-fill, #4176e6);color:var(--dsw-alias-button-primary-ink, #ffffff)}
.dsh-header-title{margin:0;font-size:13.5px;font-weight:var(--dsh-display-weight, 650);line-height:1.25;color:var(--dsw-alias-label-primary);white-space:nowrap}
.dsh-header-tabs{display:flex;align-items:center;min-width:0;flex:1 1 auto}
.dsh-header-actions{display:inline-flex;align-items:center;gap:6px;flex:none;white-space:nowrap}
@container (max-width: 759px){:where([data-dsh-style]) :where(.dsh-header, [data-dsh-header]){flex-wrap:wrap;padding-block:6px}.dsh-header-leading{flex-wrap:wrap;gap:6px 10px}}
:where([data-dsh-style]) :where([role="tablist"], .dsh-tablist){position:relative;display:flex;align-items:center;gap:2px;min-width:0;overflow-x:auto;scrollbar-width:thin}
:where([data-dsh-style]) [role="tab"]{position:relative;flex:none;white-space:nowrap}
:where([data-dsh-style]) [role="tab"][aria-selected="true"]::after{content:"";position:absolute;inset-inline:6px;inset-block-end:0;border-block-end:2px solid var(--dsw-alias-state-business-primary);pointer-events:none}
[data-dsh-style] :where([data-dsh-tablist][data-indicator-ready="true"], .dsh-tablist[data-indicator-ready="true"]) [role="tab"][aria-selected="true"]::after{opacity:0}
.dsh-tab-indicator{position:absolute;inset-inline-start:0;inset-block-end:0;height:2px;width:var(--dsh-tab-w, 0px);translate:var(--dsh-tab-x, 0px) 0px;border-block-end:2px solid var(--dsw-alias-state-business-primary);border-radius:2px 2px 0 0;pointer-events:none;opacity:0;transition:translate 180ms var(--dsh-ease-out),
    width 180ms var(--dsh-ease-out),
    opacity 120ms ease-out}
[data-indicator-ready="true"] > .dsh-tab-indicator{opacity:1}
.dsh-tablist-pill > .dsh-tab-indicator{inset-block:3px;height:auto;border-block-end:2px solid var(--dsw-alias-state-business-primary);border-radius:var(--dsw-radius-xs, 6px);background:var(--dsw-alias-interactive-bg-active);z-index:0}
.dsh-tablist-pill > [role="tab"]{z-index:1}
[data-dsh-style="eink"] .dsh-tab-indicator{transition-duration:60ms}
[data-dsh-style="pixel8bit"] .dsh-tab-indicator{border-radius:0px !important;transition-timing-function:steps(4, end)}
@keyframes dsh-tab-panel-enter{from{opacity:0;translate:0px 4px}to{opacity:1;translate:0px 0px}}
:where([data-dsh-style]) :where(.dsh-tab-panel, [data-dsh-tab-panel]):not([hidden]){opacity:1;translate:0px 0px;transition:opacity 140ms var(--dsh-ease-out),
    translate 140ms var(--dsh-ease-out);animation:dsh-tab-panel-enter 140ms var(--dsh-ease-out)}
@starting-style{:where([data-dsh-style]) :where(.dsh-tab-panel, [data-dsh-tab-panel]):not([hidden]){opacity:0;translate:0px 4px}}
.dsh-split-pane{display:flex;flex:1 1 auto;min-width:0;min-height:0;width:100%}
.dsh-split-leading{flex:none;min-width:0;min-height:0;width:var(--dsh-split-size, 320px)}
.dsh-split-trailing{flex:1 1 auto;min-width:0;min-height:0}
.dsh-split-resizer{position:relative;flex:none;width:9px;min-height:24px;display:flex;align-items:center;justify-content:center;cursor:col-resize;touch-action:none;user-select:none;background:transparent;outline:none}
.dsh-split-resizer[aria-orientation="horizontal"]{width:100%;height:9px;min-height:9px;cursor:row-resize}
.dsh-split-resizer::before{content:"";width:1px;height:100%;background:var(--dsw-alias-border-l2);transition:width 120ms var(--dsh-ease-out),
    background-color 120ms var(--dsh-ease-out)}
.dsh-split-resizer[aria-orientation="horizontal"]::before{width:100%;height:1px}
.dsh-split-resizer::after{content:"";position:absolute;width:3px;height:28px;border-radius:999px;background:var(--dsw-alias-border-l3);opacity:0;transition:opacity 120ms var(--dsh-ease-out),
    background-color 120ms var(--dsh-ease-out)}
.dsh-split-resizer[aria-orientation="horizontal"]::after{width:28px;height:3px}
.dsh-split-resizer:hover::before,
.dsh-split-resizer:focus-visible::before,
.dsh-split-resizer[data-dragging="true"]::before{width:2px;background:var(--dsw-alias-state-business-primary)}
.dsh-split-resizer[aria-orientation="horizontal"]:is(:hover, :focus-visible, [data-dragging="true"])::before{width:100%;height:2px}
.dsh-split-resizer:is(:hover, :focus-visible, [data-dragging="true"])::after{opacity:1;background:var(--dsw-alias-state-business-primary)}
.dsh-split-resizer:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:-2px}
[data-dsh-style="pixel8bit"] .dsh-split-resizer::before{width:2px;background:#1e2826}
[data-dsh-style="pixel8bit"] .dsh-split-resizer::after{border-radius:0px}
@container (max-width: 759px){.dsh-split-pane{flex-direction:column;overflow-y:auto}.dsh-split-leading{width:100% !important;max-width:100%;flex:none}.dsh-split-resizer{display:none}}
@media (max-width: 759px){.dsh-split-pane{flex-direction:column;overflow-y:auto}.dsh-split-leading{width:100% !important;max-width:100%;flex:none}.dsh-split-resizer{display:none}}
@keyframes dsh-skeleton-shimmer{0%{background-position:100% 0}100%{background-position:-100% 0}}
.dsh-skeleton-group{display:flex;flex-direction:column;gap:8px;width:100%}
.dsh-skeleton{display:block;width:100%;height:12px;border-radius:var(--dsw-radius-xs, 6px);background-color:var(--dsw-alias-bg-layer-2, #e5e7eb);background-image:linear-gradient(
    90deg,
    var(--dsw-alias-bg-layer-2, #e5e7eb) 0%,
    color-mix(in oklab, var(--dsw-alias-bg-overlay, #ffffff) 82%, var(--dsw-alias-state-business-primary, #4176e6) 18%) 48%,
    var(--dsw-alias-bg-layer-2, #e5e7eb) 100%
  );background-size:220% 100%;background-position:100% 0}
.dsh-skeleton-circle{width:32px;height:32px;border-radius:50%;flex:none}
.dsh-skeleton-card{display:flex;flex-direction:column;gap:10px;padding:12px 14px;border-radius:var(--dsw-radius-md, 12px);border:var(--dsh-control-border-width, 0.5px) solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1)}
.dsh-skeleton-row{display:flex;align-items:center;gap:10px;padding:8px 10px}
@media (prefers-reduced-motion: no-preference){:where([data-dsh-style]:not([data-dsh-style="eink"])) .dsh-skeleton[data-animated="true"]{animation:dsh-skeleton-shimmer 1.35s var(--dsh-ease-in-out) infinite}[data-dsh-style="pixel8bit"] .dsh-skeleton[data-animated="true"]{border-radius:0px !important;border:1px solid #1e2826;animation-timing-function:steps(4, end)}}
[data-dsh-style="eink"] .dsh-skeleton{background-image:none;border:1px solid #c5c2b8}
.dsh-progress{position:relative;width:100%;height:6px;overflow:clip;border-radius:999px;background:var(--dsw-alias-bg-layer-2)}
.dsh-progress-bar{height:100%;width:var(--dsh-progress-value, 0%);border-radius:inherit;background:var(--dsw-alias-state-business-primary);transition:width 200ms var(--dsh-ease-out)}
[data-dsh-style="pixel8bit"] .dsh-progress{height:10px;border-radius:0px !important;border:2px solid #1e2826;background:var(--dsw-alias-bg-layer-1);box-shadow:2px 2px 0px #1e2826}
[data-dsh-style="pixel8bit"] .dsh-progress-bar{border-radius:0px !important;background:repeating-linear-gradient(
    90deg,
    #2e7d5b 0px,
    #2e7d5b 6px,
    #24674a 6px,
    #24674a 8px
  );transition-timing-function:steps(8, end)}
:where([data-dsh-style]) :where([data-dsh-card], .dsh-card, [data-dsh-row], .dsh-row){translate:0px 0px;transition:background-color var(--dsh-motion-fast) var(--dsh-ease-out),
    border-color var(--dsh-motion-fast) var(--dsh-ease-out),
    box-shadow var(--dsh-motion-base) var(--dsh-ease-out),
    translate var(--dsh-motion-base) var(--dsh-ease-out)}
.dsh-row-actions{display:inline-flex;align-items:center;gap:4px;flex:none;translate:0px 0px;transition:opacity var(--dsh-motion-fast) var(--dsh-ease-out),
    translate var(--dsh-motion-fast) var(--dsh-ease-out)}
@media (hover: hover){:where([data-dsh-row], .dsh-row) .dsh-row-actions:not([data-always-visible="true"]){opacity:0;translate:4px 0px;pointer-events:none}:where([data-dsh-row], .dsh-row):is(:hover, :focus-within, [data-active="true"], [data-selected="true"], [aria-selected="true"]) .dsh-row-actions{opacity:1;translate:0px 0px;pointer-events:auto}}
@media (hover: hover) and (prefers-reduced-motion: no-preference){:where([data-dsh-style]:not([data-dsh-style="pixel8bit"]):not([data-dsh-style="eink"]):not([data-dsh-style="win98"]):not([data-dsh-style="risograph"])) :where([data-dsh-card], .dsh-card):hover{translate:0px -1.5px;box-shadow:var(--dsh-card-hover-shadow)}[data-dsh-style="pixel8bit"] :where([data-dsh-card], .dsh-card):hover{translate:-1px -1px;box-shadow:4px 4px 0px #1e2826}[data-dsh-style="risograph"] :where([data-dsh-card], .dsh-card):hover{translate:-1px -1px;box-shadow:5px 5px 0px #ff3e7f}:where([data-dsh-style]) :where([data-dsh-row], .dsh-row):hover:not([data-selected="true"]):not([aria-selected="true"]):not([data-active="true"]){background-color:var(--dsh-surface-spotlight, var(--dsw-alias-interactive-bg-hover))}}
:where([role="dialog"], [role="alertdialog"], dialog[open]):where([data-dsh-style], :has([data-dsh-style])){overscroll-behavior:contain;opacity:1;transition-property:opacity, scale, translate, display, overlay;transition-duration:var(--dsh-motion-dialog);transition-timing-function:var(--dsh-ease-out);transition-behavior:allow-discrete}
@starting-style{:where([role="dialog"], [role="alertdialog"], dialog[open]):where([data-dsh-style], :has([data-dsh-style])){opacity:0}}
@media (prefers-reduced-motion: no-preference){:where([role="dialog"], [role="alertdialog"], dialog[open]):where([data-dsh-style], :has([data-dsh-style])){scale:1;translate:0px 0px}@starting-style{:where([role="dialog"], [role="alertdialog"], dialog[open]):where([data-dsh-style], :has([data-dsh-style])){scale:0.965;translate:0px 6px}}}
dialog[open]::backdrop{overflow:hidden;overscroll-behavior:contain}
:where([data-dsh-style]) [data-plugin-update-footer]{flex:none;box-sizing:border-box;width:100%;min-height:32px;margin:0;padding:6px 14px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:6px 12px;font-size:12px;line-height:1.4;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-1);border-block-start:var(--dsh-control-border-width, 0.5px) solid var(--dsw-alias-border-l2)}
:where([data-dsh-style]) [data-plugin-update-footer] :where(button, a){min-height:24px;font-size:11.5px}
:where([data-dsh-style]) [data-show-updates="false"] [data-plugin-update-footer]{display:none}
.dsh-style-switcher{display:inline-flex;align-items:center;gap:6px;flex-shrink:0;flex:none;white-space:nowrap}
.dsh-style-trigger.dsh-style-trigger,
.dsh-font-trigger.dsh-font-trigger{display:inline-flex;align-items:center;gap:6px;min-height:28px;height:28px;padding-inline:8px;width:auto;flex-shrink:0;font-size:12px;line-height:18px;font-weight:500;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-1);border:var(--dsh-control-border-width, 0.5px) solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-sm, 8px);cursor:pointer;white-space:nowrap}
.dsh-font-trigger.dsh-font-trigger{gap:5px;padding-inline:7px}
.dsh-font-glyph{display:inline-flex;align-items:center;justify-content:center;flex:none;min-width:16px;height:16px;padding-inline:3px;border-radius:var(--dsw-radius-xs, 4px);background:var(--dsw-alias-state-business-tertiary, rgba(65, 118, 230, 0.12));color:var(--dsw-alias-state-business-primary, var(--dsw-alias-label-primary));font-family:var(--dsh-font-display);font-size:10.5px;font-weight:700;line-height:1}
.dsh-style-label,
.dsh-font-label{white-space:nowrap;line-height:1}
@media (hover: hover){.dsh-style-trigger.dsh-style-trigger:hover:not(:disabled),
  .dsh-font-trigger.dsh-font-trigger:hover:not(:disabled){color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover)}}
.dsh-style-swatch{display:inline-block;flex:none;width:10px;height:10px;border-radius:50%;corner-shape:round;background:var(--dsh-swatch-color, var(--dsw-alias-state-business-primary));box-shadow:inset 0 0 0 1px rgba(0, 0, 0, 0.16)}
[data-dsh-style="pixel8bit"] .dsh-style-swatch{border-radius:0px !important;corner-shape:square;box-shadow:1px 1px 0px #1e2826}
.dsh-style-fallback-wrap{position:relative;display:inline-flex}
.dsh-style-fallback-menu{position:absolute;inset-block-start:calc(100% + 4px);inset-inline-end:0;z-index:2147483001;display:grid;gap:2px;min-width:186px;max-height:min(420px, 70dvh);overflow-y:auto;overscroll-behavior:contain;padding:4px;background:var(--dsw-alias-bg-overlay, var(--dsw-alias-bg-base));border:var(--dsh-control-border-width, 0.5px) solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-md, 12px);box-shadow:var(--dsw-elevation-prominent)}
.dsh-style-fallback-item{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;min-height:28px;padding:4px 8px;border:0;border-radius:var(--dsw-radius-xs, 6px);background:transparent;color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;text-align:start;cursor:pointer}
.dsh-style-fallback-item-leading{display:inline-flex;align-items:center;gap:7px;min-width:0}
.dsh-style-fallback-item[aria-checked="true"]{background:var(--dsw-alias-interactive-bg-active);font-weight:600}
@media (hover: hover){.dsh-style-fallback-item:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}}
.dsh-fallback-modal-root{position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;padding:16px}
.dsh-fallback-modal-mask{position:fixed;inset:0;background:rgba(15, 23, 42, 0.36)}
.dsh-fallback-modal-dialog{position:relative;z-index:1;max-width:min(560px, calc(100dvw - 32px));max-height:calc(100dvh - 32px);overflow:clip;display:flex;flex-direction:column;border-radius:var(--dsw-radius-md, 12px);background:var(--dsw-alias-bg-layer-1, #f8fafc);color:var(--dsw-alias-label-primary, #1f232b);box-shadow:var(--dsw-elevation-prominent)}
@media (prefers-reduced-motion: reduce){:where([data-dsh-style]) :where(button, [role="button"], [data-dsh-card], .dsh-card, [data-dsh-row], .dsh-row, .dsh-row-actions, .dsh-tab-panel, [data-dsh-tab-panel]),
  :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):has([data-dsh-style]) :where(button, [role="button"]){translate:none !important;scale:none !important;animation:none !important;transition-property:background-color, border-color, color, opacity;transition-duration:90ms}:where([data-dsh-style], [role="dialog"], [role="alertdialog"], dialog) :where(button, [role="button"], summary) svg,
  [data-dsh-style="pixel8bit"] :where([data-dsh-row], .dsh-row)::before,
  [data-dsh-style="pixel8bit"] .dsh-pixel-cursor{animation:none !important;transition:none !important;translate:none !important;scale:none !important}.dsh-tab-indicator{transition-property:opacity;transition-duration:90ms}.dsh-skeleton{animation:none !important;background-image:none}:where([role="dialog"], [role="alertdialog"], dialog[open]):where([data-dsh-style], :has([data-dsh-style])){scale:none !important;translate:none !important;transition-duration:100ms}}
@media (forced-colors: active){:where([data-dsh-style]) :where(button, input, select, textarea, [data-dsh-card], .dsh-card),
  :where([role="dialog"], [role="alertdialog"], [role="menu"], dialog):where([data-dsh-style], :has([data-dsh-style])){border:1px solid ButtonText}:where([data-dsh-style]) [role="tab"][aria-selected="true"]::after{opacity:1 !important;border-block-end:3px solid Highlight}.dsh-tab-indicator{background:transparent !important;border-block-end:3px solid Highlight}.dsh-split-resizer::before,
  .dsh-split-resizer::after{background:ButtonText}.dsh-skeleton{border:1px solid GrayText;background:Canvas}}
.dshc-root{display:flex;flex-direction:column;min-width:0;min-height:0;color:var(--dsw-alias-label-primary, #0f1115);background-color:var(--dsw-alias-bg-base, #ffffff);font:13px/1.5 var(--dsh-font-body, var(--ds-font-family-text, system-ui, sans-serif))}
.dshc-root[data-main="true"]{height:100%;padding-block-start:var(--dsh-frame-top-clearance, 0px)}
.dshc-root[data-main="true"] .dsh-calendar_topbar{padding-inline-start:calc(12px + var(--dsh-frame-leading-clearance, 0px))}
.dshc-root *, .dsh-calendar_dialog *, .dshc-float, .dshc-fab{box-sizing:border-box}
.dshc-root:focus-visible, .dshc-root :focus-visible, .dsh-calendar_dialog :focus-visible, .dshc-fab:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:-2px}
.dshc-root, .dshc-fab, .dsh-calendar_dialog{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
.dshc-root :is(input, textarea, select, [contenteditable="true"]), .dsh-calendar_dialog :is(input, textarea, select, [contenteditable="true"]), .dsh-calendar_selectable{-webkit-user-select:text;user-select:text}
.dshc-root :is(button, [role="tab"], [role="button"], label){touch-action:manipulation}
.dshc-shell{container-type:inline-size;display:flex;flex-direction:column;flex:1;min-width:0;min-height:0}
.dsh-calendar_topbar, .dshc-toolbar, .dsh-calendar_calendarToolbar{display:flex;align-items:center;flex-wrap:wrap;gap:8px 12px;min-width:0;padding:8px 14px}
.dshc-toolbar, .dsh-calendar_calendarToolbar{border-block-end:0.5px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base)}
.dsh-calendar_topbar{flex:none;min-height:48px;flex-wrap:nowrap;gap:6px 8px;padding:6px 12px}
.dsh-calendar_brand, .dsh-calendar_topActions, .dsh-calendar_period, .dsh-calendar_emptyActions{display:flex;align-items:center;flex-wrap:wrap;gap:6px}
.dsh-calendar_brand{flex:none;gap:8px}
.dsh-calendar_topActions{margin-inline-start:auto;flex-wrap:nowrap;gap:5px;flex:none}
.dsh-calendar_topbar > [role="tablist"]{flex:0 1 auto;min-width:0}
.dsh-calendar_topbar > [role="tablist"] > [role="tab"]{padding-inline:6px;white-space:nowrap;flex:none}
.dsh-calendar_topbar .dshc-btn{padding-inline:7px;white-space:nowrap}
.dsh-calendar_topbar .dshc-btn.dsh-calendar_commandTrigger{padding-inline:6px}
.dsh-calendar_brand h1, .dshc-title{margin:0;font-size:14px;font-weight:600;white-space:nowrap}
.dsh-calendar_brandMark, .dsh-calendar_emptyIcon{display:inline-grid;place-items:center;width:24px;height:24px;border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-button-primary-ink, var(--dsw-alias-bg-base))}
.dsh-calendar_zone{padding:2px 6px;border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);font:10.5px/1.4 var(--dsh-font-mono, var(--ds-font-family-code, ui-monospace, monospace));white-space:nowrap}
.dsh-calendar_layoutChoices, .dsh-calendar_paletteChoices{align-items:center;padding:2px;border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-md);background:var(--dsw-alias-bg-layer-1)}
.dsh-calendar_layoutChoices{display:none;gap:2px}
.dsh-calendar_layoutChoices .dshc-btn{min-height:24px;padding-inline:6px;font-size:11.5px;white-space:nowrap}
.dsh-calendar_paletteChoices{display:flex;flex:none}
.dsh-calendar_paletteChoices .dshc-btn.dsh-calendar_paletteSwatch{width:18px;min-height:24px;padding:0}
.dsh-calendar_paletteSwatch::before{content:"";width:10px;height:10px;border-radius:50%;background:var(--dsw-alias-accent)}
.dsh-calendar_paletteSwatch[aria-pressed="true"]::before{outline:1px solid var(--dsw-alias-label-primary);outline-offset:2px}
.dsh-calendar_triggerKey{font:11px/1.4 var(--dsh-font-mono, var(--ds-font-family-code, ui-monospace, monospace));white-space:nowrap}
@container (min-width: 1200px){.dsh-calendar_layoutChoices{display:flex}.dsh-calendar_layoutDropdown{display:none}}
@container (max-width: 1260px){.dsh-calendar_zone{display:none}}
@container (max-width: 1090px){.dsh-calendar_topbar{flex-wrap:wrap}.dsh-calendar_topActions{flex-wrap:wrap}}
.dsh-calendar_segments{position:relative;min-width:0;max-width:100%;display:inline-flex;align-items:center;gap:2px;padding:2px;border-radius:var(--dsw-radius-md);background:var(--dsw-alias-bg-layer-2)}
.dsh-calendar_segment{min-height:26px;padding:3px 10px;border:0;border-radius:var(--dsw-radius-sm);background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;cursor:pointer;white-space:nowrap}
.dsh-calendar_segment[aria-selected="true"]{background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary)}
.dsh-calendar_segments[data-indicator-ready="true"] .dsh-calendar_segment[aria-selected="true"]{background:transparent}
.dshc-btn{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:28px;padding:3px 10px;border-radius:var(--dsw-radius-sm);color:var(--dsw-alias-label-primary);font:500 12px/1.4 var(--dsh-font-body, var(--ds-font-family-text, system-ui, sans-serif));cursor:pointer}
.dshc-btn.dsh-calendar_outline{border:0.5px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base)}
.dshc-btn.dsh-calendar_ghost{border:0;background:transparent}
.dshc-btn.dsh-calendar_primary{border:0;background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-button-primary-ink, var(--dsw-alias-bg-base))}
.dshc-btn.dsh-calendar_danger{color:var(--dsw-alias-state-error-primary)}
.dshc-btn.dsh-calendar_outline:hover:not(:disabled), .dshc-btn.dsh-calendar_ghost:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}
.dshc-btn.dsh-calendar_primary:hover:not(:disabled){background:var(--dsw-alias-button-primary-hover)}
.dshc-btn:disabled, .dsh-calendar_segment:disabled{opacity:0.5;cursor:not-allowed}
.dshc-btn.dsh-calendar_iconButton{width:28px;flex:none;padding-inline:0}
.dsh-calendar_fallbackIcon::before{content:attr(data-glyph)}
.dshc-spacer{flex:1}
.dshc-monthhead{font-size:14px;font-weight:600}
.dshc-sub{margin:0;color:var(--dsw-alias-label-secondary);font-size:12px;overflow-wrap:anywhere}
.dshc-mono, .dshc-time, .dshc-hour, .dsh-calendar_miniDay, .dsh-calendar_slotRange{font-family:var(--dsh-font-mono, var(--ds-font-family-code, ui-monospace, monospace));font-variant-numeric:tabular-nums}
.dsh-calendar_schedule{display:grid;grid-template-columns:236px minmax(0, 1fr);flex:1;min-height:0}
.dsh-calendar_schedule[data-resizable]{grid-template-columns:clamp(180px, var(--calendar-rail-width), min(360px, calc(100% - 330px))) var(--calendar-rail-gap, 8px) minmax(0, 1fr)}
.dsh-calendar_railHandle{position:relative;width:100%;min-width:0;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary)}
.dsh-calendar_railHandle:is(:hover, :focus-visible, :active){background:var(--dsw-alias-interactive-bg-hover)}
.dsh-calendar_rail{display:flex;flex-direction:column;min-width:0;min-height:0;border-inline-end:0.5px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1)}
.dsh-calendar_railScroll{flex:1;min-width:0;overflow:auto;padding:13px 12px}
.dsh-calendar_railSection{min-width:0;margin-block-start:16px}
.dsh-calendar_railSection h2, .dsh-calendar_miniHeading h2{margin:0;font:600 12px/1.5 var(--dsh-font-display, var(--ds-font-family-text, system-ui, sans-serif))}
.dsh-calendar_railSection h2{margin-block-end:4px;color:var(--dsw-alias-label-secondary)}
.dsh-calendar_miniCalendar{padding:7px;border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-lg);background:var(--dsw-alias-bg-base)}
.dsh-calendar_miniHeading{display:flex;align-items:center;justify-content:space-between;margin-block-end:4px}
.dsh-calendar_miniHeading .dshc-btn.dsh-calendar_iconButton{width:22px}
.dsh-calendar_miniHeading .dsh-calendar_period{flex:none;gap:1px}
.dsh-calendar_miniGrid{display:grid;grid-template-columns:repeat(7, minmax(0, 1fr));gap:1px;text-align:center}
.dsh-calendar_miniWeekday{padding:3px 0;color:var(--dsw-alias-label-secondary);font-size:10px}
.dsh-calendar_miniDay{min-width:0;height:26px;padding:0;border:0;box-shadow:none;border-radius:var(--dsw-radius-sm);background:transparent;color:var(--dsw-alias-label-primary);font-size:11px;cursor:pointer}
.dsh-calendar_miniDay[aria-current="date"]{color:var(--dsw-alias-state-business-primary);font-weight:600}
.dsh-calendar_miniDay:hover:not([aria-pressed="true"]){background:var(--dsw-alias-interactive-bg-hover)}
.dsh-calendar_miniDay[aria-pressed="true"]{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-button-primary-ink, var(--dsw-alias-bg-base))}
.dsh-calendar_out, .dsh-calendar_miniDay.dsh-calendar_out{color:var(--dsw-alias-label-tertiary)}
.dsh-calendar_calendarSource{margin-block:6px}
.dsh-calendar_calendarSource .dshc-check{padding:5px 3px}
.dsh-calendar_calendarSource .dshc-check > span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dsh-calendar_conflictCard{display:flex;align-items:flex-start;gap:6px;padding:8px 9px;border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-md);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-secondary);font-size:11px}
.dsh-calendar_conflictCard > :first-child{flex:none}
.dsh-calendar_conflictCard.dsh-calendar_warn{background:var(--dsw-alias-state-warn-tertiary);color:var(--dsw-alias-state-warn-label)}
.dsh-calendar_conflictRange{margin-block-start:2px;color:var(--dsw-alias-label-secondary)}
.dsh-calendar_conflictCard .dshc-btn.dsh-calendar_conflictLink{display:none;min-height:22px;padding:0;color:var(--dsw-alias-link);text-align:start}
.dsh-calendar_workspacePanel, .dsh-calendar_scheduleMain, .dsh-calendar_calendarSurface, .dsh-calendar_weekView{display:flex;flex-direction:column;flex:1;min-width:0;min-height:0}
.dshc-root[data-compact="true"] .dsh-calendar_schedule{display:flex}
.dsh-calendar_calendarToolbar{justify-content:space-between;min-height:44px}
.dsh-calendar_calendarSurface{overflow:auto}
.dsh-calendar_calendarSurface > [role="tabpanel"]{display:flex;flex-direction:column;flex:1;min-width:0;min-height:0}
.dshc-grid{display:grid;grid-template-columns:repeat(7, minmax(0, 1fr))}
.dshc-grid > :is(.dshc-cell, .dshc-dow):nth-child(7n){border-inline-end:0}
.dshc-dow, .dshc-dayhead{padding:7px 3px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-1);border-block-end:0.5px solid var(--dsw-alias-border-l2);text-align:center;font-size:11px;font-weight:500}
.dshc-dow, .dshc-cell{border-inline-end:0.5px solid var(--dsw-alias-border-l2)}
.dshc-cell{min-height:94px;padding:5px 6px;overflow:hidden;border-block-end:0.5px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base);cursor:pointer}
.dshc-cell:hover{background:color-mix(in srgb, var(--dsw-alias-label-primary) 4%, var(--dsw-alias-bg-base))}
.dshc-cell:active{scale:1 !important;translate:0px 0px !important}
.dshc-cell.dsh-calendar_out{background:var(--dsw-alias-bg-layer-1)}
.dshc-daynum{margin-bottom:4px;font-size:12px}
.dshc-daynum b{display:inline-grid;min-width:22px;height:22px;place-items:center;font-weight:500}
.dshc-cell.today .dshc-daynum b{border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-button-primary-ink, var(--dsw-alias-bg-base))}
.dshc-chip, .dshc-slot{--event-color:var(--dsw-alias-state-business-primary);display:block;overflow:hidden;text-align:start;border:0;border-inline-start:2.5px solid var(--event-color);border-radius:var(--dsw-radius-sm);background:color-mix(in srgb, var(--event-color) 13%, var(--dsw-alias-bg-base));color:var(--dsw-alias-label-primary);font:inherit;font-size:11px}
.dshc-chip{width:100%;margin:0 0 3px;padding:2px 4px;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}
.dshc-chip:hover, .dshc-slot:hover{background:color-mix(in srgb, var(--event-color) 22%, var(--dsw-alias-bg-base))}
.dsh-calendar_allday{--event-color:var(--dsw-alias-state-success-primary)}
.dsh-calendar_recurring{--event-color:var(--dsw-alias-state-warn-primary)}
.dshc-chip .t, .dshc-slot-time, .dshc-more{font-size:10px;color:var(--dsw-alias-label-secondary)}
.dshc-chip .t{margin-inline-end:4px}
.dsh-calendar_conflicted{outline:1px dashed var(--dsw-alias-state-error-primary);outline-offset:-1px}
.dsh-calendar_weekView{min-height:300px}
.dshc-week{display:grid;grid-template-columns:52px repeat(7, minmax(76px, 1fr));flex:1;min-height:260px;max-height:560px;overflow:auto;overscroll-behavior:contain}
.dshc-root[data-main="true"] .dshc-week{max-height:none}
.dshc-dayhead{position:sticky;top:0;z-index:4;min-height:36px;border-inline-start:0.5px solid var(--dsw-alias-border-l2)}
.dshc-dayhead.today{color:var(--dsw-alias-state-business-primary)}
.dshc-dayhead b{font-size:13px;margin-inline-start:3px}
.dshc-hour{height:44px;padding:3px 6px 0 0;border-block-end:0.5px solid var(--dsw-alias-border-l2);text-align:end;color:var(--dsw-alias-label-secondary);font-size:10px}
.dshc-daycol{position:relative;border-inline-start:0.5px solid var(--dsw-alias-border-l2);min-width:0}
.dshc-daycol.today{background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 5%, var(--dsw-alias-bg-base))}
.dsh-calendar_hourSlot{display:block;width:100%;height:44px;padding:0;border:0;box-shadow:none;border-block-end:0.5px solid var(--dsw-alias-border-l2);background:transparent;cursor:pointer}
.dsh-calendar_hourSlot:hover{background:var(--dsw-alias-interactive-bg-hover)}
.dshc-slot{position:absolute;padding:3px 5px;line-height:1.3;cursor:pointer}
.dsh-calendar_movable{cursor:grab;touch-action:none;user-select:none}
.dsh-calendar_movable:active{cursor:grabbing}
.dsh-calendar_dragging{opacity:0.4}
.dshc-slot-title, .dshc-slot-time{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dshc-slot-title{font-weight:600}
.dshc-resize{position:absolute;inset-inline:0;bottom:0;height:6px;cursor:ns-resize}
.dshc-resize:hover{background:var(--dsw-alias-interactive-bg-active)}
.dshc-slot.dshc-ghost{z-index:3;pointer-events:none;border:0.5px dashed var(--event-color)}
.dshc-ghost.dsh-calendar_warn{--event-color:var(--dsw-alias-state-warn-primary)}
.dsh-calendar_allDayList{display:grid;gap:4px;padding:6px 12px;max-height:120px;overflow:auto}
.dshc-draghint, .dshc-footer, .dshc-emptyhint{padding:6px 12px;margin:0;border-block-start:0.5px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);font-size:11px}
.dshc-emptyhint{border-block-start:0;border-block-end:0.5px solid var(--dsw-alias-border-l2)}
.dshc-footer{display:flex;justify-content:space-between;flex-wrap:wrap;gap:4px 10px}
.dsh-calendar_shortcutHints, .dsh-calendar_shortcutHints > span{display:flex;align-items:center;gap:4px}
.dsh-calendar_shortcutHints{flex-wrap:wrap;gap:4px 10px;margin-inline-start:auto}
.dshc-agenda{display:grid;grid-template-columns:minmax(0, 1fr);gap:16px;padding:10px 14px 20px}
.dshc-agenda > *, .dshc-daygroup, .dshc-row, .dshc-main{min-width:0;max-width:100%}
.dshc-daygroup{display:grid;gap:4px}
.dshc-daylabel{display:flex;align-items:center;gap:7px}
.dshc-row{position:relative;display:flex;align-items:center;gap:6px;border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}
.dsh-calendar_rowTrigger{flex:1;min-width:0;display:flex;align-items:flex-start;gap:10px;padding:6px 9px;border:0;border-radius:inherit;background:transparent;color:inherit;font:inherit;text-align:start;cursor:pointer}
.dsh-calendar_rowActions{padding-inline-end:6px}
.dshc-row:hover{background:var(--dsw-alias-interactive-bg-hover)}
.dshc-time{min-width:84px;color:var(--dsw-alias-label-secondary);font-size:11px}
.dshc-main{flex:1;min-width:0}
.dshc-name, .dshc-meta{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dshc-name{font-weight:600}
.dshc-meta{color:var(--dsw-alias-label-secondary);font-size:11px}
.dshc-tag{display:inline-block;padding:1px 6px;border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary);font-size:11px;font-weight:500}
.dshc-tag.dsh-calendar_success{background:var(--dsw-alias-state-success-tertiary);color:var(--dsw-alias-state-success-primary)}
.dshc-tag.dsh-calendar_warn{background:var(--dsw-alias-state-warn-tertiary);color:var(--dsw-alias-state-warn-label)}
.dshc-tag.dsh-calendar_error{background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, var(--dsw-alias-bg-base));color:var(--dsw-alias-state-error-primary)}
.w-empty{display:grid;align-content:center;justify-items:start;gap:8px;min-height:215px;max-width:425px;margin:auto;padding:20px}
.w-empty h2{margin:0;font-size:16px}
.w-empty p{margin:0;color:var(--dsw-alias-label-secondary)}
.dsh-calendar_emptyIcon{width:36px;height:36px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}
.dshc-skel{height:94px;border:0.5px solid var(--dsw-alias-border-l2)}
.dshc-alert, .dshc-undo{display:flex;align-items:center;flex-wrap:wrap;gap:6px 8px;margin:8px 12px;padding:7px 9px;border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-1);font-size:12px;overflow-wrap:anywhere}
.dshc-alert.dsh-calendar_error{color:var(--dsw-alias-state-error-primary)}
.dshc-alert.dsh-calendar_warn{background:var(--dsw-alias-state-warn-tertiary);color:var(--dsw-alias-state-warn-label)}
.dshc-alert.dsh-calendar_success{background:var(--dsw-alias-state-success-tertiary);color:var(--dsw-alias-state-success-primary)}
.dshc-alert.dsh-calendar_demo{color:var(--dsw-alias-state-business-primary)}
.dsh-calendar_workspacePage{flex:1;min-width:0;min-height:0;overflow:auto;padding:20px 18px 32px}
.dsh-calendar_workspaceScroll{flex:1;min-width:0;min-height:0;overflow:auto}
.dsh-calendar_workspaceScroll > .dsh-calendar_workspacePage{overflow:visible}
.dsh-calendar_pageUpdates{padding:0 18px 24px}
.dsh-calendar_draftControls{display:flex;align-items:center;flex-wrap:wrap;gap:8px}
.dsh-calendar_pageInner{max-width:820px;margin-inline:auto;min-width:0}
.dsh-calendar_pageHeading{margin:0 0 4px;font-size:17px;font-weight:600}
.dsh-calendar_pageIntro{margin:0 0 14px;color:var(--dsw-alias-label-secondary)}
.dsh-calendar_card{margin-block:12px;padding:14px 16px;border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-lg);background:var(--dsw-alias-bg-layer-1);min-width:0}
.dsh-calendar_pageHeader, .dsh-calendar_cardToolbar{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px 10px}
.dsh-calendar_cardToolbar{padding-block-end:10px}
.dsh-calendar_cardToolbar h3{margin:0;font-size:14px}
.dshc-field{display:grid;align-content:start;gap:4px;min-width:0;margin:0 0 10px}
.dshc-field > label, .dshc-field > span:first-child{color:var(--dsw-alias-label-secondary);font-weight:500;font-size:12px}
.dshc-two, .dsh-calendar_formGrid{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));align-items:start;gap:0 12px}
.dsh-calendar_fullField{grid-column:1 / -1}
.dshc-input, .dsh-calendar_fieldControl, .dshc-btn.dsh-calendar_pickerTrigger{box-sizing:border-box;width:100%;min-width:0;min-height:32px;padding:5px 8px;border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font:inherit}
.dsh-calendar_fieldControl:focus-within{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:-2px}
.dsh-calendar_fieldControl > input{width:100%;min-width:0;font:inherit}
.dsh-calendar_fieldControl > input:focus-visible{outline:none}
.dsh-calendar_temporalField{position:relative;display:block;min-width:0}
.dsh-calendar_temporalIcon{display:none}
@supports selector(::-webkit-calendar-picker-indicator){.dsh-calendar_temporalField input::-webkit-calendar-picker-indicator{width:14px;height:14px;padding:0;margin-inline:0;opacity:0;cursor:pointer}.dsh-calendar_temporalIcon{position:absolute;inset-inline-end:9px;top:50%;display:flex;transform:translateY(-50%);pointer-events:none;color:var(--dsw-alias-label-secondary)}}
textarea.dshc-input{min-height:64px;resize:vertical}
.dsh-calendar_picker{width:100%;min-width:0}
.dsh-calendar_toolbarPicker{width:auto;min-width:0}
.dsh-calendar_layoutTrigger{white-space:nowrap}
.dshc-btn.dsh-calendar_pickerTrigger{justify-content:space-between;text-align:start}
.dsh-calendar_pickerTrigger > span:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dsh-calendar_pickerTrigger > :last-child{flex:none}
.dsh-calendar_menu.dsh-calendar_menu{border:0;box-shadow:var(--dsw-elevation-prominent)}
.dshc-check{display:inline-flex;align-items:center;gap:6px;font-size:12px;min-width:0}
.dshc-check input{flex:none;accent-color:var(--dsw-alias-state-business-primary)}
.dshc-actions{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:7px}
.dshc-steps{margin:0 0 12px;font-size:12px;color:var(--dsw-alias-label-secondary)}
.dshc-steps summary{cursor:pointer;color:var(--dsw-alias-link)}
.dshc-steps ol{margin:6px 0;padding-inline-start:20px}
.dshc-link{color:var(--dsw-alias-link)}
.dsh-calendar_helpLinks{display:flex;flex-wrap:wrap;gap:6px 10px}
.dshc-mono{color:var(--dsw-alias-label-secondary);font-size:11px;overflow-wrap:anywhere}
.dsh-calendar_draftHint{margin:0 0 10px;color:var(--dsw-alias-label-secondary);font-size:11px}
.dsh-calendar_dialog .dshc-alert{margin-inline:0}
.dsh-calendar_dialog .dshc-alert:first-child{margin-block-start:0}
.dsh-calendar_reviewMeta{display:flex;align-items:center;flex-wrap:wrap;gap:6px}
.dshc-kv{display:grid;grid-template-columns:max-content minmax(0, 1fr);gap:6px 10px;margin:12px 0 0}
.dshc-kv dt{color:var(--dsw-alias-label-secondary)}
.dshc-kv dd{margin:0;white-space:pre-wrap;overflow-wrap:anywhere}
.dshc-overlay, .dshc-modalwrap{display:flex;align-items:center;justify-content:center;position:fixed;inset:0;z-index:1000;padding:16px}
.dshc-overlay{background:var(--dsw-alias-bg-mask-3, var(--dsw-alias-bg-mask-1))}
.dshc-modalwrap{background:var(--dsw-alias-bg-mask-3, var(--dsw-alias-bg-mask-1))}
.dshc-drawer{--calendar-dialog-width:460px}
.dshc-modal{--calendar-dialog-width:520px}
.dsh-calendar_dialog[role="dialog"]{display:flex;flex-direction:column;width:min(var(--calendar-dialog-width, 520px), 100%);max-height:100%;gap:0;padding:0;overflow:hidden;border:0;border-radius:var(--dsw-radius-panel);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);box-shadow:var(--dsw-elevation-prominent);font:13px/1.5 var(--dsh-font-body, var(--ds-font-family-text, system-ui, sans-serif))}
.dsh-calendar_dialogFrame{display:flex;flex:1;flex-direction:column;min-width:0;min-height:0;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary)}
.dsh-calendar_dialogHeader{display:flex;flex:none;align-items:center;justify-content:space-between;gap:8px;padding:10px 14px;border-block-end:0.5px solid var(--dsw-alias-border-l2)}
.dsh-calendar_dialogHeader h2{margin:0;font-size:15px}
.dsh-calendar_dialogBody{min-height:0;min-width:0;overflow:auto;padding:12px 14px;overscroll-behavior:contain}
.dsh-calendar_dialogFooter{flex:none;padding:8px 14px;border-block-start:0.5px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1)}
.dsh-calendar_commandBody, .dsh-calendar_commandList, .dsh-calendar_conflictList{display:grid;gap:4px}
.dsh-calendar_commandBody{gap:8px}
.dsh-calendar_commandList{max-height:300px;overflow:auto}
.dshc-btn.dsh-calendar_commandRow{justify-content:space-between;min-height:32px;text-align:start}
.dsh-calendar_commandKey{min-width:19px;padding:1px 4px;border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary);font:11px/1.4 var(--dsh-font-mono, var(--ds-font-family-code, ui-monospace, monospace));text-align:center}
.dsh-calendar_availabilityDays{display:flex;flex-wrap:wrap;align-items:center;gap:5px 12px}
.dsh-calendar_availabilityFieldset{border:0;margin:0 0 12px;padding:0;min-width:0}
.dsh-calendar_availabilityFieldset legend{padding:0 0 5px;color:var(--dsw-alias-label-secondary);font-size:12px}
.dsh-calendar_slotGrid{display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 218px), 1fr));gap:8px;margin:10px 0;padding:0;list-style:none}
.dsh-calendar_slotCard{display:grid;gap:8px;padding:10px;border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-base)}
.dsh-calendar_slotRange{color:var(--dsw-alias-label-secondary);font-size:11px}
.dsh-calendar_copyRow{display:flex;align-items:center;flex-wrap:wrap;gap:6px 8px}
.dsh-calendar_copyStatus{color:var(--dsw-alias-state-success-primary);font-size:11.5px;opacity:1}
.dsh-calendar_copyStatus:empty{opacity:0}
.dsh-calendar_tourTrigger{font-weight:600}
.dsh-calendar_tourLayer{--tour-accent:var(--dsw-alias-state-business-primary, #4176e6);--tour-bg:var(--dsw-alias-bg-overlay, var(--dsw-alias-bg-base, #ffffff));--tour-ink:var(--dsw-alias-label-primary, #1b2230);--tour-muted:var(--dsw-alias-label-secondary, #5b667a);--tour-border:var(--dsw-alias-border-l2, #d8e0ec);--tour-radius:var(--dsw-radius-md, 12px);position:fixed;inset:0;width:100%;height:100%;max-width:none;max-height:none;margin:0;padding:0;border:0;background:transparent;overflow:visible;pointer-events:none;z-index:2147483000;color:var(--tour-ink);font:13px/1.55 var(--dsh-font-body, var(--ds-font-family-text, system-ui, -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif))}
.dsh-calendar_tourLayer[popover]:is(:popover-open, .\\:popover-open){display:block}
.dsh-calendar_tourLayer[data-dsh-style="pixel8bit"]{--tour-radius:0px}
.dsh-calendar_tourSpotlight{position:fixed;pointer-events:none;border-radius:calc(var(--tour-radius) * 0.75 + 2px);box-shadow:0 0 0 2px var(--tour-accent),
    0 0 0 5px color-mix(in oklab, var(--tour-accent) 22%, transparent),
    0 0 0 9999px rgba(15, 23, 42, 0.26)}
.dsh-calendar_tourBackdropFallback{position:fixed;inset:0;pointer-events:none;background:rgba(15, 23, 42, 0.24)}
.dsh-calendar_tourCard{position:fixed;inset:auto;margin:0;width:min(324px, calc(100dvw - 24px));max-block-size:calc(100dvh - 24px);padding:13px 15px 12px;border:1px solid var(--tour-border);border-radius:var(--tour-radius);background:var(--tour-bg);color:var(--tour-ink);box-shadow:var(--dsw-elevation-prominent, 0 16px 40px rgba(15, 23, 42, 0.18));pointer-events:auto;display:flex;flex-direction:column;gap:8px}
.dsh-calendar_tourLayer[data-dsh-style="pixel8bit"] .dsh-calendar_tourCard{border:2px solid #1e2826;border-radius:0px;box-shadow:4px 4px 0px #1e2826}
.dsh-calendar_tourArrow{position:absolute;width:10px;height:10px;background:var(--tour-bg);transform:rotate(45deg);pointer-events:none}
.dsh-calendar_tourCard[data-side="bottom"] > .dsh-calendar_tourArrow{top:-6px;left:calc(var(--arrow-x, 28px) - 5px);border-top:1px solid var(--tour-border);border-left:1px solid var(--tour-border)}
.dsh-calendar_tourCard[data-side="top"] > .dsh-calendar_tourArrow{bottom:-6px;left:calc(var(--arrow-x, 28px) - 5px);border-bottom:1px solid var(--tour-border);border-right:1px solid var(--tour-border)}
.dsh-calendar_tourCard[data-side="right"] > .dsh-calendar_tourArrow{left:-6px;top:calc(var(--arrow-y, 24px) - 5px);border-bottom:1px solid var(--tour-border);border-left:1px solid var(--tour-border)}
.dsh-calendar_tourCard[data-side="left"] > .dsh-calendar_tourArrow{right:-6px;top:calc(var(--arrow-y, 24px) - 5px);border-top:1px solid var(--tour-border);border-right:1px solid var(--tour-border)}
.dsh-calendar_tourCard[data-side="center"] > .dsh-calendar_tourArrow{display:none}
.dsh-calendar_tourHead{display:flex;align-items:center;justify-content:space-between;gap:8px}
.dsh-calendar_tourStepMeta{display:inline-flex;align-items:center;gap:8px}
.dsh-calendar_tourStepBadge{display:inline-flex;align-items:center;padding:1px 7px;border-radius:999px;font-size:11px;font-weight:650;font-variant-numeric:tabular-nums;background:color-mix(in oklab, var(--tour-accent) 14%, transparent);color:var(--tour-accent)}
.dsh-calendar_tourDots{display:inline-flex;align-items:center;gap:4px}
.dsh-calendar_tourDot{width:6px;height:6px;border-radius:999px;background:var(--tour-border)}
.dsh-calendar_tourDot[data-active="true"]{width:14px;background:var(--tour-accent)}
.dsh-calendar_tourSkip{min-block-size:24px;min-inline-size:24px;padding:2px 6px;border:0;border-radius:var(--dsw-radius-sm, 6px);background:transparent;color:var(--tour-muted);font:inherit;font-size:11.5px;cursor:pointer}
.dsh-calendar_tourSkip:hover{color:var(--tour-ink);background:var(--dsw-alias-interactive-bg-hover, rgba(15, 23, 42, 0.05))}
.dsh-calendar_tourTitle{margin:0;font-size:14px;line-height:1.38;font-weight:650}
.dsh-calendar_tourDesc{margin:0;font-size:12.5px;line-height:1.55;color:var(--tour-muted)}
.dsh-calendar_tourInlineAction{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding-block-start:2px}
.dsh-calendar_tourFooter{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-block-start:2px;padding-block-start:8px;border-block-start:0.5px solid var(--tour-border)}
.dsh-calendar_tourNav{display:inline-flex;align-items:center;gap:6px;margin-inline-start:auto}
@media (pointer: coarse){.dsh-calendar_tourSkip{min-block-size:32px;padding:4px 10px}}
.dshc-import-actions{display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin-block-start:10px}
.dshc-import-rows{display:grid;min-width:0;margin-block:10px;border-block-start:0.5px solid var(--dsw-alias-border-l2)}
.dshc-import-row{padding:9px 0;border-block-end:0.5px solid var(--dsw-alias-border-l2);overflow-wrap:anywhere}
.dshc-import-row p{margin:2px 0 0;font-size:12px}
.dshc-import-pick{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:5px 10px}
.dshc-import-warning{color:var(--dsw-alias-state-warn-label)}
.dsh-calendar_importText{font-family:var(--dsh-font-mono, var(--ds-font-family-code, ui-monospace, monospace))}
.dshc-fab{position:fixed;inset-inline-end:18px;bottom:88px;z-index:55;display:grid;place-items:center;width:36px;height:36px;padding:0;border:0;border-radius:50%;box-shadow:var(--dsw-elevation-prominent);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);cursor:pointer}
.dshc-fab[aria-expanded="true"]{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-button-primary-ink, var(--dsw-alias-bg-base))}
.dshc-float{position:fixed;inset-inline-end:18px;bottom:136px;z-index:56;width:min(760px, calc(100vw - 36px));max-height:min(calc(100dvh - 155px), 720px);overflow:auto;border:0;border-radius:var(--dsw-radius-panel);box-shadow:var(--dsw-elevation-prominent);background:var(--dsw-alias-bg-base)}
.dsh-calendar_layoutFloating{--calendar-rail-gap:10px;background:var(--dsw-alias-bg-base);background-image:radial-gradient(at 8% 12%, color-mix(in srgb, var(--dsw-alias-accent) 22%, transparent) 0, transparent 48%),
    radial-gradient(at 92% 88%, var(--dsw-alias-calendar-island-tint) 0, transparent 50%)}
.dsh-calendar_layoutFloating .dsh-calendar_topbar,
.dsh-calendar_layoutFloating .dsh-calendar_rail,
.dsh-calendar_layoutFloating .dsh-calendar_scheduleMain{border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-panel);background:var(--dsw-alias-calendar-island-surface);backdrop-filter:blur(24px) saturate(1.6)}
.dsh-calendar_layoutFloating .dsh-calendar_topbar{margin:10px 10px 0;background:color-mix(in srgb, var(--dsw-alias-bg-layer-1) 82%, transparent)}
.dsh-calendar_layoutFloating .dsh-calendar_workspacePanel{padding:10px}
.dsh-calendar_layoutFloating .dsh-calendar_railHandle{background:transparent}
.dsh-calendar_layoutFloating .dsh-calendar_scheduleMain{overflow:hidden}
.dsh-calendar_layoutSpotlight .dsh-calendar_topbar{background:linear-gradient(90deg, color-mix(in srgb, var(--dsw-alias-accent) 14%, var(--dsw-alias-bg-base)), var(--dsw-alias-bg-base) 45%)}
.dsh-calendar_layoutSpotlight .dsh-calendar_calendarToolbar{background:var(--dsw-alias-bg-layer-1)}
.dsh-calendar_layoutSpotlight :is(.dsh-calendar_card, .dsh-calendar_slotCard, .dsh-calendar_miniCalendar){background:linear-gradient(180deg, color-mix(in srgb, var(--dsw-alias-bg-layer-2) 65%, var(--dsw-alias-bg-base)), var(--dsw-alias-bg-layer-1))}
@media (hover: hover){.dshc-root :is(.dshc-chip, .dshc-row, .dsh-calendar_card, .dsh-calendar_slotCard, .dsh-calendar_miniCalendar){position:relative}.dshc-root :is(.dshc-slot, .dshc-chip, .dshc-row, .dsh-calendar_card, .dsh-calendar_slotCard, .dsh-calendar_miniCalendar)::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:radial-gradient(
      260px circle at var(--calendar-spotlight-x, -999px) var(--calendar-spotlight-y, -999px),
      color-mix(in srgb, var(--dsw-alias-accent, var(--dsw-alias-state-business-primary, #4176e6)) 12%, transparent),
      transparent 70%
    );opacity:0}.dshc-root :is(.dshc-slot, .dshc-chip, .dshc-row, .dsh-calendar_card, .dsh-calendar_slotCard, .dsh-calendar_miniCalendar):hover::after{opacity:1}}
@media (hover: hover) and (prefers-reduced-motion: no-preference){.dshc-root :is(.dshc-slot, .dshc-chip, .dshc-row, .dsh-calendar_card, .dsh-calendar_slotCard, .dsh-calendar_miniCalendar)::after{transition:opacity 0.25s ease}.dshc-root:not([data-dsh-style="pixel8bit"]) .dshc-chip:hover{translate:1px -0.5px}.dshc-root:not([data-dsh-style="pixel8bit"]) .dshc-slot:not(.dsh-calendar_dragging):not(.dshc-ghost):hover{box-shadow:var(--dsh-card-hover-shadow, 0 4px 12px rgba(15, 23, 42, 0.08))}}
.dshc-root[data-dsh-style="pixel8bit"] .dsh-calendar_hourSlot{border:0 !important;border-block-end:1px dashed var(--dsw-alias-border-l1) !important;box-shadow:none !important;translate:none !important}
.dshc-root[data-dsh-style="pixel8bit"] .dsh-calendar_miniDay:not([aria-pressed="true"]){border:1px solid transparent !important;box-shadow:none !important}
.dshc-root[data-dsh-style="pixel8bit"] .dsh-calendar_paletteChoices .dshc-btn.dsh-calendar_paletteSwatch{border:1px solid #1e2826;box-shadow:none}
@media (prefers-reduced-motion: no-preference){.dshc-float,
  .dshc-undo{opacity:1;translate:0px 0px;transition:opacity 180ms var(--dsh-ease-out, ease-out),
      translate 180ms var(--dsh-ease-out, ease-out)}@starting-style{.dshc-float,
    .dshc-undo{opacity:0;translate:0px 6px}}}
.dsh-calendar_focusRibbon{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;padding:6px 12px;border-block-end:0.5px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);min-width:0}
.dsh-calendar_focusDatePill,
.dsh-calendar_focusNextPill,
.dsh-calendar_focusConflictPill,
.dsh-calendar_focusQuickNew{display:inline-flex;align-items:center;gap:6px;min-height:26px;padding:2px 9px;border-radius:999px;border:0.5px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font:500 11.5px/1.3 var(--dsh-font-body, var(--ds-font-family-text, system-ui, sans-serif));white-space:nowrap}
.dsh-calendar_focusDatePill,
.dsh-calendar_focusNextPill,
.dsh-calendar_focusQuickNew,
button.dsh-calendar_focusConflictPill{cursor:pointer}
.dsh-calendar_focusDatePill:hover,
.dsh-calendar_focusNextPill:hover{border-color:var(--dsw-alias-state-business-primary);background:var(--dsw-alias-interactive-bg-hover)}
.dsh-calendar_focusDot{width:7px;height:7px;border-radius:50%;background:var(--dsw-alias-state-business-primary);flex:none}
.dsh-calendar_focusDateLabel{font-weight:700;color:var(--dsw-alias-state-business-primary)}
.dsh-calendar_focusDateValue{font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-secondary)}
.dsh-calendar_focusNextPill{max-width:min(360px, 100%);min-width:0}
.dsh-calendar_focusNextTag{padding:1px 6px;border-radius:999px;background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 13%, transparent);color:var(--dsw-alias-state-business-primary);font-size:10.5px;font-weight:700;flex:none}
.dsh-calendar_focusNextTitle{overflow:hidden;text-overflow:ellipsis;font-weight:600}
.dsh-calendar_focusCountdown{font-family:var(--dsh-font-mono, ui-monospace, monospace);font-variant-numeric:tabular-nums;font-size:10.5px;color:var(--dsw-alias-label-secondary);flex:none}
.dsh-calendar_focusClearPill{font-size:11.5px;color:var(--dsw-alias-label-secondary);padding:2px 6px}
.dsh-calendar_focusRight{display:inline-flex;align-items:center;gap:6px;margin-inline-start:auto;flex-wrap:wrap}
.dsh-calendar_focusConflictPill{color:var(--dsw-alias-state-success-primary, #0f766e);background:var(--dsw-alias-state-success-tertiary, rgba(15, 118, 110, 0.1));border-color:transparent}
.dsh-calendar_focusConflictPill.dsh-calendar_warn{color:var(--dsw-alias-state-warn-label, #b45309);background:var(--dsw-alias-state-warn-tertiary, rgba(180, 83, 9, 0.1))}
.dsh-calendar_focusQuickNew{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-button-primary-ink, var(--dsw-alias-bg-base));border-color:transparent;font-weight:600}
.dsh-calendar_focusQuickNew:disabled{opacity:0.45;cursor:not-allowed}
.dsh-calendar_layoutCards{--calendar-rail-gap:10px}
.dsh-calendar_layoutCards :is(.dsh-calendar_calendarSurface, .dsh-calendar_workspacePage){background:var(--dsw-alias-bg-layer-2)}
.dsh-calendar_layoutCards .dsh-calendar_rail{margin:8px 0 8px 8px;border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-panel, 12px);overflow:hidden}
.dsh-calendar_layoutCards .dsh-calendar_scheduleMain{margin:8px 8px 8px 0;border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-panel, 12px);overflow:hidden;background:var(--dsw-alias-bg-base)}
.dsh-calendar_layoutCards .dsh-calendar_focusRibbon{margin:8px 8px 0;border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-lg, 10px)}
.dsh-calendar_layoutCards .dsh-calendar_calendarSurface{padding:8px}
.dsh-calendar_layoutCards .dshc-grid{gap:5px}
.dsh-calendar_layoutCards .dshc-grid > .dshc-cell{border:0.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-md);background:var(--dsw-alias-bg-base)}
.dsh-calendar_layoutCards :is(.dshc-slot, .dsh-calendar_card, .dsh-calendar_slotCard){border-radius:var(--dsw-radius-lg)}
@media (prefers-reduced-motion: no-preference){.dsh-calendar_tourSpotlight{transition:top 0.24s cubic-bezier(0.22, 1, 0.36, 1),
      left 0.24s cubic-bezier(0.22, 1, 0.36, 1),
      width 0.24s cubic-bezier(0.22, 1, 0.36, 1),
      height 0.24s cubic-bezier(0.22, 1, 0.36, 1)}.dsh-calendar_tourCard{transition:top 0.22s cubic-bezier(0.22, 1, 0.36, 1), left 0.22s cubic-bezier(0.22, 1, 0.36, 1)}.dsh-calendar_tourDot{transition:width 0.18s ease, background-color 0.18s ease}.dsh-calendar_copyStatus{transition:opacity 150ms ease-out}.dshc-root[data-main="true"] .dsh-calendar_workspacePage{animation:dsh-calendar_calendarPageIn 150ms ease-out both}@keyframes dsh-calendar_calendarPageIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}}
@container (max-width: 830px){.dsh-calendar_schedule:not([data-resizable]){grid-template-columns:194px minmax(0, 1fr)}.dsh-calendar_zone{display:none}}
@container (max-width: 620px){.dshc-title{display:none}.dshc-chip .t{display:none}.dsh-calendar_miniCalendar{display:none}.dshc-toolbar{gap:6px}.dsh-calendar_schedule{display:flex;flex-direction:column;overflow:auto}.dsh-calendar_rail{flex:none;border-inline-end:0;border-block-end:0.5px solid var(--dsw-alias-border-l2)}.dsh-calendar_railHandle{display:none}.dsh-calendar_railScroll{display:grid;grid-template-columns:minmax(0, 1fr);overflow:visible;gap:12px}.dsh-calendar_railScroll > *{min-width:0}.dsh-calendar_calendarSource .dshc-check > span{white-space:normal;overflow-wrap:anywhere}.dsh-calendar_railSection{margin-block-start:0}.dsh-calendar_scheduleMain, .dsh-calendar_calendarSurface, .dsh-calendar_calendarSurface > [role="tabpanel"], .dsh-calendar_weekView{flex:none}.dsh-calendar_calendarSurface{overflow:visible}.dshc-root[data-main="true"] .dshc-week{flex:none;max-height:440px}.dshc-cell{min-height:82px;padding-inline:3px}.dshc-chip{padding-inline:2px}.dsh-calendar_topbar, .dshc-root[data-main="true"] .dsh-calendar_topbar{padding-inline:8px;gap:6px}.dsh-calendar_topbar > [role="tablist"]{order:3;width:100%;overflow-x:auto}.dsh-calendar_topbar > [role="tablist"] > [role="tab"]{flex:none;padding-inline:6px;font-size:12px;white-space:nowrap}.dsh-calendar_topActions{gap:4px}.dsh-calendar_topbar .dshc-btn.dsh-calendar_commandTrigger{width:28px;padding-inline:0}.dsh-calendar_triggerKey, .dsh-calendar_shortcutHints, .dshc-btn.dsh-calendar_toolbarConflicts{display:none}.dsh-calendar_conflictCard .dshc-btn.dsh-calendar_conflictLink{display:flex}.dsh-calendar_paletteChoices .dshc-btn.dsh-calendar_paletteSwatch{width:17px}.dsh-calendar_layoutFloating .dsh-calendar_workspacePanel{padding:6px}.dsh-calendar_layoutFloating .dsh-calendar_schedule{gap:6px}}
@container (max-width: 420px){.dsh-calendar_workspacePage{padding-inline:10px}.dsh-calendar_card{padding-inline:10px}.dsh-calendar_formGrid{grid-template-columns:minmax(0, 1fr)}.dsh-calendar_railScroll{gap:8px;padding-inline:8px}}
@media (pointer: coarse){.dshc-root .dshc-btn, .dshc-root [role="tab"]{min-height:40px}.dshc-root .dshc-check{min-height:40px}.dshc-row{min-height:48px}.dsh-calendar_shortcutHints, .dsh-calendar_triggerKey{display:none}}
@container (max-width: 620px){.dshc-agenda{padding-inline:8px}.dshc-row{flex-wrap:wrap}.dshc-name, .dshc-meta{white-space:normal;overflow-wrap:anywhere}}`;
// Editable browser entry. Build with node scripts/build-client.mjs.
window.__ModuleLoader__.load({ id: "dsh-calendar", factory: (require) => {
        var module = { exports: {} };
        var exports = module.exports;
        "use strict";
        const React = require("react");
        let calendarHostContext;
        const { useState, useEffect, useMemo, useRef, useId } = React;
        const h = React.createElement;
        /**
 * DeepSeek Harness (>=0.2.2-rc.3) Unified Style Switcher, Layout & Motion Primitives v3
 * Shared across STARDUSTLC666 workbench plugins:
 *   dsh-email, dsh-calendar, dsh-cite, dsh-dream, dsh-code-security,
 *   dsh-rss, dsh-ppt, dsh-remotion, dsh-hyperframes
 *
 * Zero external runtime imports: accepts `React` and optional `require` so this
 * module can be bundled via esbuild IIFE or inlined into classic DSH client
 * scripts without requiring `react` in plugin `node_modules` or triggering
 * eager UI `require()` calls during `window.__ModuleLoader__.load`.
 */

const DSH_STYLE_STORAGE_KEY = 'dsh-stardust:ui-style';
const DSH_STYLE_EVENT = 'dsh-stardust-style';
const DSH_DEFAULT_STYLE = 'harness';

const DSH_FONT_STORAGE_KEY = 'dsh-stardust:ui-font';
const DSH_FONT_EVENT = 'dsh-stardust-font';
const DSH_DEFAULT_FONT = 'arcade';

const DSH_FONTS = Object.freeze([
  Object.freeze({
    id: 'arcade',
    zh: '幼圆等宽（默认）',
    zhShort: '幼圆',
    en: 'YouYuan Mono (Default)',
    enShort: 'YouYuan',
  }),
  Object.freeze({
    id: 'auto',
    zh: '跟随风格专属字',
    zhShort: '专属字',
    en: 'Match Style Font',
    enShort: 'Style Font',
  }),
  Object.freeze({
    id: 'songkai',
    zh: '中宋+楷书',
    zhShort: '中宋楷',
    en: 'Song + Kai',
    enShort: 'Song+Kai',
  }),
  Object.freeze({
    id: 'fangsong',
    zh: '工程仿宋',
    zhShort: '仿宋',
    en: 'Blueprint FangSong',
    enShort: 'FangSong',
  }),
  Object.freeze({
    id: 'poster',
    zh: '重磅画报黑',
    zhShort: '画报黑',
    en: 'Poster Sans',
    enShort: 'Poster',
  }),
  Object.freeze({
    id: 'retro98',
    zh: '千禧新宋',
    zhShort: '新宋98',
    en: 'Retro 98 SimSun',
    enShort: 'Retro 98',
  }),
  Object.freeze({
    id: 'serif',
    zh: '思源书宋',
    zhShort: '书宋',
    en: 'Book Serif',
    enShort: 'Serif',
  }),
  Object.freeze({
    id: 'modern',
    zh: '现代思源黑',
    zhShort: '思源黑',
    en: 'Modern Sans',
    enShort: 'Modern',
  }),
]);

const DSH_STYLES = Object.freeze([
  Object.freeze({
    id: 'harness',
    zh: '原生清透',
    zhShort: '原生',
    en: 'Native Airy',
    enShort: 'Native',
    swatch: '#4176e6',
    surface: '#f8fafc',
  }),
  Object.freeze({
    id: 'cream',
    zh: '米白纸感',
    zhShort: '米白色',
    en: 'Warm Cream',
    enShort: 'Cream',
    swatch: '#9e5829',
    surface: '#faf7f0',
  }),
  Object.freeze({
    id: 'claude',
    zh: 'Claude 暖书卷',
    zhShort: 'Claude风',
    en: 'Claude Warmth',
    enShort: 'Claude',
    swatch: '#c96442',
    surface: '#f5f4ed',
  }),
  Object.freeze({
    id: 'pixel8bit',
    zh: '8-Bit 掌机',
    zhShort: '8-Bit',
    en: 'Bright 8-Bit',
    enShort: '8-Bit',
    swatch: '#2e7d5b',
    surface: '#f4f6e8',
  }),
  Object.freeze({
    id: 'mint',
    zh: '晴空薄荷',
    zhShort: '薄荷',
    en: 'Airy Mint',
    enShort: 'Mint',
    swatch: '#0f766e',
    surface: '#f5fafb',
  }),
  Object.freeze({
    id: 'glass',
    zh: '晴昼琉璃',
    zhShort: '琉璃',
    en: 'Daylight Glass',
    enShort: 'Glass',
    swatch: '#4f6df5',
    surface: '#f3f7ff',
  }),
  Object.freeze({
    id: 'eink',
    zh: '护眼墨水屏',
    zhShort: '墨水屏',
    en: 'E-Ink Paper',
    enShort: 'E-Ink',
    swatch: '#171716',
    surface: '#f2f1ec',
  }),
  Object.freeze({
    id: 'blueprint',
    zh: '工程晒图',
    zhShort: '晒图',
    en: 'Blueprint',
    enShort: 'Blueprint',
    swatch: '#0d3b66',
    surface: '#eaf3fb',
  }),
  Object.freeze({
    id: 'risograph',
    zh: '波普孔版',
    zhShort: '孔版',
    en: 'Riso Zine',
    enShort: 'Riso',
    swatch: '#ff3e7f',
    surface: '#faf6ee',
  }),
  Object.freeze({
    id: 'win98',
    zh: '千禧复古',
    zhShort: '复古98',
    en: 'Retro 98',
    enShort: 'Retro 98',
    swatch: '#1b4f9c',
    surface: '#dcdcdc',
  }),
  Object.freeze({
    id: 'songhui',
    zh: '宋韵朱砂',
    zhShort: '宋韵',
    en: 'Song Xuan',
    enShort: 'Song',
    swatch: '#b83b2a',
    surface: '#f7f3e8',
  }),
  Object.freeze({
    id: 'frutiger',
    zh: '晴空水晶',
    zhShort: '水晶',
    en: 'Aqua Gloss',
    enShort: 'Aqua',
    swatch: '#0ea5e9',
    surface: '#eaf7ff',
  }),
  Object.freeze({
    id: 'gazette',
    zh: '铅字晨报',
    zhShort: '晨报',
    en: 'Gazette',
    enShort: 'Gazette',
    swatch: '#9b1c1c',
    surface: '#f6f3ec',
  }),
]);

const VALID_STYLE_IDS = new Set(DSH_STYLES.map(preset => preset.id));
const VALID_FONT_IDS = new Set(DSH_FONTS.map(preset => preset.id));

function resolveWindow(win) {
  if (win && typeof win === 'object') return win;
  return typeof window !== 'undefined' ? window : null;
}

function resolveReact(explicitReact) {
  if (explicitReact && typeof explicitReact.createElement === 'function') return explicitReact;
  if (typeof globalThis !== 'undefined' && globalThis.React && typeof globalThis.React.createElement === 'function') {
    return globalThis.React;
  }
  return null;
}

function clampNumber(value, min, max) {
  const lo = Number.isFinite(min) ? min : 0;
  const hi = Number.isFinite(max) ? Math.max(lo, max) : lo;
  const num = Number(value);
  if (!Number.isFinite(num)) return lo;
  return Math.min(hi, Math.max(lo, num));
}

function normalizeDshStyle(value) {
  const key = typeof value === 'string' ? value.trim() : '';
  return VALID_STYLE_IDS.has(key) ? key : DSH_DEFAULT_STYLE;
}

function getDshStylePreset(value) {
  const id = normalizeDshStyle(value);
  return DSH_STYLES.find(preset => preset.id === id) || DSH_STYLES[0];
}

function readDshStyle(win) {
  const target = resolveWindow(win);
  if (!target) return DSH_DEFAULT_STYLE;
  try {
    const raw = target.localStorage?.getItem(DSH_STYLE_STORAGE_KEY);
    return normalizeDshStyle(raw);
  } catch {
    return DSH_DEFAULT_STYLE;
  }
}

function normalizeDshFont(value) {
  const key = typeof value === 'string' ? value.trim() : '';
  return VALID_FONT_IDS.has(key) ? key : DSH_DEFAULT_FONT;
}

function getDshFontPreset(value) {
  const id = normalizeDshFont(value);
  return DSH_FONTS.find(preset => preset.id === id) || DSH_FONTS[0];
}

function readDshFont(win) {
  const target = resolveWindow(win);
  if (!target) return DSH_DEFAULT_FONT;
  try {
    const raw = target.localStorage?.getItem(DSH_FONT_STORAGE_KEY);
    return normalizeDshFont(raw);
  } catch {
    return DSH_DEFAULT_FONT;
  }
}

/**
 * Stamps `[data-dsh-style]`, `[data-dsh-font]`, and `[data-window-drag-exclude]` onto
 * any currently open portaled `[role="dialog"]` / `[role="menu"]` surfaces in
 * `document.body` that were synced via `createOverlaySyncRef` or carry
 * `[data-dsh-portal-synced]`, plus `[data-dsh-font]` onto `document.documentElement`.
 */
function syncPortaledOverlays(style, doc, font) {
  const normalized = normalizeDshStyle(style);
  const normalizedFont = normalizeDshFont(font ?? readDshFont());
  const targetDoc = doc || (typeof document !== 'undefined' ? document : null);
  if (!targetDoc) return;
  if (targetDoc.documentElement && typeof targetDoc.documentElement.setAttribute === 'function') {
    targetDoc.documentElement.setAttribute('data-dsh-font', normalizedFont);
  }
  if (typeof targetDoc.querySelectorAll !== 'function') return;
  for (const el of targetDoc.querySelectorAll('[data-dsh-portal-synced]')) {
    el.setAttribute('data-dsh-style', normalized);
    el.setAttribute('data-dsh-font', normalizedFont);
    if (!el.hasAttribute('data-window-drag-exclude')) {
      el.setAttribute('data-window-drag-exclude', '');
    }
  }
}

function syncPortaledFont(font, doc) {
  const normalizedFont = normalizeDshFont(font);
  const targetDoc = doc || (typeof document !== 'undefined' ? document : null);
  if (!targetDoc) return;
  if (targetDoc.documentElement && typeof targetDoc.documentElement.setAttribute === 'function') {
    targetDoc.documentElement.setAttribute('data-dsh-font', normalizedFont);
  }
  if (typeof targetDoc.querySelectorAll !== 'function') return;
  for (const el of targetDoc.querySelectorAll('[data-dsh-portal-synced], [data-dsh-style]')) {
    el.setAttribute('data-dsh-font', normalizedFont);
  }
}

function writeDshStyle(nextStyle, win) {
  const normalized = normalizeDshStyle(nextStyle);
  const target = resolveWindow(win);
  if (target) {
    try {
      target.localStorage?.setItem(DSH_STYLE_STORAGE_KEY, normalized);
    } catch {
      // Restricted storage: keep in-memory + custom event sync working.
    }
    syncPortaledOverlays(normalized, target.document, readDshFont(target));
    if (typeof target.dispatchEvent === 'function') {
      try {
        const CustomEventCtor = target.CustomEvent || (typeof CustomEvent === 'function' ? CustomEvent : null);
        if (CustomEventCtor) {
          target.dispatchEvent(new CustomEventCtor(DSH_STYLE_EVENT, { detail: { style: normalized } }));
        } else if (typeof Event === 'function') {
          const ev = new Event(DSH_STYLE_EVENT);
          ev.detail = { style: normalized };
          target.dispatchEvent(ev);
        }
      } catch {
        // Ignore synthetic event errors in minimal VM environments.
      }
    }
  }
  return normalized;
}

function writeDshFont(nextFont, win) {
  const normalized = normalizeDshFont(nextFont);
  const target = resolveWindow(win);
  if (target) {
    try {
      target.localStorage?.setItem(DSH_FONT_STORAGE_KEY, normalized);
    } catch {
      // Restricted storage: keep in-memory + custom event sync working.
    }
    syncPortaledFont(normalized, target.document);
    if (typeof target.dispatchEvent === 'function') {
      try {
        const CustomEventCtor = target.CustomEvent || (typeof CustomEvent === 'function' ? CustomEvent : null);
        if (CustomEventCtor) {
          target.dispatchEvent(new CustomEventCtor(DSH_FONT_EVENT, { detail: { font: normalized } }));
        } else if (typeof Event === 'function') {
          const ev = new Event(DSH_FONT_EVENT);
          ev.detail = { font: normalized };
          target.dispatchEvent(ev);
        }
      } catch {
        // Ignore synthetic event errors in minimal VM environments.
      }
    }
  }
  return normalized;
}

function subscribeDshStyle(onChange, win) {
  const target = resolveWindow(win);
  if (!target || typeof target.addEventListener !== 'function' || typeof onChange !== 'function') {
    return () => {};
  }
  const onCustom = event => {
    const next = normalizeDshStyle(event?.detail?.style ?? readDshStyle(target));
    syncPortaledOverlays(next, target.document, readDshFont(target));
    onChange(next);
  };
  const onStorage = event => {
    if (event && event.key !== null && event.key !== undefined && event.key !== DSH_STYLE_STORAGE_KEY) {
      return;
    }
    const next = normalizeDshStyle(event?.newValue ?? readDshStyle(target));
    syncPortaledOverlays(next, target.document, readDshFont(target));
    onChange(next);
  };
  target.addEventListener(DSH_STYLE_EVENT, onCustom);
  target.addEventListener('storage', onStorage);
  return () => {
    target.removeEventListener(DSH_STYLE_EVENT, onCustom);
    target.removeEventListener('storage', onStorage);
  };
}

function subscribeDshFont(onChange, win) {
  const target = resolveWindow(win);
  if (!target || typeof target.addEventListener !== 'function' || typeof onChange !== 'function') {
    return () => {};
  }
  const onCustom = event => {
    const next = normalizeDshFont(event?.detail?.font ?? readDshFont(target));
    syncPortaledFont(next, target.document);
    onChange(next);
  };
  const onStorage = event => {
    if (event && event.key !== null && event.key !== undefined && event.key !== DSH_FONT_STORAGE_KEY) {
      return;
    }
    const next = normalizeDshFont(event?.newValue ?? readDshFont(target));
    syncPortaledFont(next, target.document);
    onChange(next);
  };
  target.addEventListener(DSH_FONT_EVENT, onCustom);
  target.addEventListener('storage', onStorage);
  return () => {
    target.removeEventListener(DSH_FONT_EVENT, onCustom);
    target.removeEventListener('storage', onStorage);
  };
}

/**
 * React hook returning `[style, setStyle]`, synced across plugins, tabs, and
 * portaled dialogs via `localStorage['dsh-stardust:ui-style']` + `dsh-stardust-style`.
 * Safe in minimal VM registration tests where `React.useState` may be absent.
 */
function useDshStyle(React, win) {
  if (!React || typeof React.useState !== 'function') {
    return [readDshStyle(win), next => writeDshStyle(next, win)];
  }
  const [style, setStyleState] = React.useState(() => readDshStyle(win));
  if (typeof React.useEffect === 'function') {
    React.useEffect(() => {
      const current = readDshStyle(win);
      setStyleState(prev => (prev === current ? prev : current));
      syncPortaledOverlays(current, resolveWindow(win)?.document, readDshFont(win));
      return subscribeDshStyle(next => {
        setStyleState(prev => (prev === next ? prev : next));
      }, win);
    }, [win]);
  }
  const setStyle = next => {
    const resolved = typeof next === 'function' ? next(style) : next;
    const applied = writeDshStyle(resolved, win);
    setStyleState(applied);
    return applied;
  };
  return [style, setStyle];
}

/**
 * React hook returning `[font, setFont]`, synced via `localStorage['dsh-stardust:ui-font']`
 * + `dsh-stardust-font` and applied via `[data-dsh-font]`.
 */
function useDshFont(React, win) {
  if (!React || typeof React.useState !== 'function') {
    return [readDshFont(win), next => writeDshFont(next, win)];
  }
  const [font, setFontState] = React.useState(() => readDshFont(win));
  if (typeof React.useEffect === 'function') {
    React.useEffect(() => {
      const current = readDshFont(win);
      setFontState(prev => (prev === current ? prev : current));
      syncPortaledFont(current, resolveWindow(win)?.document);
      return subscribeDshFont(next => {
        setFontState(prev => (prev === next ? prev : next));
      }, win);
    }, [win]);
  }
  const setFont = next => {
    const resolved = typeof next === 'function' ? next(font) : next;
    const applied = writeDshFont(resolved, win);
    setFontState(applied);
    return applied;
  };
  return [font, setFont];
}

/**
 * Callback ref for elements rendered inside host `@deepseek-ai/dsh-client-ui-primitives`
 * `Modal` or `Menu` portals (`createPortal(..., document.body)`).
 * Host `Modal` and `Menu` do not spread arbitrary `data-*` props onto their outer
 * `<div role="dialog">` / `<div role="menu">` wrapper, so attaching this ref to an
 * inner header/body wrapper promotes `data-dsh-style`, `data-dsh-font`, and
 * `data-window-drag-exclude` onto the portaled overlay frame itself.
 */
function createOverlaySyncRef(style, font) {
  const normalized = normalizeDshStyle(style);
  const normalizedFont = normalizeDshFont(font ?? readDshFont());
  return node => {
    if (!node || typeof node.setAttribute !== 'function') return;
    node.setAttribute('data-dsh-style', normalized);
    node.setAttribute('data-dsh-font', normalizedFont);
    node.setAttribute('data-window-drag-exclude', '');
    node.setAttribute('data-dsh-portal-synced', 'true');
    if (typeof node.closest === 'function') {
      const overlay = node.closest('[role="dialog"], [role="alertdialog"], [role="menu"], dialog');
      if (overlay) {
        overlay.setAttribute('data-dsh-style', normalized);
        overlay.setAttribute('data-dsh-font', normalizedFont);
        overlay.setAttribute('data-window-drag-exclude', '');
        overlay.setAttribute('data-dsh-portal-synced', 'true');
      }
    }
  };
}

/**
 * Shared crisp 24x24 stroke icons for workbench headers, buttons, and micro-animations.
 */
const DSH_ICON_PATHS = Object.freeze({
  mail: ['M3 5h18v14H3z', 'm3 6 9 7 9-7'],
  inbox: ['M4 13 6 5h12l2 8v6H4z', 'M4 13h5l1 3h4l1-3h5'],
  send: ['m22 2-7 20-4-9-9-4Z', 'M22 2 11 13'],
  search: ['M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z', 'm16 16 5 5'],
  plus: ['M12 5v14M5 12h14'],
  refresh: ['M20 7a9 9 0 1 0 1 8', 'M20 2v5h-5'],
  close: ['m6 6 12 12M18 6 6 18'],
  left: ['m14 5-7 7 7 7'],
  right: ['m10 5 7 7-7 7'],
  down: ['m5 9 7 7 7-7'],
  download: ['M12 3v12m-5-5 5 5 5-5', 'M4 16v5h16v-5'],
  file: ['M4 3h10l6 6v12H4z', 'M14 3v6h6M8 13h8M8 17h6'],
  folder: ['M3 5h7l2 3h9v12H3z'],
  edit: ['m15 4 5 5-10 10-6 1 1-6Z', 'm13 6 5 5'],
  trash: ['M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7'],
  info: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M12 11v6M12 7h.01'],
  check: ['m5 12 4 4L19 6'],
  star: ['m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z'],
  reply: ['m9 5-7 7 7 7v-5h6c3 0 5 2 6 5 0-8-4-11-12-11Z'],
  lock: ['M5 10h14v11H5z', 'M8 10V7a4 4 0 0 1 8 0v3M12 14v3'],
  clip: ['m8 13 6-6a2.5 2.5 0 0 1 3.5 3.5l-7 7a4 4 0 0 1-5.7-5.7l8-8a5 5 0 0 1 7.1 7.1l-8 8'],
  clock: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M12 6v6l4 2'],
  image: ['M3 4h18v16H3z', 'm3 17 6-6 5 5 2-2 5 5M16 8h.01'],
  copy: ['M9 9h10v11H9z', 'M5 15H4V4h10v1'],
  external: ['M14 4h6v6', 'M10 14 20 4', 'M18 13v6H5V6h6'],
  link: ['M10 13a5 5 0 0 0 7.1 0l2.8-2.8a5 5 0 0 0-7.1-7.1L11 4.9', 'M14 11a5 5 0 0 0-7.1 0l-2.8 2.8a5 5 0 0 0 7.1 7.1L13 19.1'],
  play: ['m7 5 12 7-12 7Z'],
  palette: ['M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0-5H12a2 2 0 0 1 0-4h4a5 5 0 0 0 5-5c0-2.2-4-4-9-4Z', 'M7.5 10.5h.01M10.5 7.5h.01M14.5 7.5h.01'],
  sparkles: ['m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8Z', 'M19 15v4M17 17h4'],
  calendar: ['M4 6h16v14H4z', 'M8 3v4M16 3v4M4 10h16'],
  shield: ['M12 3 5 6v6c0 5 3.4 8.3 7 9 3.6-.7 7-4 7-9V6Z'],
  rss: ['M5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', 'M4 11a9 9 0 0 1 9 9', 'M4 5a15 15 0 0 1 15 15'],
  grip: ['M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01'],
});

function renderDshIcon(React, { name = 'file', size = 16, paths = DSH_ICON_PATHS, ...props } = {}) {
  const h = React.createElement;
  const segments = paths[name] || DSH_ICON_PATHS[name] || DSH_ICON_PATHS.file;
  return h(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.65,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      focusable: 'false',
      'data-dsh-icon': name,
      ...props,
    },
    segments.map((d, index) => h('path', { key: index, d })),
  );
}

/**
 * Measures the active `[role="tab"][aria-selected="true"]` inside a `[role="tablist"]`
 * and drives CSS variables `--dsh-tab-x` / `--dsh-tab-w` for `.dsh-tab-indicator`.
 * Falls back cleanly to static `::after` border underline when layout is unavailable (jsdom)
 * or under `@media (forced-colors: active)`.
 */
function useSlidingTabIndicator(React, activeValue, options = {}) {
  const tablistRef = typeof React?.useRef === 'function' ? React.useRef(null) : { current: null };
  const [metrics, setMetrics] = typeof React?.useState === 'function'
    ? React.useState({ x: 0, width: 0, ready: false })
    : [{ x: 0, width: 0, ready: false }, () => {}];

  const syncIndicator = () => {
    const list = tablistRef.current;
    if (!list || typeof list.querySelector !== 'function') return;
    const activeTab = list.querySelector('[role="tab"][aria-selected="true"]');
    if (!activeTab) {
      list.setAttribute?.('data-indicator-ready', 'false');
      setMetrics(prev => (prev.ready ? { x: 0, width: 0, ready: false } : prev));
      return;
    }
    let x = typeof activeTab.offsetLeft === 'number' ? activeTab.offsetLeft : 0;
    let width = typeof activeTab.offsetWidth === 'number' ? activeTab.offsetWidth : 0;
    if (!width && typeof activeTab.getBoundingClientRect === 'function' && typeof list.getBoundingClientRect === 'function') {
      const tabRect = activeTab.getBoundingClientRect();
      const listRect = list.getBoundingClientRect();
      if (tabRect && listRect && tabRect.width > 0) {
        width = tabRect.width;
        x = tabRect.left - listRect.left + (list.scrollLeft || 0);
      }
    }
    const ready = width > 0;
    if (list.style && typeof list.style.setProperty === 'function') {
      list.style.setProperty('--dsh-tab-x', `${Math.round(x)}px`);
      list.style.setProperty('--dsh-tab-w', `${Math.round(width)}px`);
    }
    list.setAttribute?.('data-indicator-ready', ready ? 'true' : 'false');
    setMetrics(prev => (
      prev.x === Math.round(x) && prev.width === Math.round(width) && prev.ready === ready
        ? prev
        : { x: Math.round(x), width: Math.round(width), ready }
    ));
  };

  const effectHook = typeof React?.useLayoutEffect === 'function'
    ? React.useLayoutEffect
    : (typeof React?.useEffect === 'function' ? React.useEffect : null);

  if (effectHook) {
    const deps = Array.isArray(options?.deps) ? [activeValue, ...options.deps] : [activeValue];
    effectHook(() => {
      syncIndicator();
      const list = tablistRef.current;
      const win = resolveWindow(options?.win);
      let ro = null;
      if (list && typeof win?.ResizeObserver === 'function') {
        try {
          ro = new win.ResizeObserver(() => syncIndicator());
          ro.observe(list);
        } catch {
          ro = null;
        }
      }
      if (win && typeof win.addEventListener === 'function') {
        win.addEventListener('resize', syncIndicator);
      }
      return () => {
        ro?.disconnect?.();
        if (win && typeof win.removeEventListener === 'function') {
          win.removeEventListener('resize', syncIndicator);
        }
      };
    }, deps);
  }

  const indicatorStyle = {
    '--dsh-tab-x': `${metrics.x}px`,
    '--dsh-tab-w': `${metrics.width}px`,
  };

  return {
    tablistRef,
    ready: metrics.ready,
    indicatorStyle,
    tablistProps: {
      ref: tablistRef,
      'data-dsh-tablist': '',
      'data-indicator-ready': metrics.ready ? 'true' : 'false',
    },
    indicatorProps: {
      className: 'dsh-tab-indicator',
      'aria-hidden': 'true',
      style: indicatorStyle,
    },
    syncIndicator,
  };
}

/**
 * Resizable split-pane hook with `localStorage` persistence, clamping, reset,
 * and ready-to-spread `resizerProps` for `DshSplitResizer`.
 */
function useResizableSplit(
  React,
  { key, initial = 320, min = 220, max = 560, orientation = 'vertical', reverse = false, win } = {},
) {
  const clampedInitial = clampNumber(initial, min, max);
  const readStored = () => {
    const target = resolveWindow(win);
    if (!key || !target) return clampedInitial;
    try {
      const raw = target.localStorage?.getItem(key);
      if (raw == null || raw === '') return clampedInitial;
      const parsed = Number(raw);
      return Number.isFinite(parsed) ? clampNumber(parsed, min, max) : clampedInitial;
    } catch {
      return clampedInitial;
    }
  };

  const writeStored = nextSize => {
    const clamped = Math.round(clampNumber(nextSize, min, max));
    const target = resolveWindow(win);
    if (key && target) {
      try {
        target.localStorage?.setItem(key, String(clamped));
      } catch {
        // Ignore restricted storage errors.
      }
    }
    return clamped;
  };

  const hasHooks = Boolean(React && typeof React.useState === 'function');
  const [size, setSizeState] = hasHooks ? React.useState(() => readStored()) : [readStored(), () => {}];
  const [isDragging, setIsDragging] = hasHooks ? React.useState(false) : [false, () => {}];

  const setSize = next => {
    const resolved = typeof next === 'function' ? next(size) : next;
    const applied = writeStored(resolved);
    setSizeState(applied);
    return applied;
  };

  const reset = () => {
    const applied = writeStored(clampedInitial);
    setSizeState(applied);
    return applied;
  };

  return {
    size,
    width: size,
    setSize,
    reset,
    isDragging,
    setIsDragging,
    paneStyle: { '--dsh-split-size': `${size}px` },
    resizerProps: {
      value: size,
      initial: clampedInitial,
      min,
      max,
      orientation,
      reverse,
      onChange: setSize,
      onReset: reset,
      onDraggingChange: setIsDragging,
    },
  };
}

function renderDshSplitResizer(
  React,
  {
    value = 320,
    initial,
    min = 220,
    max = 560,
    orientation = 'vertical',
    reverse = false,
    step = 16,
    label = 'Resize pane',
    onChange,
    onReset,
    onDraggingChange,
    className,
    style,
    ...rest
  } = {},
) {
  const R = resolveReact(React);
  if (!R) return null;
  const h = R.createElement;
  const dragRef = typeof R.useRef === 'function' ? R.useRef(null) : { current: null };
  const [dragging, setDragging] = typeof R.useState === 'function' ? R.useState(false) : [false, () => {}];

  const isHorizontal = orientation === 'horizontal';
  const clampedValue = Math.round(clampNumber(value, min, max));

  const setDragActive = active => {
    setDragging(active);
    onDraggingChange?.(active);
  };

  const cleanupWindowListeners = () => {
    const drag = dragRef.current;
    if (drag?.cleanup) {
      drag.cleanup();
    }
    dragRef.current = null;
  };

  if (typeof R.useEffect === 'function') {
    R.useEffect(() => cleanupWindowListeners, []);
  }

  const updateFromClientPos = (clientX, clientY) => {
    const drag = dragRef.current;
    if (!drag) return;
    const rawDelta = isHorizontal ? (clientY - drag.startY) : (clientX - drag.startX);
    const delta = reverse ? -rawDelta : rawDelta;
    const next = Math.round(clampNumber(drag.startValue + delta, min, max));
    onChange?.(next);
  };

  const handlePointerDown = event => {
    if (event?.button !== undefined && event.button !== 0) return;
    event?.preventDefault?.();
    const targetEl = event?.currentTarget;
    const pointerId = event?.pointerId;
    const startX = Number(event?.clientX ?? 0);
    const startY = Number(event?.clientY ?? 0);

    cleanupWindowListeners();

    let captured = false;
    if (targetEl && typeof targetEl.setPointerCapture === 'function' && pointerId !== undefined) {
      try {
        targetEl.setPointerCapture(pointerId);
        captured = true;
      } catch {
        captured = false;
      }
    }

    const win = resolveWindow();
    let cleanup = null;
    if (!captured && win && typeof win.addEventListener === 'function') {
      const onWinMove = moveEvent => updateFromClientPos(Number(moveEvent.clientX ?? 0), Number(moveEvent.clientY ?? 0));
      const onWinUp = () => {
        cleanupWindowListeners();
        setDragActive(false);
      };
      win.addEventListener('pointermove', onWinMove);
      win.addEventListener('mousemove', onWinMove);
      win.addEventListener('pointerup', onWinUp);
      win.addEventListener('mouseup', onWinUp);
      win.addEventListener('pointercancel', onWinUp);
      cleanup = () => {
        win.removeEventListener('pointermove', onWinMove);
        win.removeEventListener('mousemove', onWinMove);
        win.removeEventListener('pointerup', onWinUp);
        win.removeEventListener('mouseup', onWinUp);
        win.removeEventListener('pointercancel', onWinUp);
      };
    }

    dragRef.current = { startX, startY, startValue: clampedValue, pointerId, captured, cleanup };
    setDragActive(true);
  };

  const handlePointerMove = event => {
    if (!dragRef.current) return;
    updateFromClientPos(Number(event?.clientX ?? 0), Number(event?.clientY ?? 0));
  };

  const handlePointerEnd = event => {
    const drag = dragRef.current;
    if (!drag) return;
    if (drag.captured && event?.currentTarget && typeof event.currentTarget.releasePointerCapture === 'function' && drag.pointerId !== undefined) {
      try {
        event.currentTarget.releasePointerCapture(drag.pointerId);
      } catch {
        // Ignore release errors when pointer already detached.
      }
    }
    cleanupWindowListeners();
    setDragActive(false);
  };

  const handleKeyDown = event => {
    const key = event?.key;
    const deltaStep = event?.shiftKey ? step * 2 : step;
    const dir = reverse ? -1 : 1;
    let next = null;
    if ((!isHorizontal && key === 'ArrowLeft') || (isHorizontal && key === 'ArrowUp')) {
      next = clampNumber(clampedValue - deltaStep * dir, min, max);
    } else if ((!isHorizontal && key === 'ArrowRight') || (isHorizontal && key === 'ArrowDown')) {
      next = clampNumber(clampedValue + deltaStep * dir, min, max);
    } else if (key === 'Home') {
      next = min;
    } else if (key === 'End') {
      next = max;
    }
    if (next !== null) {
      event?.preventDefault?.();
      onChange?.(Math.round(next));
    }
  };

  const handleDoubleClick = () => {
    if (typeof onReset === 'function') {
      onReset();
    } else if (initial !== undefined) {
      onChange?.(Math.round(clampNumber(initial, min, max)));
    }
  };

  return h('div', {
    ...rest,
    role: 'separator',
    tabIndex: 0,
    'aria-orientation': orientation,
    'aria-label': label,
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': clampedValue,
    'data-dsh-resizer': '',
    'data-dragging': dragging ? 'true' : 'false',
    'data-window-drag-exclude': '',
    className: ['dsh-split-resizer', className].filter(Boolean).join(' '),
    style,
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerEnd,
    onPointerCancel: handlePointerEnd,
    onLostPointerCapture: handlePointerEnd,
    onKeyDown: handleKeyDown,
    onDoubleClick: handleDoubleClick,
  });
}

function createSplitResizerComponent(React) {
  return function DshSplitResizerWithReact(props) {
    return renderDshSplitResizer(React, props);
  };
}

function DshSplitResizer(props = {}) {
  const { React: explicitReact, ...rest } = props;
  return renderDshSplitResizer(resolveReact(explicitReact), rest);
}

/**
 * Theme-tinted shimmer skeleton helper (`DshSkeleton` / `createSkeletonComponent` / `renderDshSkeleton`).
 * Honors `prefers-reduced-motion: reduce` and `eink` zero-distraction mode automatically via CSS.
 */
function renderDshSkeleton(
  React,
  {
    variant = 'text',
    lines = 3,
    width,
    height,
    radius,
    animated = true,
    label,
    className,
    style,
    ...rest
  } = {},
) {
  const R = resolveReact(React);
  if (!R) return null;
  const h = R.createElement;
  const a11yProps = label
    ? { role: 'status', 'aria-busy': 'true', 'aria-label': label }
    : { 'aria-hidden': 'true' };

  const baseBar = (barWidth, barHeight, key) =>
    h('span', {
      key,
      className: 'dsh-skeleton',
      'data-dsh-skeleton': variant,
      'data-animated': animated ? 'true' : 'false',
      style: {
        width: barWidth ?? width,
        height: barHeight ?? height,
        borderRadius: radius,
      },
    });

  if (variant === 'circle') {
    return h('span', {
      ...a11yProps,
      ...rest,
      className: ['dsh-skeleton', 'dsh-skeleton-circle', className].filter(Boolean).join(' '),
      'data-dsh-skeleton': 'circle',
      'data-animated': animated ? 'true' : 'false',
      style: { width, height, ...style },
    });
  }

  if (variant === 'rect') {
    return h('span', {
      ...a11yProps,
      ...rest,
      className: ['dsh-skeleton', className].filter(Boolean).join(' '),
      'data-dsh-skeleton': 'rect',
      'data-animated': animated ? 'true' : 'false',
      style: { width, height: height ?? '80px', borderRadius: radius, ...style },
    });
  }

  if (variant === 'row') {
    return h(
      'div',
      {
        ...a11yProps,
        ...rest,
        className: ['dsh-skeleton-row', className].filter(Boolean).join(' '),
        style,
      },
      h('span', {
        className: 'dsh-skeleton dsh-skeleton-circle',
        'data-dsh-skeleton': 'circle',
        'data-animated': animated ? 'true' : 'false',
      }),
      h(
        'div',
        { className: 'dsh-skeleton-group' },
        baseBar('58%', '12px', 'r1'),
        baseBar('84%', '10px', 'r2'),
      ),
    );
  }

  if (variant === 'card') {
    return h(
      'div',
      {
        ...a11yProps,
        ...rest,
        className: ['dsh-skeleton-card', className].filter(Boolean).join(' '),
        style,
      },
      baseBar('46%', '14px', 'c1'),
      baseBar('100%', '11px', 'c2'),
      baseBar('74%', '11px', 'c3'),
    );
  }

  const count = Math.max(1, Math.round(Number(lines) || 1));
  if (count === 1) {
    return h('span', {
      ...a11yProps,
      ...rest,
      className: ['dsh-skeleton', className].filter(Boolean).join(' '),
      'data-dsh-skeleton': 'text',
      'data-animated': animated ? 'true' : 'false',
      style: { width, height, borderRadius: radius, ...style },
    });
  }

  const bars = [];
  for (let i = 0; i < count; i += 1) {
    const isLast = i === count - 1;
    bars.push(baseBar(isLast ? '68%' : '100%', height, `l-${i}`));
  }
  return h(
    'div',
    {
      ...a11yProps,
      ...rest,
      className: ['dsh-skeleton-group', className].filter(Boolean).join(' '),
      style,
    },
    bars,
  );
}

function createSkeletonComponent(React) {
  return function DshSkeletonWithReact(props) {
    return renderDshSkeleton(React, props);
  };
}

function DshSkeleton(props = {}) {
  const { React: explicitReact, ...rest } = props;
  return renderDshSkeleton(resolveReact(explicitReact), rest);
}

/**
 * Lazily resolves `@deepseek-ai/dsh-client-ui-primitives` on render and supplies
 * semantic, accessible HTML fallbacks when running in standalone `jsdom` or `node:vm`
 * tests where host UI primitives are not mounted.
 *
 * IMPORTANT: Call ONLY inside component render paths — never eagerly inside
 * `window.__ModuleLoader__.load({ factory })` or `apply(ctx)`.
 */
// Component types must survive form renders, including Modal autofocus effects.
// Resolve the host before cache lookup so late loading and replacement still work.
const hostPrimitivesByReact = new WeakMap();

function resolveHostPrimitives(React, requireFn) {
  const h = React.createElement;
  let host = null;
  if (typeof requireFn === 'function') {
    try {
      host = requireFn('@deepseek-ai/dsh-client-ui-primitives') || null;
    } catch {
      host = null;
    }
  }

  let cached = hostPrimitivesByReact.get(React);
  if (!cached) {
    cached = new Map();
    hostPrimitivesByReact.set(React, cached);
  }
  if (cached.has(host)) return cached.get(host);

  function FallbackButton({ variant = 'ghost', size = 'md', icon, className, children, type = 'button', ...rest }) {
    const cls = ['dsh-btn', `dsh-btn-${variant}`, `dsh-btn-${size}`, className].filter(Boolean).join(' ');
    return h(
      'button',
      { type, className: cls, ...rest },
      icon != null ? h('span', { className: 'dsh-fallback-btn-icon' }, icon) : null,
      children,
    );
  }

  function FallbackInput({ icon, className, ...rest }) {
    const cls = ['dsh-fallback-input-wrap', className].filter(Boolean).join(' ');
    return h(
      'span',
      { className: cls },
      icon != null ? h('span', { className: 'dsh-fallback-input-icon' }, icon) : null,
      h('input', rest),
    );
  }

  function FallbackCheckbox({ checked = false, onChange, label, disabled = false, title, className, ...rest }) {
    return h(
      'label',
      { className, title },
      h('input', {
        type: 'checkbox',
        checked: Boolean(checked),
        disabled,
        onChange: event => onChange?.(Boolean(event?.target?.checked)),
        ...rest,
      }),
      h('span', null, label),
    );
  }

  function FallbackSwitch({ checked = false, onChange, label, disabled = false, title, className }) {
    return h(
      'button',
      {
        type: 'button',
        role: 'switch',
        'aria-checked': Boolean(checked),
        'aria-label': label,
        title,
        disabled,
        className,
        onClick: () => onChange?.(!checked),
      },
      h('span', null),
    );
  }

  function FallbackSegmentedControl({ id, value, options = [], onChange, label, disabled = false, className }) {
    return h(
      'div',
      { role: 'tablist', 'aria-label': label, className },
      options.map(opt => {
        const selected = opt.value === value;
        return h(
          'button',
          {
            key: opt.value,
            id: id ? `${id}-${opt.value}` : undefined,
            type: 'button',
            role: 'tab',
            'aria-selected': selected,
            tabIndex: selected ? 0 : -1,
            disabled: disabled || Boolean(opt.disabled),
            onClick: () => {
              if (!disabled && !opt.disabled && opt.value !== value) onChange?.(opt.value);
            },
          },
          opt.label,
        );
      }),
    );
  }

  function renderPortalSyncNode(styleValue, fontValue) {
    const syncStyle = normalizeDshStyle(styleValue ?? readDshStyle());
    const syncFont = normalizeDshFont(fontValue ?? readDshFont());
    return h('span', {
      key: '__dsh_portal_sync__',
      ref: createOverlaySyncRef(syncStyle, syncFont),
      hidden: true,
      'aria-hidden': 'true',
      'data-dsh-style': syncStyle,
      'data-dsh-font': syncFont,
    });
  }

  function FallbackMenu({
    open = false,
    anchor,
    items = [],
    children,
    selectedId,
    onSelect,
    onClose,
    footer,
    className,
    listClassName,
    dshStyle,
    dshFont,
  }) {
    const style = normalizeDshStyle(dshStyle ?? readDshStyle());
    const font = normalizeDshFont(dshFont ?? readDshFont());
    return h(
      'div',
      { className: ['dsh-style-fallback-wrap', className].filter(Boolean).join(' ') },
      anchor,
      open
        ? h(
            'div',
            {
              role: 'menu',
              'data-dsh-style': style,
              'data-dsh-font': font,
              'data-window-drag-exclude': '',
              'data-dsh-portal-synced': 'true',
              className: ['dsh-style-fallback-menu', listClassName].filter(Boolean).join(' '),
              onKeyDown: event => {
                if (event?.key === 'Escape') {
                  event.stopPropagation?.();
                  onClose?.();
                }
              },
            },
            items.map(item => {
              const stylePreset = VALID_STYLE_IDS.has(item.id) ? getDshStylePreset(item.id) : null;
              return h(
                'button',
                {
                  key: item.id,
                  type: 'button',
                  role: 'menuitemradio',
                  'aria-checked': item.id === selectedId,
                  disabled: Boolean(item.disabled),
                  className: 'dsh-style-fallback-item',
                  onClick: () => {
                    if (!item.disabled) {
                      onSelect?.(item.id);
                      onClose?.();
                    }
                  },
                },
                h(
                  'span',
                  { className: 'dsh-style-fallback-item-leading' },
                  stylePreset
                    ? h('span', {
                        className: 'dsh-style-swatch',
                        'aria-hidden': 'true',
                        style: { '--dsh-swatch-color': stylePreset.swatch },
                      })
                    : null,
                  h('span', null, item.label),
                ),
                item.id === selectedId ? h('span', { 'aria-hidden': 'true' }, '✓') : null,
              );
            }),
            children,
            footer,
          )
        : null,
    );
  }

  function FallbackModal({
    open = true,
    onClose,
    title,
    closeLabel = 'Close',
    children,
    footer,
    className,
    contentClassName,
    onKeyDownCapture,
    headless = false,
    dshStyle,
    dshFont,
  }) {
    if (!open) return null;
    const style = normalizeDshStyle(dshStyle ?? readDshStyle());
    const font = normalizeDshFont(dshFont ?? readDshFont());
    return h(
      'div',
      {
        className: 'dsh-fallback-modal-root',
        role: 'presentation',
        'data-dsh-style': style,
        'data-dsh-font': font,
        'data-window-drag-exclude': '',
        'data-dsh-portal-synced': 'true',
        onKeyDownCapture,
        // Let nested menus/editors consume Escape before the enclosing dialog.
        onKeyDown: event => {
          if (!event?.defaultPrevented && event?.key === 'Escape') {
            event.stopPropagation?.();
            onClose?.();
          }
        },
      },
      h('div', { className: 'dsh-fallback-modal-mask', 'aria-hidden': 'true', onClick: onClose }),
      h(
        'div',
        {
          role: 'dialog',
          'aria-modal': 'true',
          'aria-label': title,
          tabIndex: -1,
          'data-dsh-style': style,
          'data-dsh-font': font,
          'data-window-drag-exclude': '',
          'data-dsh-portal-synced': 'true',
          className: ['dsh-fallback-modal-dialog', className].filter(Boolean).join(' '),
        },
        headless
          ? children
          : h(
              React.Fragment || 'div',
              null,
              h(
                'header',
                null,
                h('h2', null, title),
                h('button', { type: 'button', 'aria-label': closeLabel, onClick: onClose }, '×'),
              ),
              h('div', { className: contentClassName }, children),
              footer ? h('footer', null, footer) : null,
            ),
      ),
    );
  }

  const WrappedMenu = host?.Menu
    ? function HostMenuWithStyle({ dshStyle, dshFont, children, ...menuProps }) {
        if (!menuProps.open) {
          return children !== undefined ? h(host.Menu, menuProps, children) : h(host.Menu, menuProps);
        }
        const syncNode = renderPortalSyncNode(dshStyle, dshFont);
        return children !== undefined && children !== null
          ? h(host.Menu, menuProps, children, syncNode)
          : h(host.Menu, menuProps, syncNode);
      }
    : FallbackMenu;

  const WrappedModal = host?.Modal
    ? function HostModalWithStyle({ dshStyle, dshFont, children, ...modalProps }) {
        if (!modalProps.open) {
          return children !== undefined ? h(host.Modal, modalProps, children) : h(host.Modal, modalProps);
        }
        const syncNode = renderPortalSyncNode(dshStyle, dshFont);
        return children !== undefined && children !== null
          ? h(host.Modal, modalProps, children, syncNode)
          : h(host.Modal, modalProps, syncNode);
      }
    : FallbackModal;

  const resolved = {
    ...(host || {}),
    isFallback: !host,
    Button: host?.Button || FallbackButton,
    Input: host?.Input || FallbackInput,
    Checkbox: host?.Checkbox || FallbackCheckbox,
    Switch: host?.Switch || FallbackSwitch,
    SegmentedControl: host?.SegmentedControl || FallbackSegmentedControl,
    Menu: WrappedMenu,
    Modal: WrappedModal,
  };
  cached.set(host, resolved);
  return resolved;
}

/**
 * Compact standalone Font Pairing Switcher (`FontSwitcher`), synced via
 * `localStorage['dsh-stardust:ui-font']` + `dsh-stardust-font` and `[data-dsh-font]`.
 */
function createFontSwitcherComponent(React, requireFn) {
  const h = React.createElement;
  return function FontSwitcher({
    font: controlledFont,
    style: controlledStyle,
    onChange,
    lang = 'zh',
    id = 'dsh-font-switcher',
    compact = true,
    disabled = false,
    align = 'end',
    className,
    open: controlledOpen,
    onOpenChange,
  } = {}) {
    const [syncedFont, setSyncedFont] = useDshFont(React);
    const [syncedStyle] = useDshStyle(React);
    const activeFont = normalizeDshFont(controlledFont ?? syncedFont);
    const activeStyle = normalizeDshStyle(controlledStyle ?? syncedStyle);
    const [internalOpen, setInternalOpen] = typeof React.useState === 'function' ? React.useState(false) : [false, () => {}];
    const open = controlledOpen !== undefined ? Boolean(controlledOpen) : internalOpen;
    const setOpen = next => {
      const resolved = typeof next === 'function' ? next(open) : Boolean(next);
      if (controlledOpen === undefined) setInternalOpen(resolved);
      onOpenChange?.(resolved);
    };
    const isZh = String(lang || '').toLowerCase().startsWith('zh');
    const preset = getDshFontPreset(activeFont);
    const P = resolveHostPrimitives(React, requireFn);
    const triggerLabel = isZh ? `字体搭配：${preset.zh}` : `Font pairing: ${preset.en}`;
    const visibleText = compact
      ? (isZh ? preset.zhShort : preset.enShort)
      : (isZh ? preset.zh : preset.en);
    const items = DSH_FONTS.map(option => ({
      id: option.id,
      label: isZh ? `${option.zh} (${option.enShort})` : `${option.en}`,
    }));
    const selectFont = nextId => {
      const applied = writeDshFont(nextId);
      setSyncedFont(applied);
      onChange?.(applied);
      setOpen(false);
    };

    return h(P.Menu, {
      open: open && !disabled,
      selectedId: activeFont,
      dshStyle: activeStyle,
      dshFont: activeFont,
      items,
      align,
      portal: !P.isFallback,
      autoFocus: true,
      minWidthFromAnchor: true,
      className,
      onClose: () => setOpen(false),
      onSelect: selectFont,
      anchor: h(
        P.Button,
        {
          id,
          variant: 'outline',
          size: 'sm',
          disabled,
          className: 'dsh-font-trigger',
          'aria-label': triggerLabel,
          'aria-haspopup': 'menu',
          'aria-expanded': Boolean(open && !disabled),
          title: triggerLabel,
          onClick: () => setOpen(prev => !prev),
          onKeyDown: event => {
            if (!open && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
              event.preventDefault?.();
              setOpen(true);
            }
          },
        },
        h('span', { className: 'dsh-font-glyph', 'aria-hidden': 'true' }, isZh ? '字' : 'Aa'),
        h('span', { className: 'dsh-font-label' }, visibleText),
        renderDshIcon(React, { name: 'down', size: 13 }),
      ),
    });
  };
}

/**
 * Ready-made 13-preset Style Switcher + compact Font Pairing Switcher (`StyleSwitcher`).
 * Renders the style menu trigger with a live color swatch alongside the compact
 * font-pairing trigger (`showFontSwitcher = true` by default), syncing via
 * `localStorage['dsh-stardust:ui-style']` / `['dsh-stardust:ui-font']` and custom events.
 */
function createStyleSwitcherComponent(React, requireFn) {
  const h = React.createElement;
  const FontSwitcher = createFontSwitcherComponent(React, requireFn);
  return function StyleSwitcher({
    style: controlledStyle,
    font: controlledFont,
    onChange,
    onFontChange,
    showFontSwitcher = true,
    lang = 'zh',
    id = 'dsh-style-switcher',
    compact = false,
    disabled = false,
    align = 'end',
    className,
  } = {}) {
    const [syncedStyle, setSyncedStyle] = useDshStyle(React);
    const [syncedFont] = useDshFont(React);
    const activeStyle = normalizeDshStyle(controlledStyle ?? syncedStyle);
    const activeFont = normalizeDshFont(controlledFont ?? syncedFont);
    const [open, setOpen] = typeof React.useState === 'function' ? React.useState(false) : [false, () => {}];
    const [fontOpen, setFontOpen] = typeof React.useState === 'function' ? React.useState(false) : [false, () => {}];
    const isZh = String(lang || '').toLowerCase().startsWith('zh');
    const preset = getDshStylePreset(activeStyle);
    const P = resolveHostPrimitives(React, requireFn);
    const triggerLabel = isZh ? `界面风格：${preset.zh}` : `UI style: ${preset.en}`;
    const visibleText = compact
      ? (isZh ? preset.zhShort : preset.enShort)
      : (isZh ? preset.zh : preset.en);
    const items = DSH_STYLES.map(option => ({
      id: option.id,
      label: isZh ? `${option.zh} (${option.enShort})` : `${option.en}`,
    }));
    const selectStyle = nextId => {
      const applied = writeDshStyle(nextId);
      setSyncedStyle(applied);
      onChange?.(applied);
      setOpen(false);
    };

    return h(
      'div',
      {
        className: ['dsh-style-switcher', className].filter(Boolean).join(' '),
        'data-window-drag-exclude': '',
      },
      h(P.Menu, {
        open: open && !disabled,
        selectedId: activeStyle,
        dshStyle: activeStyle,
        dshFont: activeFont,
        items,
        align,
        portal: !P.isFallback,
        autoFocus: true,
        minWidthFromAnchor: true,
        onClose: () => setOpen(false),
        onSelect: selectStyle,
        anchor: h(
          P.Button,
          {
            id,
            variant: 'outline',
            size: 'sm',
            disabled,
            className: 'dsh-style-trigger',
            'aria-label': triggerLabel,
            'aria-haspopup': 'menu',
            'aria-expanded': Boolean(open && !disabled),
            title: triggerLabel,
            onClick: () => {
              setFontOpen(false);
              setOpen(prev => !prev);
            },
            onKeyDown: event => {
              if (!open && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
                event.preventDefault?.();
                setFontOpen(false);
                setOpen(true);
              }
            },
          },
          h('span', {
            className: 'dsh-style-swatch',
            'aria-hidden': 'true',
            style: { '--dsh-swatch-color': preset.swatch },
          }),
          h('span', { className: 'dsh-style-label' }, visibleText),
          renderDshIcon(React, { name: 'down', size: 14 }),
        ),
      }),
      showFontSwitcher
        ? h(FontSwitcher, {
            id: `${id}-font`,
            font: controlledFont,
            style: activeStyle,
            onChange: onFontChange,
            lang,
            compact: true,
            disabled,
            align,
            open: fontOpen && !disabled,
            onOpenChange: next => {
              if (next) setOpen(false);
              setFontOpen(next);
            },
          })
        : null,
    );
  };
}

let primCache;
function getPrim() {
    if (primCache !== undefined) return primCache;
    try {
        primCache = require("@deepseek-ai/dsh-client-ui-primitives") || {};
    } catch {
        // Lazy compatibility path for standalone jsdom tests or partial hosts.
        primCache = {};
    }
    return primCache;
}
const PRIM = new Proxy({}, {
    get(_target, prop) {
        return getPrim()?.[prop];
    }
});

const CALENDAR_ICON_PATHS = {
    ...DSH_ICON_PATHS,
    warning: ["M12 3 2 20h20Z", "M12 9v5M12 17h.01"],
};

const StyleSwitcher = createStyleSwitcherComponent(React, require);

function CalendarIcon({ size = 16, ...props }) {
    return h("svg", {
        width: size, height: size, viewBox: "0 0 24 24", fill: "none",
        stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round",
        "aria-hidden": true, focusable: false, "data-dsh-icon": "calendar", ...props
    },
        h("rect", { x: 3, y: 5, width: 18, height: 16, rx: 3 }),
        h("path", { d: "M3 10h18M8 3v4M16 3v4" })
    );
}

function Icon({ name = "calendar", size = 16, ...props }) {
    return renderDshIcon(React, { name, size, paths: CALENDAR_ICON_PATHS, ...props });
}

function Btn({ variant = "outline", size = "sm", icon, className, children, ...props }) {
    const P = getPrim();
    const nativeVariant = variant === "danger" ? "ghost" : variant;
    const button = {
        type: "button",
        ...props,
        className: clsx(styles["dshc-btn"], styles[nativeVariant], variant === "primary" && "dsh-btn-primary", variant === "danger" && styles.danger, className)
    };
    const glyph = icon ? h(Icon, { name: icon }) : null;
    return P?.Button
        ? h(P.Button, { ...button, variant: nativeVariant, size, icon: glyph }, children)
        : h("button", button, glyph, children);
}

function IconButton({ label, icon, className, ...props }) {
    return h(Btn, { ...props, className: clsx(styles.iconButton, className), icon, variant: "ghost", "aria-label": label, title: label });
}

function Txt({ className, icon, ...props }) {
    const P = getPrim();
    const input = P?.Input
        ? h(P.Input, { ...props, icon, className: clsx(styles.fieldControl, className) })
        : h("input", { type: "text", ...props, className: clsx(styles["dshc-input"], className) });
    if (props.type !== "date" && props.type !== "time") return input;
    return h("span", { className: styles.temporalField }, input,
        h("span", { className: styles.temporalIcon, "aria-hidden": true },
            props.type === "date" ? h(CalendarIcon, { size: 14 }) : h(Icon, { name: "clock", size: 14 })
        )
    );
}

function Chk({ id, checked, disabled, label, onChange, className, title }) {
    const generatedId = typeof useId === "function" ? useId() : undefined;
    const inputId = id || generatedId;
    const P = getPrim();
    const classes = clsx(styles["dshc-check"], className);
    if (P?.Checkbox) return h(P.Checkbox, { id: inputId, checked, disabled, label, onChange, className: classes, title });
    return h("label", { htmlFor: inputId, className: classes, title },
        h("input", { id: inputId, type: "checkbox", checked, disabled, onChange: event => onChange(event.target.checked) }),
        h("span", null, label)
    );
}

function Picker({ id, label, value, options, onChange, disabled, compact = false }) {
    const [open, setOpen] = useState(false);
    const [dshStyle] = useDshStyle(React);
    const [dshFont] = useDshFont(React);
    const P = getPrim();
    if (!P?.Menu) {
        return h("select", {
            id, "aria-label": label, className: clsx(styles["dshc-input"], compact && styles.toolbarPicker),
            value, disabled, onChange: event => onChange(event.target.value)
        },
            options.map(option => h("option", { key: option.id, value: option.id }, option.label)));
    }
    const HostMenu = resolveHostPrimitives(React, require).Menu;
    const selected = options.find(option => option.id === value);
    const expanded = open && !disabled;
    // Menu composes the host's MenuSurface and owns positioning/keyboard focus.
    return h(HostMenu, {
        open: expanded, dshStyle, dshFont, portal: true, compact: true, autoFocus: true, minWidthFromAnchor: true,
        className: compact ? styles.toolbarPicker : styles.picker, listClassName: styles.menu,
        anchor: h(Btn, {
            id, disabled, className: compact ? styles.layoutTrigger : styles.pickerTrigger,
            "aria-label": label + " · " + (selected?.label ?? ""), "aria-haspopup": "menu", "aria-expanded": expanded,
            onClick: () => setOpen(value => !value)
        }, h("span", null, selected?.label), h(Icon, { name: "down" })),
        items: options,
        selectedId: value,
        onClose: () => setOpen(false),
        onSelect: id => { setOpen(false); onChange(id); }
    });
}

function Segments({ id, label, items, value, onChange, disabled, ...rest }) {
    const P = getPrim();
    const indicator = useSlidingTabIndicator(React, value, { deps: [items.length] });
    if (P?.SegmentedControl) {
        // The host positions the active pill by equal grid tracks. The
        // fallback flex layout would make its width and offsets diverge.
        return h(P.SegmentedControl, { id, label, value, options: items, onChange, disabled, ...rest });
    }
    return h("div", { ...rest, ...indicator.tablistProps, className: clsx(styles.segments, "dsh-tablist", "dsh-tablist-pill", rest.className), role: "tablist", "aria-label": label },
        items.map(item => h("button", {
            key: item.value, type: "button", role: "tab", id: id + "-" + item.value,
            "data-segment-id": item.value,
            className: styles.segment, "aria-selected": value === item.value,
            "aria-controls": id + "-" + item.value + "-panel",
            tabIndex: value === item.value ? 0 : -1, disabled: disabled || item.disabled,
            onClick: () => onChange(item.value),
            onKeyDown: event => {
                const enabled = items.filter(item => !item.disabled);
                const index = enabled.findIndex(option => option.value === item.value);
                const length = enabled.length;
                const offsets = { ArrowLeft: -1, ArrowRight: 1, Home: -index, End: length - index - 1 };
                if (!Object.hasOwn(offsets, event.key)) return;
                event.preventDefault();
                const next = enabled[(index + offsets[event.key] + length) % length].value;
                onChange(next);
                document.getElementById(id + "-" + next)?.focus();
            }
        }, item.label)),
        h("span", indicator.indicatorProps)
    );
}

function EmptyState({ title, children, action }) {
    return h("div", { className: styles["w-empty"] },
        h("span", { className: styles.emptyIcon }, h(CalendarIcon, { size: 22 })),
        h("h2", null, title), children,
        h("div", { className: styles.emptyActions }, action)
    );
}

function FallbackDialog({ title, onClose, children, review, dshStyle, dshFont }) {
    const panel = useRef(null);
    useEffect(() => {
        const previous = document.activeElement;
        (panel.current?.querySelector("[data-modal-autofocus]") ?? panel.current)?.focus();
        return () => { if (previous?.isConnected) previous.focus({ preventScroll: true }); };
    }, []);
    function trapTab(event) {
        if (event.key !== "Tab") return;
        const controls = [...panel.current.querySelectorAll("button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href]")];
        const first = controls[0], last = controls.at(-1);
        if (event.shiftKey && (document.activeElement === first || document.activeElement === panel.current)) {
            event.preventDefault();
            last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
        }
    }
    return h("div", {
        className: review ? styles["dshc-overlay"] : styles["dshc-modalwrap"],
        "data-dsh-style": dshStyle,
        "data-dsh-font": dshFont,
        "data-dsh-portal-synced": "true",
        onMouseDown: event => { if (event.target === event.currentTarget) onClose(); }
    }, h("section", {
        className: clsx(styles.dialog, review ? styles["dshc-drawer"] : styles["dshc-modal"]),
        ref: panel, role: "dialog", "aria-modal": true, "aria-label": title, tabIndex: -1, onKeyDown: trapTab,
        "data-dsh-style": dshStyle, "data-dsh-font": dshFont, "data-window-drag-exclude": "", "data-dsh-portal-synced": "true"
    }, children));
}

function Dlg({ open, onClose, title, closeLabel = title, children, footer, review = false }) {
    const appearance = React.useContext(getCalendarAppearanceContext());
    const [dshStyle] = useDshStyle(React);
    const [dshFont] = useDshFont(React);
    const P = getPrim();
    if (!open) return null;
    const frame = h("div", {
        key: "frame",
        ref: createOverlaySyncRef(dshStyle, dshFont),
        className: styles.dialogFrame,
        style: appearance,
        "data-dshc-scope": "1",
        "data-dsh-style": dshStyle,
        "data-dsh-font": dshFont,
        "data-window-drag-exclude": ""
    },
        h("header", { className: styles.dialogHeader },
            h("h2", null, title), h(IconButton, { icon: "close", label: closeLabel, onClick: onClose })
        ),
        h("div", { className: styles.dialogBody }, children),
        footer ? h("footer", { className: styles.dialogFooter }, footer) : null
    );
    return P?.Modal
        ? h(P.Modal, { open, onClose, title, headless: true, dshStyle, dshFont, className: styles.dialog }, frame)
        : h(FallbackDialog, { title, onClose, review, dshStyle, dshFont }, frame);
}

// Color values harmonized with the DeepSeek Harness (>=0.2.2-rc.3) 5-style design system.
// Never too dark: host dark mode uses breathable slate (#1f232b / #272c36), never pitch black.
const CALENDAR_PALETTE_KEY = "dsh-calendar:palette";
const CALENDAR_PALETTES = [
    { id: "default", zh: "默认蓝", en: "Default blue", light: "#2563eb", dark: "#7aaaff" },
    { id: "aurora", zh: "极光紫", en: "Aurora", light: "#7c3aed", dark: "#a78bfa" },
    { id: "ember", zh: "余烬橙", en: "Ember", light: "#d97706", dark: "#fbbf24" },
    { id: "mint", zh: "薄荷绿", en: "Mint", light: "#059669", dark: "#34d399" }
];

const CALENDAR_APPEARANCE = {
    light: {
        "bg-base": "#ffffff", "bg-layer-1": "#fafbfc", "bg-layer-2": "#f4f5f7",
        "bg-layer-3": "#eceef2", "bg-layer-4": "#f1f3f5",
        "label-primary": "#0f1115", "label-secondary": "#4b5563", "label-tertiary": "#848c99",
        "border-l1": "rgba(15, 17, 21, 0.06)", "border-l2": "rgba(15, 17, 21, 0.11)", "border-l3": "rgba(15, 17, 21, 0.18)",
        "button-primary-fill": "#0f1115", "button-primary-hover": "#2d323d", "button-primary-ink": "#ffffff",
        "interactive-bg-hover": "rgba(15, 17, 21, 0.045)", "interactive-bg-active": "rgba(15, 17, 21, 0.08)",
        "state-success-primary": "#0f766e", "state-success-tertiary": "rgba(15, 118, 110, 0.10)",
        "state-warn-primary": "#b45309", "state-warn-label": "#b45309", "state-warn-tertiary": "rgba(180, 83, 9, 0.10)",
        "state-error-primary": "#dc2626"
    },
    dark: {
        "bg-base": "#1f232b", "bg-layer-1": "#272c36", "bg-layer-2": "#2f3542",
        "bg-layer-3": "#373e4d", "bg-layer-4": "#41495a",
        "label-primary": "#eef2f7", "label-secondary": "#b6c0cf", "label-tertiary": "#8d98ab",
        "border-l1": "rgba(226, 232, 240, 0.09)", "border-l2": "rgba(226, 232, 240, 0.15)", "border-l3": "rgba(226, 232, 240, 0.22)",
        "button-primary-fill": "#5b8def", "button-primary-hover": "#6f9cf4", "button-primary-ink": "#ffffff",
        "interactive-bg-hover": "rgba(226, 232, 240, 0.07)", "interactive-bg-active": "rgba(226, 232, 240, 0.13)",
        "state-success-primary": "#4ade80", "state-success-tertiary": "rgba(74, 222, 128, 0.14)",
        "state-warn-primary": "#fbbf24", "state-warn-label": "#fcd34d", "state-warn-tertiary": "rgba(251, 191, 36, 0.15)",
        "state-error-primary": "#f87171"
    }
};

const CALENDAR_SURFACES = {
    floating: {
        light: {
            "bg-base": "#eef2f8",
            "calendar-island-tint": "rgba(139, 92, 246, 0.14)",
            "calendar-island-surface": "color-mix(in srgb, var(--dsw-alias-bg-layer-1) 84%, transparent)"
        },
        dark: {
            "bg-base": "#1f232b",
            "calendar-island-tint": "rgba(122, 170, 255, 0.16)",
            "calendar-island-surface": "rgba(39, 44, 54, 0.86)"
        }
    },
    spotlight: {
        light: { "bg-base": "#f8fafc", "bg-layer-1": "#ffffff", "bg-layer-2": "#f1f5f9", "bg-layer-4": "#e8eef5" },
        dark: { "bg-base": "#1f232b", "bg-layer-1": "#272c36", "bg-layer-2": "#2f3542", "bg-layer-4": "#373e4d" }
    },
    cards: {
        light: { "bg-base": "#f5f4f0", "bg-layer-1": "#fcfbf8", "bg-layer-2": "#eceae3", "bg-layer-4": "#e3e0d7" },
        dark: { "bg-base": "#20242c", "bg-layer-1": "#282d37", "bg-layer-2": "#303642", "bg-layer-4": "#383f4d" }
    }
};

let calendarAppearanceContext;
function getCalendarAppearanceContext() {
    return calendarAppearanceContext ||= React.createContext(undefined);
}

function loadCalendarPalette() {
    const preset = readCalendarPreference(CALENDAR_PALETTE_KEY);
    return CALENDAR_PALETTES.some(option => option.id === preset) ? preset : "default";
}

const CALENDAR_SPOTLIGHT_CARDS = ["dshc-slot", "dshc-chip", "dshc-row", "card", "slotCard", "miniCalendar"]
    .map(name => "." + styles[name]).join(", ");

function moveCalendarSpotlight(event) {
    if (event.pointerType === "touch") return;
    const card = event.target?.closest?.(CALENDAR_SPOTLIGHT_CARDS);
    if (!card || !event.currentTarget.contains(card)) return;
    const { left, top } = card.getBoundingClientRect();
    card.style.setProperty("--calendar-spotlight-x", (event.clientX - left) + "px");
    card.style.setProperty("--calendar-spotlight-y", (event.clientY - top) + "px");
}

function useCalendarDarkMode(enabled) {
    const read = () => enabled && typeof document !== "undefined" && !!document.body?.hasAttribute("data-ds-dark-theme");
    const [dark, setDark] = useState(read);
    useEffect(() => {
        if (!enabled || typeof window === "undefined" || typeof window.MutationObserver !== "function" || !document?.body) {
            setDark(false);
            return;
        }
        const observer = new window.MutationObserver(() => setDark(read()));
        observer.observe(document.body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });
        setDark(read());
        return () => observer.disconnect();
    }, [enabled]);
    return dark;
}

function calendarAppearance(layout, palette, scheme, dshStyle = "harness") {
    const swatch = CALENDAR_PALETTES.find(option => option.id === palette) || CALENDAR_PALETTES[0];
    if (dshStyle && dshStyle !== "harness") {
        // Defer surface, ink, border, radius, and button tokens to `[data-dsh-style]` in themes-and-motion.css,
        // while keeping layout island variables and explicit custom event-palette overrides harmonious.
        const overrides = {
            "--dsw-alias-calendar-island-tint": "color-mix(in srgb, var(--dsw-alias-state-business-primary) 14%, transparent)",
            "--dsw-alias-calendar-island-surface": "color-mix(in srgb, var(--dsw-alias-bg-layer-1) 88%, transparent)",
            "--dsw-alias-accent": palette === "default" ? "var(--dsw-alias-state-business-primary)" : swatch.light
        };
        if (palette !== "default") {
            overrides["--dsw-alias-state-business-primary"] = swatch.light;
        }
        return overrides;
    }
    const accent = swatch[scheme];
    return Object.fromEntries(Object.entries({
        ...CALENDAR_APPEARANCE[scheme], ...CALENDAR_SURFACES[layout]?.[scheme],
        accent, link: accent, "state-business-primary": accent
    }).map(([name, value]) => ["--dsw-alias-" + name, value]));
}

function CalendarPalettePicker({ palette, dark, onChange }) {
    return h("div", { className: styles.paletteChoices, role: "group", "aria-label": calendarText("日历配色", "Calendar palette") },
        CALENDAR_PALETTES.map(option => {
            const label = calendarText(option.zh, option.en);
            return h(Btn, {
                key: option.id, variant: "ghost", className: styles.paletteSwatch, title: label,
                "aria-label": label, "aria-pressed": option.id === palette,
                style: { "--dsw-alias-accent": option[dark ? "dark" : "light"] },
                onClick: () => onChange(option.id)
            });
        })
    );
}

function pickDistinctAvailabilitySlots(slots, maxCount = 6) {
    const picked = [];
    let lastEnd = -Infinity;
    for (const slot of slots) {
        const startMs = Date.parse(slot.start);
        const endMs = Date.parse(slot.end);
        if (startMs >= lastEnd) {
            picked.push(slot);
            lastEnd = endMs;
            if (picked.length >= maxCount) break;
        }
    }
    return picked.length ? picked : slots.slice(0, maxCount);
}

function formatAvailabilityShareSummary(slots, { durationMinutes, zone, lang }) {
    const chosen = pickDistinctAvailabilitySlots(slots, 6);
    const isEn = lang === "en";
    const dayFmt = new Intl.DateTimeFormat(isEn ? "en-US" : "zh-CN", {
        timeZone: zone, year: "numeric", month: "short", day: "numeric", weekday: "short"
    });
    const clockFmt = new Intl.DateTimeFormat(isEn ? "en-US" : "zh-CN", {
        timeZone: zone, hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    });
    const lines = chosen.map(slot => {
        const start = new Date(slot.start);
        const end = new Date(slot.end);
        const startDay = dayFmt.format(start);
        const endDay = dayFmt.format(end);
        const range = startDay === endDay
            ? startDay + " " + clockFmt.format(start) + "–" + clockFmt.format(end)
            : startDay + " " + clockFmt.format(start) + " – " + endDay + " " + clockFmt.format(end);
        return "• " + range;
    });
    const header = isEn
        ? "Available meeting slots (" + durationMinutes + " min, " + zone + "):"
        : "可选空闲时段（时长 " + durationMinutes + " 分钟，时区 " + zone + "）：";
    const footer = isEn
        ? "Let me know which time works best and I will send a calendar invite."
        : "请看以上哪个时间方便？确认后我来发日历邀请。";
    return [header, ...lines, footer].join("\n");
}

function AvailabilityPanel({ anchor, onChoose, onClose, onBusy }) {
    const formId = typeof useId === "function" ? useId() : "dshc-avail";
    const text = calendarText;
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    const [form, setForm] = useState(() => {
        const now = new Date();
        const start = anchor > now ? anchor : now;
        return {
            from: dayKey(start), to: dayKey(addDays(start, 6)),
            durationMinutes: "60", workStart: "09:00", workEnd: "18:00",
            bufferMinutes: "0", weekdays: [1, 2, 3, 4, 5]
        };
    });
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);
    const [copiedSummary, setCopiedSummary] = useState(false);
    const [copyStatus, setCopyStatus] = useState("");
    const active = useRef({ id: 0, controller: null });
    const copyTimer = useRef(null);
    const lastCopyMsg = useRef("");

    useEffect(() => {
        onBusy(busy);
        return () => onBusy(false);
    }, [busy, onBusy]);
    useEffect(() => () => {
        active.current.id++;
        active.current.controller?.abort();
        if (copyTimer.current) clearTimeout(copyTimer.current);
    }, []);

    function clearCopyFeedback() {
        if (copyTimer.current) clearTimeout(copyTimer.current);
        setCopiedSummary(false);
        setCopyStatus("");
    }
    function cancel() {
        active.current.id++;
        active.current.controller?.abort();
        active.current.controller = null;
        setBusy(false);
    }
    function close() {
        cancel();
        onClose();
    }
    function update(fields) {
        cancel();
        clearCopyFeedback();
        setForm(value => ({ ...value, ...fields }));
        setResult(null);
        setError("");
    }
    async function copySummary() {
        if (!result?.slots?.length) return;
        const summary = formatAvailabilityShareSummary(result.slots, {
            durationMinutes: form.durationMinutes,
            zone,
            lang: UI_LANG
        });
        const ok = await copyText(summary);
        if (copyTimer.current) clearTimeout(copyTimer.current);
        let msg = ok
            ? text("已复制，可直接粘贴到微信、钉钉、Slack 或邮件。", "Copied — ready to paste into chat or email.")
            : text("无法访问剪贴板，请手动复制时段。", "Clipboard access unavailable.");
        if (msg === lastCopyMsg.current) msg += "\u00A0";
        lastCopyMsg.current = msg;
        setCopiedSummary(ok);
        setCopyStatus(msg);
        copyTimer.current = setTimeout(() => {
            setCopiedSummary(false);
            setCopyStatus("");
        }, 2200);
    }
    async function search(event) {
        event.preventDefault();
        cancel();
        clearCopyFeedback();
        const controller = new AbortController();
        const id = ++active.current.id;
        active.current.controller = controller;
        setBusy(true);
        setError("");
        setResult(null);
        try {
            const start = new Date(form.from + "T00:00:00");
            const end = new Date(form.to + "T00:00:00");
            end.setDate(end.getDate() + 1);
            if (dayKey(new Date()) === form.from) start.setTime(Math.max(start.getTime(), Date.now()));
            const value = await api("availability", {
                start: start.toISOString(), end: end.toISOString(), timeZone: zone,
                durationMinutes: Number(form.durationMinutes), workStart: form.workStart,
                workEnd: form.workEnd, weekdays: form.weekdays, bufferMinutes: Number(form.bufferMinutes), limit: 20
            }, controller.signal);
            if (active.current.id === id) setResult(value);
        } catch (e) {
            if (active.current.id === id && !controller.signal.aborted) {
                const message = e?.message || String(e);
                setError(UI_LANG === "en" && /范围|31 天/.test(message) ? "Choose an increasing date range of up to 31 days." : backendMessage(e));
            }
        } finally {
            if (active.current.id === id) {
                active.current.controller = null;
                setBusy(false);
            }
        }
    }

    const title = text("找空闲时段", "Find available time");
    const field = (name, label, type, limits) => {
        const inputId = formId + "-" + name;
        return h("div", { key: name, className: styles["dshc-field"] },
            h("label", { htmlFor: inputId }, label),
            h(Txt, { id: inputId, name, type, value: form[name], disabled: busy, required: true, ...limits, onChange: event => update({ [name]: event.target.value }) })
        );
    };
    const formatter = useMemo(() => new Intl.DateTimeFormat(UI_LANG === "en" ? "en-US" : "zh-CN", {
        timeZone: zone, year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", timeZoneName: "shortOffset"
    }), [UI_LANG, zone]);
    const format = iso => formatter.format(new Date(iso));

    return h("section", {
        className: styles.workspacePage, "aria-label": title, "aria-busy": busy,
        onKeyDown: event => {
            if (event.key !== "Escape" || event.isComposing) return;
            event.preventDefault();
            event.stopPropagation();
            close();
        }
    }, h("div", { className: styles.pageInner },
        h("div", { className: styles.pageHeader },
            h("h2", { className: styles.pageHeading, "data-dsh-serif": "" }, title),
            h(IconButton, { icon: "close", label: text("关闭", "Close"), onClick: close })
        ),
        h("p", { className: styles.pageIntro }, text(
            "按当前连接的日历查找，不代表其他日历或参会者空闲。选择候选只填写新建草稿。",
            "Checks the connected calendar, not other calendars or attendees. Choosing a time only fills a new-event draft."
        )),
        h("form", { className: styles.card, "data-dsh-card": "", onSubmit: search },
            h("div", { className: styles.formGrid },
                field("from", text("开始日期", "Start date"), "date"),
                field("to", text("结束日期（包含当天）", "End date (inclusive)"), "date"),
                field("durationMinutes", text("日程时长（分钟）", "Duration (minutes)"), "number", { min: 5, max: 480, step: 1 }),
                field("bufferMinutes", text("定时日程前后缓冲（分钟）", "Buffer around timed events (minutes)"), "number", { min: 0, max: 120, step: 1 }),
                field("workStart", text("工作开始", "Work starts"), "time"),
                field("workEnd", text("工作结束", "Work ends"), "time")
            ),
            h("fieldset", { className: styles.availabilityFieldset, disabled: busy },
                h("legend", null, text("工作日", "Working days")),
                h("div", { className: styles.availabilityDays }, WEEKDAYS_ZH.map((_, index) => {
                    const day = index + 1;
                    return h(Chk, {
                        key: day, label: weekDayLabel(index), disabled: busy, checked: form.weekdays.includes(day),
                        onChange: checked => update({ weekdays: checked ? [...form.weekdays, day] : form.weekdays.filter(value => value !== day) })
                    });
                }))
            ),
            h("div", { className: styles.cardToolbar },
                h("p", { className: styles["dshc-sub"] }, text("查询与显示时区：", "Search and display time zone: ") + zone),
                h("div", { className: styles["dshc-actions"] },
                    busy ? h(Btn, { onClick: cancel }, text("取消查询", "Cancel search")) : null,
                    h(Btn, { type: "submit", variant: "primary", disabled: busy }, busy ? text("正在查询…", "Searching…") : text("查找空闲", "Find times"))
                )
            )
        ),
        error ? h("p", { className: clsx(styles["dshc-alert"], styles.error), role: "alert" }, error) : null,
        busy && !result ? h("div", { className: styles.card, "data-dsh-card": "" },
            renderDshSkeleton(React, { variant: "card", label: text("正在查询…", "Searching…") })) : null,
        result ? h("div", { className: styles.card, "data-dsh-card": "", "aria-live": "polite" },
            h("div", { className: styles.cardToolbar },
                h("p", { className: styles["dshc-sub"] }, text("读取于 ", "Checked at ") + format(result.checkedAt) +
                    text("，已核对 ", " · Checked ") + result.busyEventCount +
                    text(" 个占用日程。候选尚未预约，可相互重叠。", " busy events. Candidates are not reserved and may overlap.")),
                result.count ? h("div", { className: styles.copyRow },
                    h(Btn, {
                        icon: copiedSummary ? "check" : "copy",
                        "data-copied": copiedSummary ? "true" : undefined,
                        onClick: copySummary
                    }, copiedSummary ? text("已复制空闲时段文案", "Copied free slots summary") : text("复制空闲时段文案", "Copy free slots summary")),
                    h("span", { className: styles.copyStatus, role: "status" }, copyStatus)
                ) : null
            ),
            result.count ? h("ol", { className: styles.slotGrid }, result.slots.map(slot => h("li", { className: styles.slotCard, "data-dsh-card": "", key: slot.start },
                h("span", { className: styles.slotRange }, format(slot.start) + " — " + format(slot.end)),
                h(Btn, { variant: "primary", onClick: () => onChoose(slot) }, text("用此时段新建", "Create with this time"))
            ))) : h("p", { role: "status" }, text(
                "查询范围内没有符合条件的空闲时段。可缩短时长、减少缓冲或调整工作时间后重试。",
                "No available times match. Try a shorter duration, less buffer or different working hours."
            )),
            result.hasMore ? h("p", { className: styles["dshc-sub"] }, text("仅显示最早 20 个候选，可缩小日期范围后再查。", "Showing the earliest 20 candidates. Narrow the date range to refine the results.")) : null
        ) : null
    ));
}

function EventForm({ draft, events, onCancel, onSubmit, busy, error, source, original, onDelete, confirmDelete, setConfirmDelete }) {
    const formId = useId();
    const [form, setForm] = useState(draft);
    const [smartOpen, setSmartOpen] = useState(false);
    const [smartBusy, setSmartBusy] = useState(false);
    const [smartFilled, setSmartFilled] = useState(false);
    // Update protection: dsh-calendar.event

    useEffect(() => { setForm(draft); }, [draft]);
    const patch = fields => setForm(previous => ({ ...previous, ...fields }));
    const isEdit = draft.uid !== undefined;
    const pseudo = asPseudoEvent(form);
    const conflicts = !pseudo ? [] : events.filter(event => event.uid !== form.uid && overlaps(event, pseudo));
    const canSave = !smartBusy && form.summary.trim() !== "" && !!pseudo && Date.parse(pseudo.end) >= Date.parse(pseudo.start);
    const fillDraft = fields => {
        patch({ ...fields, sourceRange: undefined });
        setSmartFilled(true);
    };
    const field = (key, label, control) => h("div", { className: styles["dshc-field"] },
        h("label", { htmlFor: formId + "-" + key }, label), control
    );
    const input = (key, label, props) => field(key, label, h(Txt, {
        id: formId + "-" + key, value: form[key], onChange: event => patch({ [key]: event.target.value }), ...props
    }));
    const formatter = useMemo(() => new Intl.DateTimeFormat(UI_LANG === "en" ? "en-US" : "zh-CN", {
        year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", timeZoneName: "shortOffset"
    }), [UI_LANG]);
    const resolvedTime = form.sourceRange && !form.allDay && pseudo ? h("p", { className: styles.draftHint, role: "note" },
        calendarText("实际时段：", "Resolved time: ") +
        [pseudo.start, pseudo.end].map(iso => formatter.format(new Date(iso))).join(" — ") +
        calendarText("。未修改的钟点保留原 UTC 偏移。", " · Unchanged times preserve their original UTC offsets.")
    ) : null;

    const body = h(React.Fragment, null,
        source ? h("p", { className: styles.draftHint }, calendarText("目标日历：", "Target calendar: ") + source) : null,
        !isEdit ? h("details", { className: styles["dshc-steps"], onToggle: event => setSmartOpen(event.currentTarget.open) },
            h("summary", null, calendarText("从文字或截图填写", "Fill from text or screenshot")),
            smartOpen ? h(CalendarDraftInput, { onFill: fillDraft, onBusy: setSmartBusy }) : null
        ) : null,
        smartFilled ? h("p", { role: "status", className: styles.draftHint }, calendarText(
            "已填入草稿。请核对日期、时间和地点，补齐空白后保存。",
            "Draft fields filled. Check the date, time, and location and fill any blanks before saving."
        )) : null,
        draft.isSeries ? h("p", { className: styles["dshc-alert"] }, t("form.series")) : null,
        error ? h("div", { className: clsx(styles["dshc-alert"], styles.error), role: "alert" }, error) : null,
        conflicts.length ? h("div", { className: clsx(styles["dshc-alert"], styles.warn), role: "status" },
            h("div", null,
                h("strong", null, t("conflict.title", { n: conflicts.length })),
                conflicts.slice(0, 3).map(event => h("div", { key: eventKey(event) }, "• " + formatWhen(event) + " " + event.summary)),
                h("div", null, t("conflict.hint"))
            )
        ) : null,
        input("summary", t("field.summary"), { "data-modal-autofocus": true, placeholder: t("form.newTitle") }),
        input("date", t("field.date"), { type: "date" }),
        !form.allDay ? h("div", { className: styles["dshc-two"] },
            input("startTime", t("field.start"), { type: "time" }),
            input("endTime", t("field.end"), { type: "time" })
        ) : null,
        resolvedTime,
        h("div", { className: styles["dshc-field"] }, h(Chk, {
            checked: form.allDay === true, label: t("field.allDay"), onChange: next => patch({ allDay: next })
        })),
        field("repeat", t("field.repeat"), h(Picker, {
            id: formId + "-repeat", label: t("field.repeat"), value: form.repeat,
            options: ["", "daily", "weekly", "monthly", "yearly", "custom"].map(id => ({ id, label: t("repeat." + (id || "none")) })),
            onChange: repeat => patch({ repeat })
        })),
        form.repeat === "custom" ? input("rrule", "RRULE", { placeholder: "FREQ=WEEKLY;COUNT=10" }) : null,
        input("location", t("field.location")),
        field("description", t("field.description"), h("textarea", {
            id: formId + "-description", className: styles["dshc-input"], value: form.description,
            onChange: event => patch({ description: event.target.value })
        })),
        confirmDelete && original ? h("p", { className: clsx(styles["dshc-alert"], styles.warn) },
            t("confirm.delete", { name: original.summary }),
            h(Btn, { variant: "ghost", disabled: busy, onClick: () => setConfirmDelete(false) },
                calendarText("取消删除", "Cancel deletion"))) : null
    );
    const footer = h("div", { className: styles["dshc-actions"] },
        original ? h(CopyEventId, { uid: original.uid }) : null,
        original ? h(DeleteEventButton, { event: original, busy, confirmDelete, setConfirmDelete, onDelete }) : null,
        original ? h("span", { className: styles["dshc-spacer"] }) : null,
        h(Btn, { variant: "ghost", onClick: onCancel, disabled: busy }, t("action.cancel")),
        h(Btn, { variant: "primary", icon: busy ? undefined : "check", onClick: () => onSubmit(form), disabled: busy || !canSave || confirmDelete, "aria-busy": busy }, busy ? "…" : t("action.save"))
    );
    return h(Dlg, {
        open: true, onClose: onCancel, closeLabel: calendarText("关闭", "Close"),
        title: isEdit ? t("form.editTitle") : t("form.newTitle"), children: body, footer
    });
}

function CopyEventId({ uid }) {
    const [copied, setCopied] = useState(false);
    const timer = useRef(null);
    useEffect(() => () => clearTimeout(timer.current), []);
    return h(Btn, {
        icon: copied ? "check" : "copy",
        "data-copied": copied ? "true" : undefined,
        onClick: async () => {
            if (!await copyText(uid)) return;
            clearTimeout(timer.current);
            setCopied(true);
            timer.current = setTimeout(() => setCopied(false), 1600);
        }
    }, copied ? t("action.copied") : t("action.copy"));
}

function DeleteEventButton({ event, busy, readOnly, confirmDelete, setConfirmDelete, onDelete }) {
    return confirmDelete
        ? h(Btn, { variant: "danger", icon: "trash", disabled: busy || readOnly, onClick: () => onDelete(event) }, t("action.confirmDelete"))
        : h(Btn, { variant: "danger", icon: "trash", disabled: busy || readOnly, onClick: () => setConfirmDelete(true) }, t("action.delete"));
}

function EventReview({ event, onClose, onEdit, onDelete, busy, confirmDelete, setConfirmDelete, events, readOnly }) {
    const seriesCount = event.isOccurrence ? events.filter(e => e.uid === event.uid && e.seriesStart === event.seriesStart).length : 0;
    const details = [
        event.rrule && [t("repeat.recurring"), humanRepeat(event.rrule) + " · " + event.rrule],
        event.isOccurrence && !event.rrule && [t("repeat.occurrence"), (seriesCount > 0 ? seriesCount + " / " : "") + t("repeat.occurrence")],
        event.location && [t("field.location"), event.location],
        event.description && [t("field.description"), event.description],
        [t("field.uid"), h("span", { className: styles["dshc-mono"] }, event.uid)]
    ].filter(Boolean);
    const body = h(React.Fragment, null,
        h("div", { className: styles.reviewMeta },
            formatWhen(event), h("span", { className: styles["dshc-tag"] }, formatDuration(event))
        ),
        h("dl", { className: styles["dshc-kv"] }, details.map(([label, value]) => h(React.Fragment, { key: label },
            h("dt", null, label), h("dd", null, value)
        ))),
        confirmDelete ? h("p", { className: clsx(styles["dshc-alert"], styles.warn) },
            t(isRecurring(event) ? "confirm.deleteSeries" : "confirm.delete", { name: event.summary })) : null
    );
    const footer = h("div", { className: styles["dshc-actions"] },
        h(CopyEventId, { uid: event.uid }),
        h("span", { className: styles["dshc-spacer"] }),
        h(DeleteEventButton, { event, busy, readOnly, confirmDelete, setConfirmDelete, onDelete }),
        h(Btn, { variant: "primary", onClick: () => onEdit(event), disabled: busy || readOnly }, t("action.edit"))
    );
    return h(Dlg, {
        open: true, review: true, title: event.summary,
        closeLabel: PRIM?.Modal ? calendarText("关闭", "Close") : "close", onClose, children: body, footer
    });
}

function calendarText(zh, en) {
    return UI_LANG === "en" ? en : zh;
}

const WEEKDAYS_EN = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function weekDayLabel(index) {
    return UI_LANG === "en" ? WEEKDAYS_EN[index] : "周" + WEEKDAYS_ZH[index];
}

function conflictSummary(events) {
    const sorted = events.map(event => ({ event, start: +startDate(event), end: +endDate(event) }))
        .sort((a, b) => a.start - b.start);
    const conflicted = new Set();
    let count = 0;
    let overlap;
    for (const [index, current] of sorted.entries()) {
        for (let i = index + 1; i < sorted.length && sorted[i].start < current.end; i++) {
            const next = sorted[i];
            if (!overlaps(current.event, next.event)) continue;
            count++;
            conflicted.add(current.event);
            conflicted.add(next.event);
            const end = Math.min(current.end, next.end);
            if (!overlap && next.start < end) overlap = {
                start: new Date(next.start), end: new Date(end),
                allDay: current.event.allDay && next.event.allDay
            };
        }
    }
    return { count, conflicted, overlap };
}

function MiniCalendar({ anchor, onPick }) {
    const [browsed, setBrowsed] = useState(null);
    const grid = useRef(null);
    const month = browsed?.anchor === anchor ? browsed.month : anchor;
    const days = monthGridDays(month);
    const today = dayKey(new Date());
    const selected = dayKey(anchor);
    const monthFocus = days.findIndex(day => dayKey(day) === selected);
    const [focused, setFocused] = useState("");
    const focusIndex = days.findIndex(day => dayKey(day) === focused);
    const tabStop = focusIndex >= 0 ? focusIndex : monthFocus >= 0 ? monthFocus : days.findIndex(day => day.getMonth() === month.getMonth());
    const browse = delta => setBrowsed({ anchor, month: addMonths(month, delta) });

    function moveFocus(event, index) {
        const offsets = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
        if (!Object.hasOwn(offsets, event.key)) return;
        event.preventDefault();
        const next = index + offsets[event.key];
        grid.current?.querySelectorAll("button")[next]?.focus();
    }

    return h("div", { className: styles.miniCalendar, "data-dsh-card": "" },
        h("div", { className: styles.miniHeading },
            h("h2", null, formatMonthTitle(month)),
            h("div", { className: styles.period },
                h(IconButton, { icon: "left", label: calendarText("上个月", "Previous month"), onClick: () => browse(-1) }),
                h(IconButton, { icon: "right", label: calendarText("下个月", "Next month"), onClick: () => browse(1) })
            )
        ),
        h("div", { className: styles.miniGrid, ref: grid },
            WEEKDAYS_ZH.map((day, index) => h("span", { className: styles.miniWeekday, key: day, title: weekDayLabel(index) }, UI_LANG === "en" ? WEEKDAYS_EN[index].slice(0, 2) : day)),
            days.map((day, index) => {
                const key = dayKey(day);
                return h("button", {
                    key, type: "button", onClick: () => onPick(day), onFocus: () => setFocused(key),
                    className: clsx(styles.miniDay, day.getMonth() !== month.getMonth() && styles.out),
                    "aria-pressed": selected === key, "aria-current": today === key ? "date" : undefined,
                    "aria-label": formatDay(day, { withYear: true }),
                    tabIndex: index === tabStop ? 0 : -1,
                    onKeyDown: event => moveFocus(event, index)
                }, day.getDate());
            })
        )
    );
}

function ScheduleRail({ id, anchor, onPick, source, showing, onVisibilityChange, calendars, hiddenCalendars, onToggleCalendar, conflicts, overlap, workbench, loading, onReviewConflicts }) {
    const hasConflicts = conflicts > 0;
    const conflictText = hasConflicts
        ? calendarText(conflicts + " 处时间重叠", conflicts === 1 ? "1 scheduling overlap" : conflicts + " scheduling overlaps")
        : calendarText("当前范围无冲突", "No conflicts in this range");
    return h("aside", { id, className: styles.rail, "aria-label": calendarText("日历侧栏", "Calendar sidebar") },
        h("div", { className: styles.railScroll },
            h(MiniCalendar, { anchor, onPick }),
            h("section", { className: styles.railSection },
                h("h2", null, calendars ? calendarText("日历", "Calendars") : calendarText("已连接日历", "Connected calendar")),
                h("div", { className: styles.calendarSource }, source && calendars
                    ? calendars.map(row => h(Chk, { key: row.id, checked: showing && !hiddenCalendars.has(row.id), label: row.name, title: row.name, onChange: () => onToggleCalendar(row.id) }))
                    : source
                    ? h(Chk, { checked: showing, label: source, title: source, onChange: onVisibilityChange })
                    : loading ? renderDshSkeleton(React, { variant: "text", lines: 1, label: t("state.loading") })
                        : h("p", { className: styles["dshc-sub"] }, calendarText("尚未连接日历", "No calendar connected"))),
                source && showing ? h("div", { className: clsx(styles.conflictCard, hasConflicts && styles.warn), "data-dsh-card": "" },
                    h(Icon, { name: hasConflicts ? "warning" : "check", size: 14 }),
                    h("div", null,
                        h("span", { role: "status" }, conflictText),
                        workbench && overlap ? h("div", { className: styles.conflictRange }, formatWhen(overlap)) : null,
                        hasConflicts && onReviewConflicts ? h(Btn, {
                            variant: "ghost", className: styles.conflictLink, onClick: onReviewConflicts
                        }, calendarText("查看冲突", "Review conflicts")) : null
                    )
                ) : null
            )
        )
    );
}

const DSH_CALENDAR_DRAFT_ROUTE = "api/dsh-calendar/draft";
const DSH_CALENDAR_IMAGE_TYPES = ["image/png", "image/jpeg", "image/webp"];

function draftImageData(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error(calendarText("无法读取截图。", "Could not read the screenshot.")));
        reader.readAsDataURL(file);
    });
}

function CalendarDraftInput({ onFill, onBusy }) {
    const id = useId();
    const [input, setInput] = useState("");
    const [file, setFile] = useState(null);
    const [models, setModels] = useState(null);
    const [selection, setSelection] = useState("");
    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);
    const request = useRef(null);
    const fileInput = useRef(null);

    useEffect(() => {
        const controller = new AbortController();
        api("models", {}, controller.signal, DSH_CALENDAR_DRAFT_ROUTE).then(value => {
            if (!controller.signal.aborted) setModels(value.models);
        }).catch(reason => {
            if (!controller.signal.aborted) {
                setModels([]);
                setError(backendMessage(reason));
            }
        });
        return () => {
            controller.abort();
            request.current?.abort();
            onBusy(false);
        };
    }, [onBusy]);

    const keyOf = model => JSON.stringify([model.provider, model.model]);
    const candidates = (models || []).filter(model => !file || model.image);
    const chosen = candidates.find(model => keyOf(model) === selection) || (candidates.length === 1 ? candidates[0] : null);
    const hint = models === null ? calendarText("正在读取 DSH 模型…", "Loading DSH models…")
        : candidates.length === 0 ? file
            ? calendarText("请在 DSH 中配置支持图片输入的模型，或移除截图后粘贴文字。", "Configure an image-capable DSH model or remove the screenshot and paste text.")
            : calendarText("请在 DSH 中配置模型，也可以直接手填日程。", "Configure a model in DSH or fill the event manually.")
        : null;
    const selectFile = candidate => {
        if (!candidate || busy) return;
        if (!DSH_CALENDAR_IMAGE_TYPES.includes(candidate.type) || candidate.size > 2 * 1024 * 1024) {
            setError(calendarText("请选择 2 MiB 以内的 PNG、JPEG 或 WebP 截图。", "Choose a PNG, JPEG, or WebP screenshot up to 2 MiB."));
            return;
        }
        setFile(candidate);
        setError("");
    };
    const suggest = async () => {
        if (!chosen || (!input.trim() && !file) || request.current) return;
        const controller = new AbortController();
        request.current = controller;
        setBusy(true);
        onBusy(true);
        setError("");
        try {
            const image = file ? await draftImageData(file) : undefined;
            controller.signal.throwIfAborted();
            const fields = await api("suggest", {
                provider: chosen.provider, model: chosen.model, text: input, image,
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"
            }, controller.signal, DSH_CALENDAR_DRAFT_ROUTE);
            if (!controller.signal.aborted) onFill(fields);
        } catch (reason) {
            if (!controller.signal.aborted) setError(backendMessage(reason));
        } finally {
            request.current = null;
            if (!controller.signal.aborted) {
                setBusy(false);
                onBusy(false);
            }
        }
    };

    const modelLabel = calendarText("日程解析模型", "Event extraction model");
    return h("div", { className: styles["dshc-field"], "aria-busy": busy },
        h("label", { htmlFor: id + "-text" }, calendarText("日程文字", "Event text")),
        h("textarea", {
            id: id + "-text", className: styles["dshc-input"], value: input, disabled: busy, maxLength: 6000,
            placeholder: calendarText("周五下午三点到四点在 302 和导师开会", "Meeting with my supervisor in room 302, Friday from 3 to 4 pm"),
            onChange: event => setInput(event.target.value),
            onPaste: event => {
                const incoming = [...event.clipboardData.files].find(item => item.type.startsWith("image/"));
                if (incoming) { event.preventDefault(); selectFile(incoming); }
            }
        }),
        h("div", {
            className: styles["dshc-field"],
            onDragOver: event => { if (!busy && event.dataTransfer.types.includes("Files")) event.preventDefault(); },
            onDrop: event => {
                if (!event.dataTransfer.files.length) return;
                event.preventDefault();
                selectFile(event.dataTransfer.files[0]);
            }
        },
            h("span", { id: id + "-image-label" }, calendarText("截图（可选，可拖入或粘贴）", "Screenshot (optional, drop or paste)")),
            h("input", {
                ref: fileInput, type: "file", hidden: true,
                accept: DSH_CALENDAR_IMAGE_TYPES.join(","), disabled: busy,
                onChange: event => { selectFile(event.target.files[0]); event.target.value = ""; }
            }),
            h("div", { className: styles.draftControls },
                h(Btn, { disabled: busy, "aria-describedby": id + "-image-label", onClick: () => fileInput.current?.click() },
                    file ? calendarText("更换截图", "Replace screenshot") : calendarText("选择截图", "Choose screenshot")),
                file ? h("span", { className: styles["dshc-sub"] }, file.name) : null,
                file ? h(Btn, { variant: "ghost", disabled: busy, onClick: () => { setFile(null); setError(""); } },
                    calendarText("移除截图", "Remove screenshot")) : null
            )
        ),
        candidates.length ? h(Picker, {
            id: id + "-model", label: modelLabel, disabled: busy,
            value: chosen ? keyOf(chosen) : "",
            options: [{ id: "", label: modelLabel }].concat(candidates.map(model => ({ id: keyOf(model), label: model.label }))),
            onChange: setSelection
        }) : null,
        hint ? h("p", { role: "status", className: styles["dshc-sub"] }, hint) : null,
        error ? h("p", { role: "alert", className: clsx(styles["dshc-alert"], styles.error) }, error) : null,
        h("p", { className: styles["dshc-sub"] }, calendarText(
            "解析会将这里的文字和截图发送给所选 DSH 模型。核对草稿后点击保存才会写入日历。",
            "Extraction sends this text and screenshot to the selected DSH model. Review the draft and select Save to create the event."
        )),
        h("div", null, h(Btn, { disabled: busy || !chosen || (!input.trim() && !file), onClick: suggest },
            busy ? calendarText("正在解析…", "Extracting…") : calendarText("生成草稿", "Generate draft")))
    );
}

const CALENDAR_LAYOUT_KEY = "dsh-calendar:layout";
const CALENDAR_RAIL_KEY = "dsh-calendar:rail-width";
const RAIL_MIN_WIDTH = 180;
const RAIL_MAX_WIDTH = 360;
const RAIL_DEFAULT_WIDTH = 236;
const LAYOUT_CLASSES = {
    native: undefined,
    floating: styles.layoutFloating,
    spotlight: styles.layoutSpotlight,
    cards: styles.layoutCards
};

function readCalendarPreference(key) {
    try { return window.localStorage.getItem(key); } catch { return null; }
}

function storeCalendarPreference(key, value) {
    try { window.localStorage.setItem(key, String(value)); } catch { /* Private storage is optional. */ }
}

function loadCalendarLayout() {
    const raw = readCalendarPreference(CALENDAR_LAYOUT_KEY);
    const layout = raw === "bento" ? "cards" : raw;
    return Object.hasOwn(LAYOUT_CLASSES, layout) ? layout : "cards";
}

function calendarLayoutOptions() {
    return [
        { id: "native", label: calendarText("DSH 原生", "DSH native"), shortLabel: calendarText("原生", "Native") },
        { id: "floating", label: calendarText("Arc 浮岛", "Arc Floating"), shortLabel: calendarText("浮岛", "Island") },
        { id: "spotlight", label: calendarText("Raycast 聚光", "Raycast Spotlight"), shortLabel: calendarText("聚光", "Focus") },
        { id: "cards", label: calendarText("Bento 卡片", "Bento Cards"), shortLabel: calendarText("Bento", "Bento") }
    ];
}

function formatCountdownBadge(event, now) {
    if (event.allDay) return calendarText("全天", "All day");
    const s = startDate(event).getTime();
    const e = endDate(event).getTime();
    const tNow = now.getTime();
    if (s <= tNow && e > tNow) return calendarText("进行中", "In progress");
    const mins = Math.max(1, Math.round((s - tNow) / 60000));
    if (mins < 60) return calendarText(mins + " 分钟后", "in " + mins + "m");
    const hours = Math.floor(mins / 60);
    const rem = mins % 60;
    if (hours < 24) return calendarText(rem > 0 ? hours + "h" + rem + "m 后" : hours + " 小时后", rem > 0 ? "in " + hours + "h " + rem + "m" : "in " + hours + "h");
    const days = Math.max(1, daysBetween(now, startDate(event)));
    return calendarText(days + " 天后", "in " + days + "d");
}

function TodayFocusRibbon({ events, conflicts, canCreate, readOnly = false, configured, demo, onJumpToday, onOpenEvent, onReviewConflicts, onCreate }) {
    const now = new Date();
    const todayText = UI_LANG === "en"
        ? now.toLocaleDateString("en-US", { month: "short", day: "numeric", weekday: "short" })
        : (now.getMonth() + 1) + "月" + now.getDate() + "日 周" + WEEKDAYS_ZH[isoWeekday(now) - 1];
    const upcoming = sortForDisplay(events).filter(ev => {
        if (ev.status?.toUpperCase() === "CANCELLED") return false;
        if (ev.allDay) return dayKey(endDate(ev)) > dayKey(now);
        return endDate(ev).getTime() > now.getTime();
    });
    const nextEvent = upcoming[0] || null;
    const hasConflicts = conflicts > 0;
    return h("div", {
        className: styles.focusRibbon,
        "data-calendar-focus-ribbon": "true",
        "data-tour": "calendar-focus-ribbon",
        "data-window-drag-exclude": "",
        role: "region",
        "aria-label": calendarText("今日聚焦条", "Today focus ribbon")
    },
        h("button", {
            type: "button",
            className: styles.focusDatePill,
            onClick: onJumpToday,
            title: calendarText("回到今天", "Jump to today")
        },
            h("span", { className: styles.focusDot, "aria-hidden": "true" }),
            h("span", { className: styles.focusDateLabel }, calendarText("今天", "Today")),
            h("span", { className: styles.focusDateValue }, todayText)
        ),
        nextEvent ? h("button", {
            type: "button",
            className: styles.focusNextPill,
            onClick: () => onOpenEvent(nextEvent),
            title: formatWhen(nextEvent)
        },
            h("span", { className: styles.focusNextTag }, calendarText("下一场", "Next")),
            h("span", { className: styles.focusNextTitle }, nextEvent.summary),
            h("span", { className: styles.focusCountdown }, (nextEvent.allDay ? "" : hhmm(startDate(nextEvent)) + " · ") + formatCountdownBadge(nextEvent, now))
        ) : h("div", { className: styles.focusClearPill },
            h("span", null, demo ? calendarText("示例日历 · 今日余下时间空闲", "Sample · Clear ahead") : configured === false ? calendarText("连接日历后自动显示下一场日程", "Connect calendar to track upcoming events") : calendarText("今日余下时间空闲", "Clear schedule ahead"))
        ),
        h("div", { className: styles.focusRight },
            hasConflicts ? h("button", {
                type: "button",
                className: clsx(styles.focusConflictPill, styles.warn),
                onClick: onReviewConflicts
            }, h(Icon, { name: "warning", size: 13 }), h("span", null, calendarText(conflicts + " 处冲突", conflicts + " conflict" + (conflicts === 1 ? "" : "s"))))
            : h("span", { className: styles.focusConflictPill },
                h(Icon, { name: "check", size: 13 }),
                h("span", null, calendarText("无时间冲突", "Conflict-free"))
            ),
            readOnly ? null : h("button", {
                type: "button",
                className: styles.focusQuickNew,
                disabled: !canCreate,
                onClick: onCreate
            }, calendarText("+ 快速新建", "+ Quick add"))
        )
    );
}

function CalendarLayoutPicker({ layout, options, onChange }) {
    const label = calendarText("布局", "Layout");
    return h(React.Fragment, null,
        h("div", { className: styles.layoutChoices, role: "group", "aria-label": label, "data-tour": "calendar-layout" },
            options.map(option => h(Btn, {
                key: option.id, variant: option.id === layout ? "primary" : "ghost",
                title: option.label,
                "aria-label": option.label,
                "aria-pressed": option.id === layout, onClick: () => onChange(option.id)
            }, option.shortLabel || option.label))
        ),
        h("div", { className: styles.layoutDropdown },
            h(Picker, { label, value: layout, compact: true, options, onChange })
        )
    );
}

function CalendarShortcutHints({ quickKey, canCreate = true }) {
    const hints = [
        ["W / M / A", calendarText("周 / 月 / 议程", "Week / Month / Agenda")],
        ...(canCreate ? [["N", t("action.new")]] : []),
        ["F", calendarText("找空闲时段", "Find available time")],
        [quickKey, calendarText("快捷操作", "Quick actions")]
    ];
    return h("div", { className: styles.shortcutHints },
        hints.map(([keys, label]) => h("span", { key: keys },
            h("kbd", { className: styles.commandKey }, keys), label
        ))
    );
}

function ScheduleLayout({ resizable, rail, children }) {
    const split = useResizableSplit(React, {
        key: CALENDAR_RAIL_KEY,
        initial: RAIL_DEFAULT_WIDTH,
        min: RAIL_MIN_WIDTH,
        max: RAIL_MAX_WIDTH
    });
    return h("div", {
        className: styles.schedule,
        "data-resizable": resizable ? "" : undefined,
        style: resizable ? { "--calendar-rail-width": split.size + "px" } : undefined
    },
        rail,
        resizable ? renderDshSplitResizer(React, {
            ...split.resizerProps,
            className: styles.railHandle,
            "aria-controls": rail?.props?.id,
            label: calendarText("调整日历侧栏宽度", "Resize calendar sidebar")
        }) : null,
        children
    );
}

function CalendarCommands({ actions, onClose }) {
    const title = calendarText("日历快捷操作", "Calendar quick actions");
    const searchLabel = calendarText("搜索日历操作", "Search calendar actions");
    const [query, setQuery] = useState("");
    const bodyRef = useRef(null);
    const keyword = query.trim().toLocaleLowerCase();
    const matches = actions.filter(action => action.label.toLocaleLowerCase().includes(keyword));
    const run = (action) => {
        if (!action || action.disabled) return;
        onClose();
        action.run();
    };
    function navigate(event) {
        if (event.isComposing) return;
        const input = bodyRef.current.querySelector("input");
        if (event.target === input && event.key === "Enter") {
            event.preventDefault();
            run(matches.find(action => !action.disabled));
            return;
        }
        if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
        const controls = [input, ...bodyRef.current.querySelectorAll("button:not(:disabled)")];
        const index = controls.indexOf(event.target);
        if (index < 0) return;
        event.preventDefault();
        const next = index + (event.key === "ArrowDown" ? 1 : -1);
        controls[Math.max(0, Math.min(controls.length - 1, next))]?.focus();
    }
    return h(Dlg, {
        open: true, title, onClose, closeLabel: calendarText("关闭", "Close"),
        children: h("div", { className: styles.commandBody, ref: bodyRef, onKeyDown: navigate },
            h(Txt, {
                type: "search", icon: h(Icon, { name: "search" }), value: query,
                "data-modal-autofocus": true, "aria-label": searchLabel, placeholder: searchLabel,
                onChange: event => setQuery(event.target.value)
            }),
            matches.length ? h("div", { className: styles.commandList }, matches.map(action => h(Btn, {
                key: action.id, variant: "ghost", className: styles.commandRow,
                onClick: () => run(action), disabled: action.disabled
            },
                h("span", null, action.label),
                action.key ? h("kbd", { className: styles.commandKey }, action.key.toUpperCase()) : null
            ))) : h("p", { className: styles["dshc-sub"], role: "status" }, calendarText("没有匹配的操作", "No matching actions"))
        )
    });
}

function CalendarConflicts({ events, onPick, onClose }) {
    return h(Dlg, {
        open: true, title: calendarText("日程冲突", "Scheduling conflicts"), onClose, closeLabel: calendarText("关闭", "Close"),
        children: events.size
            ? h("div", { className: styles.conflictList }, sortForDisplay([...events]).map(event => h(Row, {
                key: eventKey(event), event, onClick: () => { onClose(); onPick(event); }
            })))
            : h("p", { className: styles["dshc-sub"], role: "status" }, calendarText("当前范围无冲突", "No conflicts in this range"))
    });
}

const CALENDAR_TOUR_KEY = "dsh-calendar.tour.v1";
let calendarTourSessionDone = false;

function readCalendarTourDone(storageKey = CALENDAR_TOUR_KEY) {
    if (calendarTourSessionDone && storageKey === CALENDAR_TOUR_KEY) return true;
    try {
        return typeof window !== "undefined" && window.localStorage?.getItem(storageKey) === "done";
    } catch {
        return false;
    }
}

function writeCalendarTourDone(storageKey = CALENDAR_TOUR_KEY) {
    if (storageKey === CALENDAR_TOUR_KEY) calendarTourSessionDone = true;
    try {
        if (typeof window !== "undefined") window.localStorage?.setItem(storageKey, "done");
    } catch { /* ignore */ }
}

function computeTourLayout(target, preferredSide, cardEl) {
    const vw = (typeof window !== "undefined" && window.innerWidth) || 1280;
    const vh = (typeof window !== "undefined" && window.innerHeight) || 800;
    const cw = cardEl?.offsetWidth || 320;
    const ch = cardEl?.offsetHeight || 196;
    const pad = 5;
    const gap = 12;
    const raw = target?.getBoundingClientRect?.();
    if (!target) {
        return {
            spotlight: null,
            side: "center",
            left: Math.max(12, Math.round((vw - cw) / 2)),
            top: Math.max(12, Math.round((vh - ch) / 2)),
            arrowX: 28,
            arrowY: 24
        };
    }
    const hasBox = Boolean(raw && (raw.width > 0 || raw.height > 0));
    const rect = hasBox ? raw : { left: 120, top: 72, width: 140, height: 32 };
    const spotlight = {
        left: Math.round(rect.left - pad),
        top: Math.round(rect.top - pad),
        width: Math.round(rect.width + pad * 2),
        height: Math.round(rect.height + pad * 2)
    };
    const spaceBottom = vh - spotlight.top - spotlight.height;
    const spaceTop = spotlight.top;
    const spaceRight = vw - spotlight.left - spotlight.width;
    const spaceLeft = spotlight.left;
    let side = preferredSide || "bottom";
    if (side === "right" && spaceRight < cw + gap + 12) {
        side = spaceBottom >= ch + gap + 12 ? "bottom" : spaceLeft >= cw + gap + 12 ? "left" : "top";
    } else if (side === "left" && spaceLeft < cw + gap + 12) {
        side = spaceRight >= cw + gap + 12 ? "right" : "bottom";
    } else if (side === "bottom" && spaceBottom < ch + gap + 12 && spaceTop > spaceBottom) {
        side = "top";
    } else if (side === "top" && spaceTop < ch + gap + 12 && spaceBottom > spaceTop) {
        side = "bottom";
    }
    let left = spotlight.left;
    let top = spotlight.top + spotlight.height + gap;
    if (side === "top") top = spotlight.top - ch - gap;
    else if (side === "right") { left = spotlight.left + spotlight.width + gap; top = spotlight.top; }
    else if (side === "left") { left = spotlight.left - cw - gap; top = spotlight.top; }
    left = Math.round(Math.max(12, Math.min(vw - cw - 12, left)));
    top = Math.round(Math.max(12, Math.min(vh - ch - 12, top)));
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return {
        spotlight,
        side,
        left,
        top,
        arrowX: Math.round(Math.max(18, Math.min(cw - 18, centerX - left))),
        arrowY: Math.round(Math.max(18, Math.min(ch - 18, centerY - top)))
    };
}

function CoachmarkTour({ rootRef, steps = [], step = 0, manual = false, style = "harness", font = DSH_DEFAULT_FONT, appearance, lang = "zh", activeKey = "", layout: rawLayout, setLayout, onStep, onClose, onCopyPrompt }) {
    const activeStyle = normalizeDshStyle(style);
    const activeFont = normalizeDshFont(font ?? readDshFont());
    const layerRef = useRef(null);
    const cardRef = useRef(null);
    const nextBtnRef = useRef(null);
    const copyTimerRef = useRef(null);
    const lastStatusRef = useRef("");
    const [copied, setCopied] = useState(false);
    const [statusMsg, setStatusMsg] = useState("");
    const titleId = (typeof useId === "function" ? useId() : "dsh-calendar-tour") + "-title";
    const isEn = String(lang).startsWith("en");
    const l = (zh, en) => (isEn ? en : zh);
    const current = steps[Math.max(0, Math.min(steps.length - 1, step))] || {};
    const layout = rawLayout && typeof rawLayout === "object" && rawLayout.side
        ? rawLayout
        : { spotlight: null, side: current.side || "bottom", left: 24, top: 76, arrowX: 28, arrowY: 24 };

    useEffect(() => {
        const node = layerRef.current;
        if (!node) return undefined;
        try {
            node.setAttribute?.("popover", "manual");
            node.showPopover?.();
        } catch { /* ignore */ }
        return () => {
            if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
            try { node.hidePopover?.(); } catch { /* ignore */ }
        };
    }, []);

    useEffect(() => {
        setCopied(false);
        setStatusMsg("");
    }, [step]);

    useEffect(() => {
        function safeQuery(scope, selector) {
            if (!selector || typeof scope.querySelector !== "function") return null;
            if (selector.startsWith("#") && !/[\s>+~[\].,()]/.test(selector.slice(1))) {
                const id = selector.slice(1).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
                try { return scope.querySelector('[id="' + id + '"]'); } catch { /* ignore */ }
            }
            try { return scope.querySelector(selector); } catch { return null; }
        }
        function measure() {
            const scope = rootRef?.current || (typeof document !== "undefined" ? document : null);
            if (!scope || typeof scope.querySelector !== "function") return;
            const target = safeQuery(scope, current.selector) || safeQuery(scope, current.fallback) || null;
            setLayout?.(computeTourLayout(target, current.side, cardRef.current));
        }
        measure();
        const raf = typeof requestAnimationFrame === "function" ? requestAnimationFrame(measure) : null;
        if (typeof window === "undefined" || typeof window.addEventListener !== "function") {
            return () => { if (raf && typeof cancelAnimationFrame === "function") cancelAnimationFrame(raf); };
        }
        window.addEventListener("resize", measure, { passive: true });
        window.addEventListener("scroll", measure, true);
        return () => {
            if (raf && typeof cancelAnimationFrame === "function") cancelAnimationFrame(raf);
            window.removeEventListener("resize", measure);
            window.removeEventListener("scroll", measure, true);
        };
    }, [step, activeKey, current.selector, current.fallback, current.side]);

    useEffect(() => {
        if (!manual) return;
        (nextBtnRef.current || cardRef.current?.querySelector?.("[data-tour-next]"))?.focus?.();
    }, [manual, step]);

    async function handleCopy() {
        if (!current.prompt) return;
        const ok = onCopyPrompt ? await onCopyPrompt(current.prompt) : await copyText(current.prompt);
        if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
        let msg = ok !== false ? l("已复制指令", "Copied prompt") : l("复制失败", "Copy failed");
        if (msg === lastStatusRef.current) msg += "\u00A0";
        lastStatusRef.current = msg;
        setCopied(ok !== false);
        setStatusMsg(msg);
        copyTimerRef.current = setTimeout(() => {
            setCopied(false);
            setStatusMsg("");
        }, 1800);
    }

    const isLast = step >= steps.length - 1;
    function finish() { onClose?.(manual); }
    function onKeyDown(event) {
        if (event.isComposing || event.nativeEvent?.isComposing) return;
        if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); finish(); }
        else if (event.key === "ArrowRight" && !isLast) { event.preventDefault(); onStep?.(step + 1, true); }
        else if (event.key === "ArrowLeft" && step > 0) { event.preventDefault(); onStep?.(step - 1, true); }
    }

    return h("div", {
        ref: layerRef,
        className: styles.tourLayer,
        style: appearance,
        "data-dsh-style": activeStyle,
        "data-dsh-font": activeFont,
        "data-calendar-tour": current.id || String(step),
        "data-window-drag-exclude": ""
    },
        layout.spotlight
            ? h("div", {
                className: styles.tourSpotlight,
                "data-tour-spotlight": current.id || String(step),
                "aria-hidden": "true",
                style: {
                    left: layout.spotlight.left + "px",
                    top: layout.spotlight.top + "px",
                    width: layout.spotlight.width + "px",
                    height: layout.spotlight.height + "px"
                }
            })
            : h("div", { className: styles.tourBackdropFallback, "aria-hidden": "true" }),
        h("div", {
            ref: cardRef,
            role: "dialog",
            "aria-modal": "false",
            "aria-labelledby": titleId,
            tabIndex: -1,
            onKeyDown,
            className: styles.tourCard,
            "data-side": layout.side,
            "data-tour-card": current.id || String(step),
            style: {
                left: layout.left + "px",
                top: layout.top + "px",
                "--arrow-x": layout.arrowX + "px",
                "--arrow-y": layout.arrowY + "px"
            }
        },
            h("span", { className: styles.tourArrow, "data-tour-arrow": layout.side, "aria-hidden": "true" }),
            h("div", { className: styles.tourHead },
                h("div", { className: styles.tourStepMeta },
                    h("span", { className: styles.tourStepBadge }, (step + 1) + " / " + steps.length),
                    h("span", { className: styles.tourDots, "aria-hidden": "true" },
                        steps.map((item, idx) => h("span", { key: item.id || idx, className: styles.tourDot, "data-active": idx === step ? "true" : undefined })))),
                h("button", { type: "button", className: styles.tourSkip, onClick: finish }, l("跳过", "Skip"))),
            h("h2", { id: titleId, className: styles.tourTitle }, current.title),
            h("p", { className: styles.tourDesc }, current.desc),
            current.prompt ? h("div", { className: styles.tourInlineAction },
                h(Btn, {
                    variant: "outline",
                    icon: copied ? "check" : "copy",
                    "data-copy-prompt": current.prompt,
                    "data-copied": copied ? "true" : undefined,
                    onClick: () => { void handleCopy(); }
                }, copied ? l("已复制", "Copied") : (current.promptLabel || l("复制对话指令", "Copy prompt"))),
                h("span", { className: styles.copyStatus, role: "status" }, statusMsg)) : null,
            h("div", { className: styles.tourFooter },
                step > 0
                    ? h(Btn, { variant: "ghost", onClick: () => onStep?.(step - 1, true), "data-tour-prev": "" }, l("上一步", "Back"))
                    : h("span", null),
                h("div", { className: styles.tourNav },
                    h(Btn, {
                        ref: nextBtnRef,
                        variant: "primary",
                        "data-tour-next": "",
                        onClick: () => (isLast ? finish() : onStep?.(step + 1, true))
                    }, isLast ? l("完成引导", "Done") : l("下一步", "Next"))))));
}

        // Resolve against the Harness document base, including any reverse-proxy prefix.
        const ROUTE = "api/dsh-calendar/settings";
        const IMPORT_ROUTE = "api/dsh-calendar/import";
        /** 三视图；order 决定 tab 顺序。 */
        const VIEWS = ["month", "week", "agenda"];
        const WEEKDAYS_ZH = ["一", "二", "三", "四", "五", "六", "日"];
        /** 上次用的视图：用户下次打开面板不该又跳回「月」。localStorage 不可用（隐私模式）就退回 default。 */
        const VIEW_STORAGE_KEY = "dsh-calendar:view";
        function loadStoredView() {
            try {
                const stored = window.localStorage.getItem(VIEW_STORAGE_KEY);
                return VIEWS.indexOf(stored) === -1 ? "month" : stored;
            }
            catch (error) {
                return "month";
            }
        }
        function storeView(view) {
            try {
                window.localStorage.setItem(VIEW_STORAGE_KEY, view);
            }
            catch (error) { /* 写不进去就算了 */ }
        }
        const UI = {
            zh: {
                "nav.title": "日历",
                "section.title": "日历",
                "section.intro": "在设置页直接查看和编辑 CalDAV 上的日程：月/周/议程三种视图，点一下就能改时间、换标题、加重复规则。",
                "view.month": "月", "view.week": "周", "view.agenda": "议程",
                "action.today": "今天", "action.prev": "上", "action.next": "下", "action.new": "新建日程",
                "action.refresh": "刷新", "action.retry": "重试", "action.edit": "编辑", "action.delete": "删除",
                "action.save": "保存", "action.cancel": "取消", "action.confirmDelete": "确认删除",
                "action.open": "打开", "action.copy": "复制 uid", "action.copied": "已复制",
                "action.demo": "查看示例", "action.exitDemo": "退出示例",
                "state.loading": "正在读取日历…", "state.empty": "这段时间没有日程。",
                "state.notConfigured": "还没配置 CalDAV 账号",
                "state.notConfiguredHint": "点击“连接设置”，选择日历服务并填写账号信息，测试连接后保存即可。也可以先查看示例，了解日历的用法。",
                "state.readonly": "只读",
                "demo.banner": "示例日历为只读，可以切换视图和查看详情。点击「退出示例」后连接自己的日历，即可创建和修改日程。",
                "field.summary": "标题", "field.date": "日期", "field.start": "开始", "field.end": "结束",
                "field.allDay": "全天", "field.location": "地点", "field.description": "备注",
                "field.repeat": "重复", "field.uid": "事件 uid", "field.when": "时间", "field.duration": "时长",
                "repeat.none": "不重复", "repeat.daily": "每天", "repeat.weekly": "每周", "repeat.monthly": "每月", "repeat.yearly": "每年", "repeat.custom": "自定义 RRULE",
                "repeat.weeklyEvery": "每周（{n} 次）", "repeat.recurring": "重复", "repeat.occurrence": "系列中的一次",
                "conflict.title": "这个时段已有 {n} 个日程，会重叠：", "conflict.hint": "仍然保存？",
                "error.title": "操作失败", "error.load": "读取日历失败",
                "confirm.delete": "删除「{name}」？这个操作会同步到你的日历服务器。",
                "confirm.deleteSeries": "将删除「{name}」整个重复系列的所有场次，包含当前视图外的场次。无法撤销。",
                "form.series": "正在编辑整个重复系列，所有场次都会受影响。含取消或单独改期场次时，请到原日历客户端调整时间和规则。",
                "form.newTitle": "新建日程", "form.editTitle": "编辑日程",
                "form.required": "标题和时间都要填。",
                "day.today": "今天", "day.tomorrow": "明天", "day.yesterday": "昨天",
                "count.events": "{n} 个日程", "count.occurrences": "含 {n} 次重复展开",
                "format.duration.hm": "{h} 小时 {m} 分", "format.duration.h": "{h} 小时", "format.duration.m": "{m} 分钟", "format.duration.zero": "0 分钟",
                "format.allday": "全天",
                "drag.hint": "提示：周视图里可以直接拖动日程改期 —— 上下拖改时间、左右拖换天，拖块底部改时长；键盘 ↑/↓ 挪 15 分钟、Shift+↑/↓ 挪 1 小时、←/→ 挪一天。",
                "drag.drop": "松手即改到这里",
                "drag.conflict": "与 {n} 个日程重叠",
                "drag.keep": "仍可松手",
                "drag.moveTitle": "可拖动改期",
                "drag.resizeTitle": "拖动改时长",
                "move.recurringUnsupported": "重复日程暂不支持拖动改期：请在详情里用「编辑」（拖动会重锚系列起点，早于该次的实例会消失）。",
                "move.tooLong": "超过 24 小时的日程暂不支持拖动改期。",
                "move.saved": "已改期",
                "move.undo": "撤销",
                "fab.label": "在每个页面右下角显示日历小按钮",
                "fab.hint": "关掉后仍可从侧栏打开日历。",
                "move.failed": "改期失败：{message}",
                "conn.button": "连接设置",
                "conn.title": "CalDAV 连接设置",
                "conn.intro": "测试连接不会修改日历。连接成功后，点击“保存并启用”。",
                "conn.provider": "服务商",
                "provider.custom": "自建 CalDAV",
                "conn.caldavUrl": "日历集合 URL",
                "conn.username": "账号",
                "conn.password": "密码 / 应用专用密码",
                "conn.host": "服务器地址",
                "conn.user": "用户名",
                "conn.calendar": "日历名（如 personal）",
                "conn.calendarId": "日历 ID（通常是你的邮箱）",
                "conn.clientId": "clientId",
                "conn.clientSecret": "clientSecret",
                "conn.refreshToken": "refreshToken",
                "conn.tokenUrl": "令牌地址（可留空）",
                "conn.proxyUrl": "代理地址（可留空）",
                "conn.keep": "已配置，留空不改",
                "conn.test": "测试连接",
                "conn.testing": "正在连接…",
                "conn.save": "保存并启用",
                "conn.saving": "保存中…",
                "conn.ok": "连接成功：未来 30 天读到 {n} 个日程",
                "conn.okSample": "（例如：{sample}）",
                "conn.fail": "连接失败",
                "conn.savedToast": "连接已保存，工具下一次调用就用它",
                "conn.noSettings": "当前无法保存连接设置。请检查 DSH 与日历插件是否已更新，再重新打开此页面。",
                "conn.storageFallback": "连接信息保存在运行 DSH 的设备上，保存后立即生效。",
                "conn.needProvider": "先选一个服务商",
                "conn.current": "当前：{summary}",
                "conn.steps": "怎么拿到这些值？（点开看步骤）",
                "link.googleConsole": "打开 Google Cloud 凭据页 ↗",
                "link.googlePlayground": "打开 OAuth Playground ↗",
                "link.appleId": "打开 Apple ID 设置 ↗",
                "hint.calendarId.google": "通常就是你的 Gmail 地址",
                "hint.clientId.google": "OAuth 客户端 ID，类型选「桌面应用」即可",
                "hint.refreshToken.google": "用下面步骤里的 OAuth Playground 换一次，长期有效",
                "hint.tokenUrl": "留空即用 Google 默认地址",
                "hint.caldavUrl.icloud": "已知集合地址时可以手动填写。公开订阅链接不能用于写入。",
                "hint.username.icloud": "你的 Apple ID 邮箱",
                "hint.password.icloud": "必须用 App 专用密码，不是 Apple ID 登录密码",
                "hint.host.nextcloud": "含 https://，结尾不要带 /",
                "hint.user.nextcloud": "拼 CalDAV 地址用的用户名（通常与登录名相同）",
                "hint.username.nextcloud": "用于认证的账号名；与上一栏不同时才需要分别填",
                "hint.calendar.nextcloud": "日历名，个人日历默认是 personal",
                "hint.caldavUrl.custom": "完整日历集合 URL，结尾的 / 别丢",
                "hint.username.custom": "登录账号 / 邮箱",
                "steps.google": ["在 Google Cloud 控制台新建项目，并启用「Google Calendar API」", "「凭据」→ 创建凭据 → OAuth 客户端 ID，类型选「桌面应用」，拿到 clientId 与 clientSecret", "打开 OAuth Playground（齿轮里勾 Use your own OAuth credentials，填上面的 clientId / clientSecret），授权 scope https://www.googleapis.com/auth/calendar，换取 refreshToken", "日历 ID 一般就是你的 Gmail 地址；四格填完点「测试连接」"],
                "steps.icloud": ["在 Apple 账户的「登录与安全」中生成 App 专用密码", "填写 Apple 账户和 App 专用密码，点击「发现日历」", "选择日历，再测试并保存连接"],
                "steps.nextcloud": ["服务器地址填 https://cloud.example.com（结尾不带 /）", "用户名 = 登录名；日历名在「日历」应用左侧能看到，个人日历默认叫 personal", "密码用 App 密码或登录密码，填完点「测试连接」"],
                "steps.custom": ["在服务商后台找到你日历的集合 URL（以 / 结尾），例如 https://cloud.example.com/remote.php/dav/calendars/用户名/日历名/", "账号填登录名，密码填授权码 / App 密码，填完点「测试连接」"],
                "conn.googleHint": "Google 必须用 OAuth：clientSecret 与 refreshToken 由一次授权换成，README 里有换取步骤；Google 不接受应用专用密码。",
                "conn.icloudHint": "用 Apple 账户和 App 专用密码发现日历。",
                "conn.nextcloudHint": "Nextcloud 填服务器地址 + 用户名 + 日历名即可，密码用 App 密码或登录密码。",
                "conn.customHint": "自建 CalDAV 直接给完整日历集合 URL（结尾的 / 别丢），形如 https://cloud.example.com/remote.php/dav/calendars/用户名/日历名/。"
            },
            en: {
                "nav.title": "Calendar",
                "section.title": "Calendar",
                "section.intro": "View and edit your CalDAV calendar right here: month, week and agenda views; click any event to retitle it, move it, or add a recurrence rule.",
                "view.month": "Month", "view.week": "Week", "view.agenda": "Agenda",
                "action.today": "Today", "action.prev": "Prev", "action.next": "Next", "action.new": "New event",
                "action.refresh": "Refresh", "action.retry": "Retry", "action.edit": "Edit", "action.delete": "Delete",
                "action.save": "Save", "action.cancel": "Cancel", "action.confirmDelete": "Delete anyway",
                "action.open": "Open", "action.copy": "Copy uid", "action.copied": "Copied",
                "action.demo": "See a sample", "action.exitDemo": "Exit sample",
                "state.loading": "Loading your calendar…", "state.empty": "Nothing scheduled in this range.",
                "state.notConfigured": "No CalDAV account configured yet",
                "state.notConfiguredHint": "Open Connection settings, choose your calendar service and enter your account details, then test and save the connection. You can also explore the sample calendar first.",
                "state.readonly": "read-only",
                "demo.banner": "This sample calendar is read-only. Switch views and open event details. Exit the sample and connect your calendar to create or edit events.",
                "field.summary": "Title", "field.date": "Date", "field.start": "Start", "field.end": "End",
                "field.allDay": "All day", "field.location": "Location", "field.description": "Notes",
                "field.repeat": "Repeats", "field.uid": "Event uid", "field.when": "When", "field.duration": "Duration",
                "repeat.none": "Does not repeat", "repeat.daily": "Daily", "repeat.weekly": "Weekly", "repeat.monthly": "Monthly", "repeat.yearly": "Yearly", "repeat.custom": "Custom RRULE",
                "repeat.weeklyEvery": "Weekly ({n} times)", "repeat.recurring": "Recurring", "repeat.occurrence": "One occurrence of a series",
                "conflict.title": "This slot already has {n} event(s); they overlap:", "conflict.hint": "Save anyway?",
                "error.title": "Something failed", "error.load": "Could not load the calendar",
                "confirm.delete": "Delete「{name}」? This is pushed to your calendar server.",
                "confirm.deleteSeries": "Delete every occurrence of {name}, including dates outside this view? This cannot be undone.",
                "form.series": "Editing the entire recurring series. All occurrences are affected. If it has cancelled or rescheduled occurrences, change times and rules in your original calendar app.",
                "form.newTitle": "New event", "form.editTitle": "Edit event",
                "form.required": "A title and a time range are required.",
                "day.today": "Today", "day.tomorrow": "Tomorrow", "day.yesterday": "Yesterday",
                "count.events": "{n} events", "count.occurrences": "{n} expanded occurrences",
                "format.duration.hm": "{h}h {m}m", "format.duration.h": "{h}h", "format.duration.m": "{m}m", "format.duration.zero": "0m",
                "format.allday": "All day",
                "drag.hint": "Tip: drag events in the week view to reschedule — up/down changes the time, left/right changes the day, the bottom edge changes the duration. Keyboard: ↑/↓ moves 15 min, Shift+↑/↓ an hour, ←/→ a day.",
                "drag.drop": "release to drop here",
                "drag.conflict": "overlaps {n} event(s)",
                "drag.keep": "you can still drop it",
                "drag.moveTitle": "drag to reschedule",
                "drag.resizeTitle": "drag to resize",
                "move.recurringUnsupported": "Recurring events cannot be dragged yet — use Edit in the details drawer (dragging would re-anchor the series and drop earlier occurrences).",
                "move.tooLong": "Events longer than 24 hours cannot be dragged yet.",
                "move.saved": "Rescheduled",
                "move.undo": "Undo",
                "fab.label": "Show the floating calendar button on every page",
                "fab.hint": "Turned off, the calendar is still in the sidebar.",
                "move.failed": "Could not reschedule: {message}",
                "conn.button": "Connection",
                "conn.title": "CalDAV connection",
                "conn.intro": "Testing the connection does not change your calendar. Once it succeeds, click Save and enable.",
                "conn.provider": "Provider",
                "provider.custom": "Custom CalDAV",
                "conn.caldavUrl": "Calendar collection URL",
                "conn.username": "Account",
                "conn.password": "Password / app-specific password",
                "conn.host": "Server",
                "conn.user": "Username",
                "conn.calendar": "Calendar name (e.g. personal)",
                "conn.calendarId": "Calendar ID (usually your email)",
                "conn.clientId": "clientId",
                "conn.clientSecret": "clientSecret",
                "conn.refreshToken": "refreshToken",
                "conn.tokenUrl": "Token URL (optional)",
                "conn.proxyUrl": "Proxy URL (optional)",
                "conn.keep": "configured — leave blank to keep",
                "conn.test": "Test connection",
                "conn.testing": "Connecting…",
                "conn.save": "Save and enable",
                "conn.saving": "Saving…",
                "conn.ok": "Connected: {n} events in the next 30 days",
                "conn.okSample": " (e.g. {sample})",
                "conn.fail": "Connection failed",
                "conn.savedToast": "Saved — the tools pick it up on their next call",
                "conn.noSettings": "Connection settings cannot be saved right now. Check that DSH and the calendar plugin are up to date, then reopen this page.",
                "conn.storageFallback": "Connection details are stored on the device running DSH. Saved changes take effect immediately.",
                "conn.needProvider": "Pick a provider first",
                "conn.current": "Now: {summary}",
                "conn.steps": "Where do these values come from?",
                "link.googleConsole": "Open Google Cloud credentials ↗",
                "link.googlePlayground": "Open OAuth Playground ↗",
                "link.appleId": "Open Apple ID settings ↗",
                "hint.calendarId.google": "usually your Gmail address",
                "hint.clientId.google": "an OAuth client ID; the desktop-app type works",
                "hint.refreshToken.google": "exchange it once in the OAuth Playground step below; it lasts",
                "hint.tokenUrl": "leave empty to use Google's default",
                "hint.caldavUrl.icloud": "Enter a collection URL if you already have one. Public subscription links are read-only.",
                "hint.username.icloud": "your Apple ID email",
                "hint.password.icloud": "an app-specific password, not your Apple ID password",
                "hint.host.nextcloud": "include https:// and drop any trailing /",
                "hint.user.nextcloud": "the username used to build the CalDAV URL",
                "hint.username.nextcloud": "the account used to authenticate; fill it separately only when it differs",
                "hint.calendar.nextcloud": "calendar name; the personal one is usually called personal",
                "hint.caldavUrl.custom": "the full collection URL — keep the trailing slash",
                "hint.username.custom": "login account / email",
                "steps.google": ["Create a project in the Google Cloud console and enable the Google Calendar API", "Credentials → Create credentials → OAuth client ID, type Desktop app; copy clientId and clientSecret", "Open the OAuth Playground (gear icon: Use your own OAuth credentials, paste clientId/clientSecret), authorize scope https://www.googleapis.com/auth/calendar and exchange a refreshToken", "The calendar ID is usually your Gmail address; then hit Test connection"],
                "steps.icloud": ["Create an app-specific password in your Apple Account under Sign-In and Security", "Enter your Apple Account and app-specific password, then select Discover calendars", "Choose a calendar, then test and save your connection"],
                "steps.nextcloud": ["Server: https://cloud.example.com (no trailing slash)", "Username = your login; the calendar name is shown in the Calendar app (personal by default)", "Use an app password or your login password, then hit Test connection"],
                "steps.custom": ["Find your calendar collection URL in the provider's settings (it ends with /), e.g. https://cloud.example.com/remote.php/dav/calendars/user/calendar/", "Fill the login account and an app password / token, then Test connection"],
                "conn.googleHint": "Google requires OAuth: exchange clientSecret and refreshToken once (see the README); Google does not accept app passwords.",
                "conn.icloudHint": "Discover calendars using your Apple Account and an app-specific password.",
                "conn.nextcloudHint": "Nextcloud needs the server URL, username and calendar name; any app password works.",
                "conn.customHint": "For a self-hosted CalDAV give the full collection URL (keep the trailing slash), e.g. https://cloud.example.com/remote.php/dav/calendars/user/calendar/."
            }
        };
        var UI_LANG = "zh";
        var relocalize = null;
        var activeLocaleService = null;
        // Backend guidance is localized separately from event titles and source content.
        const BACKEND_EN = {
            "请先选择 iCloud 服务商。": "Select iCloud as the calendar provider.",
            "请填写有效的 Apple 账户。": "Enter a valid Apple Account.",
            "iCloud 认证失败，请检查 Apple 账户与 App 专用密码。": "iCloud sign-in failed. Check your Apple Account and app-specific password.",
            "无法连接 iCloud，请检查网络或代理后重试。": "Could not connect to iCloud. Check your network or proxy and retry.",
            "iCloud 日历发现请求失败。": "iCloud calendar discovery failed.",
            "iCloud 日历发现已取消或超时。": "iCloud calendar discovery was cancelled or timed out.",
            "发现日历时收到不受信任的 iCloud 地址。": "Calendar discovery received an untrusted iCloud address.",
            "没有找到可选择的 iCloud 日历。": "No iCloud calendars are available to select.",
            "iCloud 未返回日历账户地址。": "iCloud did not return a calendar account address.",
            "iCloud 未返回日历目录。": "iCloud did not return a calendar directory.",
            "iCloud 返回了无法读取的日历列表。": "iCloud returned an unreadable calendar list.",
            "iCloud 返回的日历列表过大。": "The iCloud calendar list is too large.",
            "请在 DSH 中配置日程解析模型。": "Configure a DSH model to extract event details.",
            "请选择可用的 DSH 模型。": "Select an available DSH model.",
            "请选择支持图片输入的 DSH 模型。": "Select a DSH model with image input.",
            "请粘贴日程文字或选择截图。": "Paste event text or choose a screenshot.",
            "请使用 PNG、JPEG 或 WebP 截图。": "Use a PNG, JPEG, or WebP screenshot.",
            "截图超过 2 MiB，请裁剪后重试。": "The screenshot exceeds 2 MiB. Crop it and try again.",
            "日程解析已取消或超时。": "Event extraction was cancelled or timed out.",
            "无法识别当前时区。": "The current time zone could not be resolved.",
            "无法读取截图附件。": "Could not read the screenshot.",
            "无法使用所选 DSH 模型，请检查模型设置后重试。": "Could not use the selected DSH model. Check the model settings and retry.",
            "模型未完成日程解析，请重试。": "The model did not finish extracting event details. Try again.",
            "模型未返回可用的日程草稿。": "The model did not return a usable event draft.",
            "未从材料中识别到日程。": "No event could be identified in the supplied material.",
            '系列含已取消、额外或单独改期的场次，不能整体改开始时间、全天类型或重复规则；请在原日历客户端编辑，现有日程未改动。': 'This series has cancelled, extra or rescheduled occurrences. Change its start time, all-day type or recurrence rule in the original calendar app. No event was changed.',
            '这是整个重复系列。请先向用户说明影响，确认后显式传 scope="series"；当前不支持只改某一次。': 'This action changes the entire recurring series. Explain its impact, then use scope="series" after confirmation. Editing just one occurrence is unsupported.',
            '这是整个重复系列。请先向用户说明影响，确认后显式传 scope="series"；当前不支持只删某一次。': 'This action deletes the entire recurring series. Explain its impact, then use scope="series" after confirmation. Deleting just one occurrence is unsupported.',
            '找不到或无法解析日程，请刷新日历后重试。': 'The event is missing or could not be parsed. Refresh the calendar and try again.',
            '无法解析原日程，更新已取消；请在原日历客户端检查。': 'The original event could not be parsed. No update was made. Check it in the original calendar app.',
            "日期格式不合法": "Invalid date format.",
            "日程包含不存在的日期或时间": "This event contains an invalid date or time.",
            "请先选择或粘贴 ICS 文件内容": "Choose an ICS file or paste its content first.",
            "ICS 文件超过 256 KiB，请分批导出": "The ICS file exceeds 256 KiB. Export smaller batches.",
            "ICS 结构不合法或嵌套过深": "The ICS structure is invalid or nested too deeply.",
            "ICS 文件不完整": "The ICS file is incomplete.",
            "无法读取 ICS，请从日历应用重新导出": "Could not read the ICS file. Export it again from your calendar app.",
            "暂不支持 PERIOD 类型的 RDATE，请改用日期列表后导入": "PERIOD RDATE values are unsupported. Export a list of dates instead.",
            "全天日期不能含 TZID": "All-day dates must not contain TZID.",
            "文件含未标注时区的时间，请选择解释时区后重新预览": "This file contains times without a timezone. Choose an interpretation timezone and preview again.",
            "UTC 时间不能同时标注 TZID": "UTC timestamps must not also contain TZID.",
            "原文件缺少 DTSTAMP，导入时补齐": "DTSTAMP is missing and will be added during import.",
            "作为私人日程复制，不导入参与者或发送邀请": "Imported as a private copy. Attendees are omitted and no invitations are sent.",
            "仅保留屏幕提醒，已移除其他提醒动作": "Only display reminders are retained; other alarm actions were removed.",
            "开始与结束必须同时为全天日期或具体时间": "Start and end must both be all-day dates or both be timestamps.",
            "日程或重复例外的结束时间早于开始时间": "The event or recurring exception ends before it starts.",
            "日程无法解析": "Could not parse this event.",
            "结束时间早于开始时间": "End time precedes start time.",
            "重复规则 UNTIL 需要 UTC 时间，请重新导出": "The recurrence UNTIL must use UTC. Export the event again.",
            "日程格式不合法": "Invalid event format.",
            "日历连接已改变，请重新预览": "The calendar connection changed. Preview again.",
            "请先核对预览，再确认导入": "Review the preview before confirming import.",
            "预览已过期或插件已重启，请重新预览": "The preview expired or the plugin restarted. Preview again.",
            "每次请选择 1–20 个日程系列，其余可分批导入": "Select 1–20 event series per batch.",
            "选择包含不可导入的日程，请重新预览": "Some selected events cannot be imported. Preview again.",
            "另一批日程正在导入，请稍后重试": "Another batch is importing. Try again after it finishes.",
            "不支持此导入操作": "Unsupported import operation.",
            "请求必须是对象": "The request must be an object."
        };
        function backendMessage(error) {
            const message = typeof error === 'string' ? error : error?.message || String(error || '');
            if (UI_LANG !== 'en')
                return message;
            if (error?.status === 401)
                return 'Your DSH session expired. Reopen DSH and try again.';
            if (BACKEND_EN[message])
                return BACKEND_EN[message];
            if (!/[\u3400-\u9fff]/.test(message))
                return message;
            const timezone = message.match(/^(文件重复定义时区|时区定义不完整|时区规则的 DTSTART 必须是本地时间|时区偏移不合法|缺少时区定义)：(.+)$/);
            if (timezone)
                return ({ '文件重复定义时区': 'Duplicate timezone definition', '时区定义不完整': 'Incomplete timezone definition', '时区规则的 DTSTART 必须是本地时间': 'Timezone DTSTART must use local time', '时区偏移不合法': 'Invalid timezone offset', '缺少时区定义': 'Missing timezone definition' })[timezone[1]] + ': ' + timezone[2];
            const floating = message.match(/^原文件未标注时区，按 (.+) 解释$/);
            if (floating)
                return 'No timezone in the source; interpreted as ' + floating[1] + '.';
            if (/OAuth|Google|凭据|未配置|尚未配置|没有配置|连接设置/.test(message))
                return 'Calendar credentials are incomplete. Open Connection settings and configure the calendar account; the DSH model API key cannot be used here.';
            if (/时区/.test(message))
                return 'Invalid or missing timezone. Choose an interpretation timezone or export a file with VTIMEZONE.';
            if (/VCALENDAR|VERSION|VEVENT/.test(message))
                return 'Use a valid iCalendar 2.0 file containing VEVENT entries.';
            if (/UID|重复/.test(message))
                return 'Check event UIDs and recurrence definitions, then export the file again.';
            if (/冲突|修改|改变/.test(message))
                return 'The calendar or event changed. Reload it and review your input before retrying.';
            return 'The calendar operation failed. Check the connection and source file, then try again.';
        }
        const languageListeners = new Set();
        function useUILanguage() {
            const [, render] = useState(UI_LANG);
            useEffect(() => { const update = () => render(UI_LANG); languageListeners.add(update); update(); return () => languageListeners.delete(update); }, []);
        }
        /** 宿主 locale 服务：get('locale') 是正规读法，ctx.locale 兜旧宿主，都没有就是没有。 */
        function localeServiceOf(ctx) {
            try {
                if (typeof ctx.get === "function") {
                    const viaGet = ctx.get("locale");
                    if (viaGet !== undefined && viaGet !== null)
                        return viaGet;
                }
            }
            catch (e) { /* 落到下面那条路 */ }
            const direct = ctx.locale;
            return direct === undefined || direct === null ? null : direct;
        }
        function localeToLang(active) {
            const text = typeof active === "string" ? active.toLowerCase() : "";
            return text.indexOf("en") === 0 ? "en" : "zh";
        }
        /** 订阅语言切换；服务缺失或形状不同都只是留在 zh，绝不把面板拖垮。 */
        function subscribeLocale(ctx) {
            const service = localeServiceOf(ctx);
            activeLocaleService = service;
            if (service === null)
                return () => { };
            const apply = () => {
                try {
                    if (typeof service.getSnapshot === "function") {
                        UI_LANG = localeToLang(service.getSnapshot().active);
                    }
                }
                catch (e) {
                    UI_LANG = "zh";
                }
                if (typeof relocalize === "function") {
                    try {
                        relocalize();
                    }
                    catch (e) { /* 重绘失败不该断订阅链 */ }
                }
            };
            apply();
            try {
                if (typeof service.subscribe !== "function")
                    return () => { };
                const off = service.subscribe(apply);
                return typeof off === "function" ? off : () => { };
            }
            catch (e) {
                return () => { };
            }
        }
        /** 文案：{name} 形式的占位符按 params 替换，缺参时保留原样（宁可露出花括号也不吞字）。 */
        function t(key, params) {
            const dict = UI[UI_LANG] || UI.zh;
            let text = dict[key];
            if (text === undefined)
                text = (UI.zh[key] !== undefined ? UI.zh[key] : key);
            if (params === undefined)
                return text;
            return text.replace(/\{(\w+)\}/g, (whole, name) => Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : whole);
        }
        /** 调插件自己的路由；错误码原样带出，方便上层区分「没配置」与「服务器拒绝」。 */
        const API_TIMEOUT_MS = 15000;
        async function api(action, payload, signal, route = ROUTE) {
            const init = { credentials: "same-origin", method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.assign({ action }, payload)) };
            // 请求必须有上限：挂起的 Promise 会让乐观覆盖一直盖着、撤销条永不出现，
            // 表现就是「界面改了、服务器没改」而用户以为成功。超时按失败处理（调用方会回滚并对账）。
            if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") {
                if (action === "suggest") init.signal = AbortSignal.timeout(65000);
                else if (action === "availability" || action === "discoverICloud" || action === "models") init.signal = AbortSignal.timeout(25000);
                else init.signal = AbortSignal.timeout(API_TIMEOUT_MS);
            }
            if (signal) init.signal = init.signal && typeof AbortSignal.any === 'function' ? AbortSignal.any([init.signal, signal]) : signal;
            const res = await fetch(route, init);
            let body = null;
            try {
                body = await res.json();
            }
            catch (e) {
                body = null;
            }
            if (!res.ok || !body || body.ok !== true) {
                const message = body?.error?.message || body?.message || ("HTTP " + res.status);
                const error = new Error(message);
                error.status = res.status;
                error.code = body && body.error ? body.error.code : undefined;
                error.message = backendMessage(error);
                throw error;
            }
            return body.value;
        }
        // ───────────────────────────── 时间与格式 ─────────────────────────────
        /** 事件时间是「全天 = YYYY-MM-DD」或「定时 = UTC ISO」，两种都要能解析。 */
        function isDateOnly(value) { return /^\d{4}-\d{2}-\d{2}$/.test(String(value || "")); }
        function startDate(event) { return isDateOnly(event.start) ? new Date(event.start + "T00:00:00") : new Date(event.start); }
        function endDate(event) { return isDateOnly(event.end) ? new Date(event.end + "T00:00:00") : new Date(event.end); }
        function dayKey(date) {
            return date.getFullYear() + "-" + pad2(date.getMonth() + 1) + "-" + pad2(date.getDate());
        }
        function pad2(n) { return n < 10 ? "0" + n : String(n); }
        function hhmm(date) { return pad2(date.getHours()) + ":" + pad2(date.getMinutes()); }
        function startOfDay(date) { return new Date(date.getFullYear(), date.getMonth(), date.getDate()); }
        function addDays(date, n) { return new Date(date.getFullYear(), date.getMonth(), date.getDate() + n); }
        function addMonths(date, n) { return new Date(date.getFullYear(), date.getMonth() + n, 1); }
        /** 周一为一周之首：JS 的 getDay() 里周日是 0，先掰成 1..7。 */
        function isoWeekday(date) { const d = date.getDay(); return d === 0 ? 7 : d; }
        function startOfWeek(date) { return addDays(startOfDay(date), -(isoWeekday(date) - 1)); }
        function daysBetween(a, b) { return Math.round((startOfDay(b) - startOfDay(a)) / 86400000); }
        function formatDay(date, opts) {
            const withYear = opts && opts.withYear;
            if (UI_LANG === "en")
                return date.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" });
            return date.getFullYear() + " 年 " + (date.getMonth() + 1) + " 月 " + date.getDate() + " 日" + (withYear ? "" : "");
        }
        function formatMonthTitle(date) { return UI_LANG === "en" ? date.toLocaleDateString("en-GB", { year: "numeric", month: "long" }) : date.getFullYear() + " 年 " + (date.getMonth() + 1) + " 月"; }
        function formatWeekTitle(date) {
            const from = startOfWeek(date), to = addDays(from, 6);
            if (UI_LANG === "en")
                return formatDay(from) + " – " + formatDay(to);
            return formatMonthTitle(from) + " " + from.getDate() + "–" + (to.getMonth() === from.getMonth() ? "" : (to.getMonth() + 1) + " 月 ") + to.getDate() + " 日";
        }
        function relativeDay(date) {
            const diff = daysBetween(new Date(), date);
            if (diff === 0)
                return t("day.today");
            if (diff === 1)
                return t("day.tomorrow");
            if (diff === -1)
                return t("day.yesterday");
            return UI_LANG === "en" ? date.toLocaleDateString("en-GB", { weekday: "short" }) : "周" + WEEKDAYS_ZH[isoWeekday(date) - 1];
        }
        function formatWhen(event) {
            if (event.allDay)
                return t("format.allday") + " · " + formatDay(startDate(event));
            const s = startDate(event), e = endDate(event);
            const sameDay = dayKey(s) === dayKey(e);
            return formatDay(s) + " " + hhmm(s) + "–" + (sameDay ? "" : formatDay(e) + " ") + hhmm(e);
        }
        function formatDuration(event) {
            if (event.allDay) {
                const days = Math.max(1, daysBetween(startDate(event), endDate(event)));
                return days === 1 ? t("format.allday") : days + (UI_LANG === "en" ? " days" : " 天");
            }
            const minutes = Math.max(0, Math.round((endDate(event) - startDate(event)) / 60000));
            const hours = Math.floor(minutes / 60), rest = minutes % 60;
            if (hours > 0 && rest > 0)
                return t("format.duration.hm", { h: hours, m: rest });
            if (hours > 0)
                return t("format.duration.h", { h: hours });
            if (rest > 0)
                return t("format.duration.m", { m: rest });
            return t("format.duration.zero");
        }
        /** RRULE 说人话：只翻译常见的 FREQ/INTERVAL/COUNT/UNTIL，认不出就原样返回。 */
        function humanRepeat(rrule) {
            if (!rrule)
                return "";
            const parts = {};
            String(rrule).split(";").forEach((piece) => {
                const i = piece.indexOf("=");
                if (i > 0)
                    parts[piece.slice(0, i).toUpperCase()] = piece.slice(i + 1);
            });
            const freq = parts.FREQ;
            if (UI_LANG === "en") {
                const units = { DAILY: ["Daily", "days"], WEEKLY: ["Weekly", "weeks"], MONTHLY: ["Monthly", "months"], YEARLY: ["Yearly", "years"] };
                if (!units[freq])
                    return rrule;
                const interval = Number(parts.INTERVAL || "1");
                const every = interval > 1 ? "Every " + interval + " " + units[freq][1] : units[freq][0];
                if (parts.COUNT)
                    return every + " (" + parts.COUNT + " occurrences)";
                if (parts.UNTIL) {
                    const raw = String(parts.UNTIL), date = raw.length >= 8 ? raw.slice(0, 4) + "-" + raw.slice(4, 6) + "-" + raw.slice(6, 8) : raw;
                    return every + ", until " + date;
                }
                return every;
            }
            const base = freq === "DAILY" ? "每天" : freq === "WEEKLY" ? "每周" : freq === "MONTHLY" ? "每月" : freq === "YEARLY" ? "每年" : "";
            if (base === "")
                return rrule;
            const interval = Number(parts.INTERVAL || "1");
            const every = interval > 1 ? "每 " + interval + (freq === "DAILY" ? " 天" : freq === "WEEKLY" ? " 周" : freq === "MONTHLY" ? " 个月" : " 年") : base;
            if (parts.COUNT)
                return every + "（共 " + parts.COUNT + " 次）";
            if (parts.UNTIL) {
                const raw = String(parts.UNTIL);
                const iso = raw.length >= 8 ? raw.slice(0, 4) + "-" + raw.slice(4, 6) + "-" + raw.slice(6, 8) : raw;
                return every + "，到 " + iso + " 为止";
            }
            return every;
        }
        /** 两个事件是否真的重叠（全天事件按当天整天算）。 */
        function overlaps(a, b) {
            if ([a,b].some(event=>event.status?.toUpperCase()==='CANCELLED'||event.transparency?.toUpperCase()==='TRANSPARENT')) return false;
            const as = startDate(a).getTime(), ae = endDate(a).getTime() || as;
            const bs = startDate(b).getTime(), be = endDate(b).getTime() || bs;
            return as < be && bs < ae;
        }
        /** 月视图的 6×7 网格起点：所在周的周一，往前补到整周。 */
        function monthGridDays(anchor) {
            const first = new Date(anchor.getFullYear(), anchor.getMonth(), 1);
            const start = startOfWeek(first);
            const days = [];
            for (let i = 0; i < 42; i++)
                days.push(addDays(start, i));
            return days;
        }
        /** 一个事件落在哪几天（跨天事件在月视图里逐天显示）。 */
        function daysOfEvent(event) {
            const days = [];
            if (event.allDay) {
                const from = startDate(event);
                // 全天事件的 DTEND 是「次日零点」（iCal 语义），显示上要退一天。
                const to = addDays(endDate(event), -1);
                for (let d = startOfDay(from); d <= to; d = addDays(d, 1))
                    days.push(d);
                return days.length > 0 ? days : [from];
            }
            const from = startOfDay(startDate(event)), to = startOfDay(endDate(event));
            for (let d = from; d <= to; d = addDays(d, 1))
                days.push(d);
            return days;
        }
        /** 事件排序：全天在前，然后按开始时间。 */
        function sortForDisplay(events) {
            // Day first, then all-day before timed, then start time: an all-day event only leads its own day.
            return events.slice().sort((a, b) => {
                const day = startOfDay(startDate(a)) - startOfDay(startDate(b));
                if (day !== 0)
                    return day;
                if (a.allDay !== b.allDay)
                    return a.allDay ? -1 : 1;
                return startDate(a) - startDate(b);
            });
        }
        // ───────────────────────────── 宿主 UI 组件（可选） ─────────────────────────────
        /** 复制 uid：优先官方 writeClipboard（它处理了非 https 的降级），否则走 navigator。 */
        async function copyText(text) {
            try {
                if (PRIM && typeof PRIM.writeClipboard === "function") {
                    await PRIM.writeClipboard(text);
                    return true;
                }
            }
            catch (e) { /* 落到下面 */ }
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(text);
                    return true;
                }
            }
            catch (e) { /* 忽略 */ }
            return false;
        }
        // ───────────────────────────── 拖拽/键盘改期的几何 ─────────────────────────────
        // 这一组是本轮唯一的「算法」：拖动、缩放手柄、键盘微调都走它们。它们不碰 DOM、不认 React，
        // 所以跨天/跨月/DST/吸附边界这些真正容易错的地方能被单测直接盯住（见 test/schedule.test.mjs）。
        /** 全天事件与定时事件共用一个「槽位」概念：某天 + 当天第几分钟 + 时长。 */
        const SNAP_MINUTES = 15;
        const RESIZE_MIN_MINUTES = 15;
        function snapMinutes(value, step) {
            const unit = typeof step === "number" && step > 0 ? step : SNAP_MINUTES;
            return Math.round(value / unit) * unit;
        }
        /** 事件 → 槽位（按浏览器本地墙钟，显示与拖拽都以用户看到的为准）。 */
        function slotFromEvent(event) {
            const start = startDate(event);
            const end = endDate(event);
            const minutes = start.getHours() * 60 + start.getMinutes();
            const durationMinutes = Math.max(RESIZE_MIN_MINUTES, Math.round((end - start) / 60000));
            return { dayKey: dayKey(start), minutes, durationMinutes, allDay: event.allDay === true };
        }
        /**
         * 槽位 + 位移 → 新槽位。
         * 位移以「天 + 分钟」给（拖动时由像素换算），跨天/跨月/跨年都靠时间戳自然进位，
         * 最后把开始时间吸附到 15 分钟并钳在当天 00:00 与「当天结束前还放得下整个时长」之间。
         */
        function moveSlot(slot, deltaDays, deltaMinutes, step) {
            // 分钟先合成「当天内 + 跨几天」，再用日历日相加 —— 不能用「天 × 1440 毫秒」当瞬时位移：
            // DST 切换日一天是 23 或 25 小时，按毫秒加会整体偏一小时（评审查出来的，中国时区看不见）。
            const total = slot.minutes + (deltaMinutes || 0);
            const dayShift = Math.floor(total / 1440);
            const minutes = total - dayShift * 1440;
            const base = new Date(slot.dayKey + "T00:00:00");
            const target = addDays(base, (deltaDays || 0) + dayShift);
            const unit = typeof step === "number" && step > 0 ? step : SNAP_MINUTES;
            // 日末钳制也要落在网格上：1440 − 时长不保证是 15 的倍数（50 分钟 → 23:10 这种脏值）。
            const latestStart = Math.max(0, Math.floor((24 * 60 - slot.durationMinutes) / unit) * unit);
            const snapped = Math.max(0, Math.min(snapMinutes(minutes, unit), latestStart));
            return { dayKey: dayKey(target), minutes: snapped, durationMinutes: slot.durationMinutes, allDay: slot.allDay };
        }
        /** 拖拽像素位移 → 槽位位移（横向一格 = 一天，纵向按小时像素换算成分钟）。 */
        function slotFromDrag(slot, drag, step) {
            const hourPx = typeof drag.hourPx === "number" && drag.hourPx > 0 ? drag.hourPx : 44;
            const columns = Math.round(drag.columns || 0);
            const unit = typeof step === "number" && step > 0 ? step : SNAP_MINUTES;
            const rawMinutes = ((drag.pixelsY || 0) / hourPx) * 60;
            const deltaMinutes = Math.round(rawMinutes / unit) * unit;
            return moveSlot(slot, columns, deltaMinutes, unit);
        }
        /** 缩放手柄：只改时长，不改开始时间（最短 15 分钟，最长到当天结束）。 */
        function resizeSlot(slot, deltaMinutes, step) {
            const unit = typeof step === "number" && step > 0 ? step : SNAP_MINUTES;
            // 只吸附**位移量**：50 分钟的日程碰一下手柄（位移 0）不该被吸成 45。
            // 上限就是 24 小时 —— 允许拖过午夜（此前按「当天还剩多少」压缩，23:30–00:30 一碰就变 30 分钟）。
            const next = slot.durationMinutes + snapMinutes(deltaMinutes || 0, unit);
            return { dayKey: slot.dayKey, minutes: slot.minutes, durationMinutes: Math.max(RESIZE_MIN_MINUTES, Math.min(next, 24 * 60)), allDay: slot.allDay };
        }
        /** 槽位 → 提交给服务器的 start/end（本地墙钟换算成 UTC 秒级 ISO）。 */
        function rangeOfSlot(slot) {
            const start = new Date(slot.dayKey + "T00:00:00");
            start.setMinutes(slot.minutes);
            const end = new Date(start.getTime() + slot.durationMinutes * 60000);
            return { start: isoOf(start), end: isoOf(end) };
        }
        /** 落点与哪些已有日程重叠（拖动中用来把幽灵块描成黄色）。 */
        function conflictsForSlot(events, slot, uid) {
            const range = rangeOfSlot(slot);
            const pseudo = { uid: "__drag", summary: "", start: range.start, end: range.end, allDay: slot.allDay === true };
            return events.filter((event) => event.uid !== uid && overlaps(event, pseudo));
        }
        /**
         * 指针 x（视口坐标）→ 列号。坐标必须来自 getBoundingClientRect ——
         * offsetLeft 是相对 offsetParent 的，浮层面板里与 clientX 不是一个坐标系（评审抓到的坑）。
         * 找不到列就返回 undefined，调用方按「不换天」处理。
         */
        function columnIndexFromRects(clientX, rects) {
            for (const rect of rects) {
                if (clientX >= rect.left && clientX < rect.left + rect.width)
                    return rect.index;
            }
            return undefined;
        }
        /** 重复日程（系列本身 or 某次实例）：CalDAV 里整个系列是一个对象，拖动会改整条。 */
        function isRecurring(event) {
            return event.rrule !== undefined || event.isOccurrence === true || event.seriesStart !== undefined;
        }
        // ───────────────────────────── 小部件 ─────────────────────────────
        /** 事件属于哪一类：影响左侧色条（全天绿 / 重复黄 / 普通蓝）。 */
        function eventClass(event) {
            return event.allDay ? styles.allday : isRecurring(event) ? styles.recurring : undefined;
        }
        function eventKey(event) {
            return event.uid + "@" + event.start;
        }
        function Chip(props) {
            const { event, onClick, conflicted } = props;
            return h("button", {
                type: "button",
                className: clsx(styles["dshc-chip"], eventClass(event), conflicted && styles.conflicted),
                title: event.summary,
                onClick: (e) => { e.stopPropagation(); onClick(event); }
            },
                event.allDay ? null : h("span", { className: "t" }, hhmm(startDate(event))),
                h("span", null, event.summary)
            );
        }
        /** 议程里的一行：时间列 + 标题/地点 + 重复角标。 */
        function Row(props) {
            const { event, onClick, conflicted, editable = true } = props;
            const meta = [];
            if (event.location)
                meta.push(event.location);
            if (event.calendarName)
                meta.push(event.calendarName);
            if (event.rrule)
                meta.push(humanRepeat(event.rrule));
            else if (event.isOccurrence)
                meta.push(t("repeat.occurrence"));
            return h("div", {
                className: clsx(styles["dshc-row"], conflicted && styles.conflicted),
                "data-dsh-row": "",
                "data-active": "false"
            },
                h("button", { type: "button", className: styles.rowTrigger, onClick: () => onClick(event) },
                    h("span", { className: "dsh-pixel-cursor", "aria-hidden": "true" }, "▶"),
                    h("span", { className: styles["dshc-time"] }, event.allDay ? t("format.allday") : (hhmm(startDate(event)) + "–" + hhmm(endDate(event)))),
                    h("span", { className: styles["dshc-main"] },
                        h("span", { className: styles["dshc-name"] }, event.summary),
                        meta.length > 0 ? h("span", { className: styles["dshc-meta"] }, meta.join(" · ")) : null
                    )
                ),
                editable && event.readOnly !== true ? h("div", { className: clsx("dsh-row-actions", styles.rowActions) },
                    h(IconButton, { icon: "edit", label: calendarText("查看或编辑日程", "Inspect or edit event"), onClick: () => onClick(event) })
                ) : null
            );
        }
        /** 月视图：6×7 网格；每格最多 3 条，多的收成「+N」。 */
        function MonthView(props) {
            const { anchor, events, onPick, onCreateAt, conflicted, canCreate = true } = props;
            const days = monthGridDays(anchor);
            const today = dayKey(new Date());
            const byDay = {};
            for (const event of events) {
                for (const day of daysOfEvent(event)) {
                    const key = dayKey(day);
                    if (!byDay[key])
                        byDay[key] = [];
                    byDay[key].push(event);
                }
            }
            const cells = [];
            for (const day of days) {
                const key = dayKey(day);
                const list = sortForDisplay(byDay[key] || []);
                const shown = list.slice(0, 3);
                const rest = list.length - shown.length;
                // 格子必须是 div 而不是 button：里面的日程芯片本身是按钮，而按钮不能嵌套按钮 ——
                // 嵌套时浏览器会把外层按钮提前闭合，芯片就被挤到网格外面去了（真被用户抓到过）。
                cells.push(h("div", {
                    key: key,
                    role: "button",
                    tabIndex: 0,
                    className: clsx(styles["dshc-cell"], day.getMonth() !== anchor.getMonth() && styles.out, key === today && "today"),
                    // 读屏只会念出格子里的日期数字，不说这一格是干什么的；补上「哪天 + 新建」的完整名字。
                    "aria-label": formatDay(day, { withYear: true }) + (canCreate ? " · " + t("action.new") : ""),
                    "aria-current": key === today ? "date" : undefined,
                    onClick: canCreate ? () => onCreateAt(day) : undefined,
                    onKeyDown: (e) => { if (canCreate && e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        onCreateAt(day);
                    } },
                    title: canCreate ? t("action.new") : undefined
                },
                    h("div", { className: styles["dshc-daynum"] }, h("b", null, day.getDate())),
                    shown.map((event) => h(Chip, { key: eventKey(event), event, onClick: onPick, conflicted: conflicted?.has(event) })),
                    rest > 0 ? h("div", { className: styles["dshc-more"] }, "+" + rest) : null
                ));
            }
            return h("div", null,
                h("div", { className: styles["dshc-grid"] }, WEEKDAYS_ZH.map((d, i) => h("div", { className: styles["dshc-dow"], key: d }, weekDayLabel(i)))),
                h("div", { className: styles["dshc-grid"] }, cells)
            );
        }
        /**
         * 周视图：7 列 × 24 小时网格。除了画日程，它还负责改期：
         *   · 拖动事件块：上下改时间、左右换天（15 分钟吸附）；
         *   · 拖块底部 6px 的缩放手柄：只改时长；
         *   · 拖动中画幽灵落点，与已有日程重叠时描成黄色（允许重叠，只是提醒）；
         *   · 拖到容器上下边缘自动滚动，长会议不用先滚再拖；
         *   · 键盘：Tab 聚焦后 ↑/↓ 挪 15 分钟、Shift+↑/↓ 挪 1 小时、←/→ 挪一天、Enter 打开详情、拖动中 Esc 取消。
         * 几何计算全在纯函数里（slotFromDrag / resizeSlot / moveSlot / columnIndexFromRects），这里只做指针与 DOM 的事。
         *
         * 两个坑写在这里免得后人再踩：
         *   1. 列判定必须用 getBoundingClientRect：offsetLeft 是相对 offsetParent 的，浮层面板里与 clientX 不同坐标系；
         *   2. window 监听器只在挂载时注册一次，通过 impl ref 调用「最新实现」；
         *      按渲染闭包挂/摘会出现「摘不掉 → 卸载后 pointerup 替用户提交一次改期」。
         */
        function WeekView(props) {
            const { anchor, events, onPick, onCreateAt: createFromSlot, onReschedule, conflicted, canCreate = true } = props;
            const onCreateAt = canCreate ? createFromSlot : () => { };
            /** 示例模式下没有 onReschedule：不做改期，也不显示拖拽提示。 */
            const canEdit = typeof onReschedule === "function";
            const HOUR_PX = 44;
            const start = startOfWeek(anchor);
            const days = [];
            for (let i = 0; i < 7; i++)
                days.push(addDays(start, i));
            const today = dayKey(new Date());
            const allDay = sortForDisplay(events.filter((e) => e.allDay));
            const timed = events.filter((e) => !e.allDay);
            // 默认落在 07:00：半夜那几格基本没人看，但需要时还能往上滚（不裁剪任何事件）。
            const scroller = useRef(null);
            useEffect(() => {
                const node = scroller.current;
                if (node === null || node === undefined)
                    return;
                node.scrollTop = 7 * HOUR_PX;
            }, [dayKey(anchor)]);
            /** 拖拽位置放 ref：每帧 setState 会让整棵树重渲染，拖动会顿。 */
            const dragRef = useRef(null);
            const suppressClick = useRef(false);
            const [ghost, setGhost] = useState(null);
            /** 每列的**视口**矩形（见文件头注释第 1 条）。 */
            const columnRects = () => {
                const node = scroller.current;
                if (node === null || node === undefined)
                    return [];
                return days.map((day, index) => {
                    const column = node.querySelector('[data-day="' + dayKey(day) + '"]');
                    if (column === null)
                        return { dayKey: dayKey(day), index, left: 0, width: 0 };
                    const rect = column.getBoundingClientRect();
                    return { dayKey: dayKey(day), index, left: rect.left, width: rect.width };
                });
            };
            const scrollTopNow = () => {
                const node = scroller.current;
                return node === null || node === undefined ? 0 : node.scrollTop;
            };
            const isOwnPointer = (pointerEvent) => {
                const drag = dragRef.current;
                if (drag === null)
                    return false;
                return pointerEvent.pointerId === undefined || drag.pointerId === undefined || pointerEvent.pointerId === drag.pointerId;
            };
            const stopDrag = (commit) => {
                stopAutoScroll();
                const drag = dragRef.current;
                dragRef.current = null;
                setGhost(null);
                if (drag === null)
                    return;
                const moved = drag.moved === true;
                if (moved === true) {
                    // 拖动之后浏览器通常会补一个 click，用它把「抑制」消费掉；
                    // 但如果松手在空白处（没有 click），下个事件循环必须清掉 —— 否则会吞掉将来某次正常点击。
                    suppressClick.current = true;
                    setTimeout(() => { suppressClick.current = false; }, 0);
                }
                if (commit !== false && moved === true && canEdit === true) {
                    const slot = drag.previewSlot === undefined ? drag.slot : drag.previewSlot;
                    // 没有落点就不提交：比如纵向拖出本周（跨到下周）时幽灵没地方画，这时盲提交会让事件从视图消失。
                    // 用 dragRef 上的同步标记，而不是 React state（见 applyPreviewAt 的注释）。
                    if (drag.previewVisible === true)
                        onReschedule(drag.event, rangeOfSlot(slot), drag.mode);
                }
            };
            /** 由指针位置算落点、画幽灵（只管几何，不碰边缘滚动的调度）。 */
            const applyPreviewAt = (clientX, clientY, drag) => {
                // 容器自己滚动过的话，指针下方的**内容**坐标变了：不补这一项，幽灵块会落后于指针，
                // 松手落点也跟着偏（误差 = 滚动量，可达数小时）。
                const scrolled = scrollTopNow() - drag.startScrollTop;
                const dx = clientX - drag.startX;
                const dy = clientY - drag.startY + scrolled;
                if (drag.moved !== true && Math.abs(dx) < 5 && Math.abs(dy) < 5)
                    return;
                drag.moved = true;
                const ownIndex = drag.columns.findIndex((column) => column.dayKey === drag.slot.dayKey);
                const targetIndex = columnIndexFromRects(clientX, drag.columns);
                // 横向只允许在本周 7 天内换天：跨到下周会让幽灵无处渲染、事件从当前视图消失。
                const rawColumns = targetIndex === undefined || ownIndex === -1 ? 0 : targetIndex - ownIndex;
                const columns = ownIndex === -1 ? 0 : Math.max(-ownIndex, Math.min(6 - ownIndex, rawColumns));
                const slot = drag.mode === "resize"
                    ? resizeSlot(drag.slot, (dy / HOUR_PX) * 60, SNAP_MINUTES)
                    : slotFromDrag(drag.slot, { columns, pixelsY: dy, hourPx: HOUR_PX }, SNAP_MINUTES);
                drag.previewSlot = slot;
                // 可见性判断必须同步落在 dragRef 上：pointermove 与 pointerup 可能在同一批次里，
                // 此时读 React state（ghost）拿到的是旧值，会导致「拖了却不提交」。
                drag.previewVisible = days.some((day) => dayKey(day) === slot.dayKey);
                setGhost({ uid: drag.uid, slot, conflicts: conflictsForSlot(events, slot, drag.uid).length });
            };
            /**
             * 边缘自动滚动：用 rAF 持续滚，而不是「每次 pointermove 滚一小步」。
             * 前者指针停在边缘不动也会继续滚（这才是「长会议不用先滚再拖」），
             * 后者只在指针移动时滚，用户会觉得网格在滚、事件却不跟手。
             */
            const autoScroll = useRef({ raf: 0, x: 0, y: 0 });
            const stopAutoScroll = () => {
                if (autoScroll.current.raf !== 0) {
                    window.cancelAnimationFrame(autoScroll.current.raf);
                    autoScroll.current.raf = 0;
                }
            };
            const stepAutoScroll = () => {
                autoScroll.current.raf = 0;
                const drag = dragRef.current;
                const node = scroller.current;
                if (drag === null || node === null || node === undefined)
                    return;
                const rect = node.getBoundingClientRect();
                const y = autoScroll.current.y;
                let delta = 0;
                if (y < rect.top + 40)
                    delta = -Math.min(24, (rect.top + 40 - y) / 3);
                else if (y > rect.bottom - 40)
                    delta = Math.min(24, (y - (rect.bottom - 40)) / 3);
                if (delta === 0)
                    return; // 指针离开边缘：循环自然停下，下次移动会再起
                node.scrollTop += delta;
                applyPreviewAt(autoScroll.current.x, y, drag); // 滚动后重算落点（含滚动补偿）
                autoScroll.current.raf = window.requestAnimationFrame(stepAutoScroll);
            };
            const ensureAutoScroll = (pointerEvent) => {
                autoScroll.current.x = pointerEvent.clientX;
                autoScroll.current.y = pointerEvent.clientY;
                const node = scroller.current;
                if (node === null || node === undefined)
                    return;
                const rect = node.getBoundingClientRect();
                const nearEdge = pointerEvent.clientY < rect.top + 40 || pointerEvent.clientY > rect.bottom - 40;
                if (nearEdge === true && autoScroll.current.raf === 0)
                    autoScroll.current.raf = window.requestAnimationFrame(stepAutoScroll);
            };
            const updatePreview = (pointerEvent) => {
                const drag = dragRef.current;
                if (drag === null)
                    return;
                // 鼠标在窗口外松开时浏览器可能不派发 pointerup：按键已经松了就当作取消，
                // 免得「卡住的拖拽」在回到窗口后被下一次移动继续更新、下一次松开就替用户提交。
                if (drag.moved === true && pointerEvent.buttons === 0) {
                    stopDrag(false);
                    return;
                }
                applyPreviewAt(pointerEvent.clientX, pointerEvent.clientY, drag);
                ensureAutoScroll(pointerEvent);
            };
            /**
             * window 监听器只在挂载时注册一次，通过 impl ref 调「最新实现」。
             * 这样既不会因为渲染闭包更换而摘不掉（那会导致卸载后 pointerup 真的发一次 update），
             * 也不会读到过期的 state。
             */
            const impl = useRef({});
            impl.current = { stopDrag, updatePreview, isOwnPointer };
            useEffect(() => {
                const onMove = (pointerEvent) => { if (dragRef.current !== null && impl.current.isOwnPointer(pointerEvent) === true)
                    impl.current.updatePreview(pointerEvent); };
                const onUp = (pointerEvent) => { if (dragRef.current !== null && impl.current.isOwnPointer(pointerEvent) === true)
                    impl.current.stopDrag(true); };
                const onCancel = () => { if (dragRef.current !== null)
                    impl.current.stopDrag(false); };
                const onKey = (keyEvent) => { if (keyEvent.key === "Escape" && dragRef.current !== null) {
                    keyEvent.preventDefault();
                    keyEvent.stopPropagation();
                    impl.current.stopDrag(false);
                } };
                const onBlur = () => { if (dragRef.current !== null)
                    impl.current.stopDrag(false); };
                window.addEventListener("pointermove", onMove);
                window.addEventListener("pointerup", onUp);
                window.addEventListener("pointercancel", onCancel);
                // 捕获阶段：保证「取消拖动」先于浮层面板的 document Esc（否则会顺手把面板也关了）。
                window.addEventListener("keydown", onKey, true);
                window.addEventListener("blur", onBlur);
                return () => {
                    window.removeEventListener("pointermove", onMove);
                    window.removeEventListener("pointerup", onUp);
                    window.removeEventListener("pointercancel", onCancel);
                    window.removeEventListener("keydown", onKey, true);
                    if (autoScroll.current.raf !== 0) {
                        window.cancelAnimationFrame(autoScroll.current.raf);
                        autoScroll.current.raf = 0;
                    }
                    window.removeEventListener("blur", onBlur);
                    dragRef.current = null; // 卸载时不能留着半截拖拽状态
                };
            }, []);
            const beginDrag = (event, pointerEvent, mode) => {
                if (canEdit !== true)
                    return; // 示例模式：不落盘就不给拖
                if (pointerEvent.button !== undefined && pointerEvent.button !== 0)
                    return;
                if (dragRef.current !== null)
                    return; // 已经有一根指针在拖，忽略第二根
                suppressClick.current = false;
                try {
                    if (typeof pointerEvent.currentTarget.setPointerCapture === "function")
                        pointerEvent.currentTarget.setPointerCapture(pointerEvent.pointerId);
                }
                catch (error) { /* 不支持就算了，window 监听器兜底 */ }
                dragRef.current = {
                    uid: event.uid,
                    event,
                    pointerId: pointerEvent.pointerId,
                    mode: mode === "resize" ? "resize" : "move",
                    slot: slotFromEvent(event),
                    startX: pointerEvent.clientX,
                    startY: pointerEvent.clientY,
                    startScrollTop: scrollTopNow(),
                    moved: false,
                    columns: columnRects(),
                };
            };
            /** 键盘改期：与拖拽走同一套纯函数，所以行为一致（且不用鼠标也能用）。 */
            const onKeyDown = (event, keyEvent) => {
                if (keyEvent.key === "Enter" || keyEvent.key === " ") {
                    keyEvent.preventDefault();
                    onPick(event);
                    return;
                }
                if (canEdit !== true)
                    return;
                const slot = slotFromEvent(event);
                let deltaDays = 0;
                let deltaMinutes = 0;
                if (keyEvent.key === "ArrowUp")
                    deltaMinutes = keyEvent.shiftKey ? -60 : -SNAP_MINUTES;
                else if (keyEvent.key === "ArrowDown")
                    deltaMinutes = keyEvent.shiftKey ? 60 : SNAP_MINUTES;
                else if (keyEvent.key === "ArrowLeft")
                    deltaDays = -1;
                else if (keyEvent.key === "ArrowRight")
                    deltaDays = 1;
                else
                    return;
                keyEvent.preventDefault();
                onReschedule(event, rangeOfSlot(moveSlot(slot, deltaDays, deltaMinutes, SNAP_MINUTES)), "move");
            };
            const hoursColumn = h("div", { key: "__hours" }, [h("div", { className: styles["dshc-dayhead"], key: "h" }, "\u00a0")].concat(Array.from({ length: 24 }, (_, hour) => h("div", { className: styles["dshc-hour"], key: "h" + hour }, hour === 0 ? "" : pad2(hour) + ":00"))));
            const dayColumns = days.map((day) => {
                const key = dayKey(day);
                const dayTimed = timed.filter((event) => daysOfEvent(event).some((d) => dayKey(d) === key));
                const laneEnds = [];
                const placed = dayTimed.slice().sort((a, b) => startDate(a) - startDate(b)).map((event) => {
                    const from = startDate(event), to = endDate(event);
                    let lane = laneEnds.findIndex((endMs) => endMs <= from.getTime());
                    if (lane === -1) {
                        lane = laneEnds.length;
                        laneEnds.push(0);
                    }
                    laneEnds[lane] = to.getTime();
                    return { event, lane };
                });
                const laneCount = Math.max(1, laneEnds.length);
                const laneStyle = (lane) => ({ left: "calc(" + (lane * (100 / laneCount)) + "% + 2px)", width: "calc(" + (100 / laneCount) + "% - 4px)" });
                const blocks = placed.map(({ event, lane }) => {
                    const from = startDate(event), to = endDate(event);
                    const top = (from.getHours() * 60 + from.getMinutes()) * (HOUR_PX / 60);
                    const height = Math.max(18, ((to - from) / 60000) * (HOUR_PX / 60));
                    const dragging = ghost !== null && ghost.uid === event.uid;
                    return h("div", {
                        key: eventKey(event),
                        role: "button",
                        tabIndex: 0,
                        "data-uid": event.uid,
                        className: clsx(styles["dshc-slot"], eventClass(event), canEdit && styles.movable, dragging && styles.dragging, conflicted?.has(event) && styles.conflicted),
                        style: Object.assign({ top: top + "px", height: height + "px" }, laneStyle(lane)),
                        title: event.summary + " " + hhmm(from) + "\u2013" + hhmm(to) + (canEdit === true ? " · " + t("drag.moveTitle") : ""),
                        onPointerDown: (e) => beginDrag(event, e, "move"),
                        onKeyDown: (e) => onKeyDown(event, e),
                        onClick: (clickEvent) => {
                            // slot 是 daycol 的子节点：不挡住冒泡的话，点事件会同时触发 daycol 的「新建」。
                            clickEvent.stopPropagation();
                            if (suppressClick.current === true) {
                                suppressClick.current = false;
                                return;
                            }
                            onPick(event);
                        }
                    }, h("div", { className: styles["dshc-slot-title"] }, event.summary), h("div", { className: styles["dshc-slot-time"] }, hhmm(from) + "\u2013" + hhmm(to)), canEdit === true ? h("div", { className: styles["dshc-resize"], title: t("drag.resizeTitle"), onPointerDown: (e) => { e.stopPropagation(); beginDrag(event, e, "resize"); } }) : null);
                });
                const ghostBlock = ghost !== null && ghost.slot.dayKey === key
                    ? h("div", {
                        className: clsx(styles["dshc-slot"], styles["dshc-ghost"], ghost.conflicts > 0 && styles.warn),
                        style: Object.assign({ top: (ghost.slot.minutes * (HOUR_PX / 60)) + "px", height: Math.max(18, ghost.slot.durationMinutes * (HOUR_PX / 60)) + "px" }, laneStyle(0)),
                        key: "__ghost"
                    }, h("div", { className: styles["dshc-slot-title"] }, ghost.conflicts > 0 ? t("drag.conflict", { n: ghost.conflicts }) + " · " + t("drag.keep") : t("drag.drop")), h("div", { className: styles["dshc-slot-time"] }, pad2(Math.floor(ghost.slot.minutes / 60)) + ":" + pad2(ghost.slot.minutes % 60) + " \u2192 " + pad2(Math.floor((ghost.slot.minutes + ghost.slot.durationMinutes) / 60)) + ":" + pad2((ghost.slot.minutes + ghost.slot.durationMinutes) % 60)))
                    : null;
                const hourSlots = Array.from({ length: 24 }, (_, hour) => h("button", {
                    key: hour, type: "button", className: styles.hourSlot, "data-hour": hour,
                    "aria-label": formatDay(day, { withYear: true }) + " " + pad2(hour) + ":00 · " + t("action.new"),
                    tabIndex: hour === 7 ? 0 : -1,
                    onClick: () => {
                        if (suppressClick.current) { suppressClick.current = false; return; }
                        onCreateAt(day, hour);
                    },
                    onKeyDown: event => {
                        const change = event.key === "ArrowUp" ? -1 : event.key === "ArrowDown" ? 1 : 0;
                        if (change === 0) return;
                        event.preventDefault();
                        event.currentTarget.parentElement.querySelector('[data-hour="' + (hour + change) + '"]')?.focus();
                    }
                }));
                return h("div", { key },
                    h("div", { className: clsx(styles["dshc-dayhead"], key === today && "today"), "aria-current": key === today ? "date" : undefined },
                        weekDayLabel(isoWeekday(day) - 1), h("b", null, day.getDate())
                    ),
                    h("div", {
                        className: clsx(styles["dshc-daycol"], key === today && "today"), "data-day": key,
                        onClick: clickEvent => {
                            if (clickEvent.target !== clickEvent.currentTarget)
                                return;
                            if (suppressClick.current) { suppressClick.current = false; return; }
                            onCreateAt(day);
                        }
                    }, hourSlots, blocks, ghostBlock)
                );
            });
            return h("div", { className: styles.weekView }, allDay.length > 0
                ? h("div", { className: styles.allDayList }, allDay.map((event) => h(Row, { key: eventKey(event), event, onClick: onPick, conflicted: conflicted?.has(event), editable: canCreate })))
                : null, h("div", { className: "dshc-week", ref: scroller }, hoursColumn, dayColumns), canEdit === true ? h("div", { className: styles["dshc-draghint"] }, t("drag.hint")) : null);
        }
        /** 议程视图：从今天起按天分组，最像「接下来要干什么」。 */
        function AgendaView(props) {
            const { events, onPick, onCreateAt, conflicted, canCreate = true } = props;
            const groups = [];
            const index = {};
            for (const event of sortForDisplay(events)) {
                const day = startOfDay(startDate(event));
                const key = dayKey(day);
                if (index[key] === undefined) {
                    index[key] = groups.length;
                    groups.push({ day, key, items: [] });
                }
                groups[index[key]].items.push(event);
            }
            if (groups.length === 0)
                return h(EmptyState, canCreate ? { title: t("state.empty"), action: h(Btn, { icon: "plus", variant: "primary", onClick: () => onCreateAt(new Date()) }, t("action.new")) } : { title: t("state.empty") });
            return h("div", { className: styles["dshc-agenda"] }, groups.map((group) => h("div", { className: styles["dshc-daygroup"], key: group.key },
                h("div", { className: styles["dshc-daylabel"] },
                    h("b", { "data-dsh-serif": "" }, formatDay(group.day)),
                    h("span", { className: styles["dshc-sub"] }, relativeDay(group.day)),
                    h("span", { className: styles["dshc-spacer"] }),
                    canCreate ? h(Btn, { variant: "ghost", onClick: () => onCreateAt(group.day) }, t("action.new")) : null
                ),
                group.items.map((event) => h(Row, { key: eventKey(event), event, onClick: onPick, conflicted: conflicted?.has(event), editable: canCreate }))
            )));
        }
        // ───────────────────────────── 数据 ─────────────────────────────
        /** 去掉毫秒：后端的 assertIsoTime 只认秒级 ISO，浏览器 toISOString 带 .000Z。 */
        function isoOf(date) { return date.toISOString().replace(/\.\d{3}Z$/, "Z"); }
        function rangeOf(view, anchor) {
            if (view === "week") {
                const from = startOfWeek(anchor);
                return { start: isoOf(from), end: isoOf(addDays(from, 7)) };
            }
            if (view === "agenda") {
                const from = startOfDay(new Date());
                return { start: isoOf(from), end: isoOf(addDays(from, 30)) };
            }
            const first = new Date(anchor.getFullYear(), anchor.getMonth(), 1);
            const from = startOfWeek(first);
            return { start: isoOf(from), end: isoOf(addDays(from, 42)) };
        }
        /** 示例数据：只在「没配置」或用户主动点「查看示例」时用，不冒充真实日历。 */
        function demoEvents() {
            const base = startOfDay(new Date());
            const at = (offset, hour, minute) => { const d = addDays(base, offset); d.setHours(hour, minute || 0, 0, 0); return isoOf(d); };
            const dateOnly = (offset) => { const d = addDays(base, offset); return dayKey(d); };
            return [
                { uid: "demo://allday", summary: "📦 项目上线日", start: dateOnly(0), end: dateOnly(1), allDay: true, description: "确认发布说明并完成上线检查", location: "线上", isOccurrence: false },
                { uid: "demo://review", summary: "产品评审会", start: at(0, 10, 0), end: at(0, 11, 0), allDay: false, location: "会议室 A", description: "议程：体验反馈与本周计划", isOccurrence: false },
                { uid: "demo://one-on-one", summary: "1:1 同步", start: at(0, 15, 0), end: at(0, 15, 30), allDay: false, location: "线上", isOccurrence: false },
                { uid: "demo://standup", summary: "每周站会", start: at(1, 9, 30), end: at(1, 9, 50), allDay: false, rrule: "FREQ=WEEKLY;COUNT=6", location: "线上", isOccurrence: false },
                { uid: "demo://standup@2", summary: "每周站会", start: at(8, 9, 30), end: at(8, 9, 50), allDay: false, location: "线上", isOccurrence: true, seriesStart: at(1, 9, 30) },
                { uid: "demo://sync", summary: "与同事同步", start: at(2, 16, 0), end: at(2, 16, 30), allDay: false, location: "线上", description: "同步进度与下一步安排", isOccurrence: false }
            ];
        }
        /** 拉一个时间窗的事件；demo 为真时用示例数据，不打网络。 */
        function useCalendarData(range, reloadToken, demo, configured) {
            const [state, setState] = useState({ loading: true, error: null, events: [], configured: true });
            useEffect(() => {
                if (demo === true) {
                    setState({ loading: false, error: null, events: demoEvents(), configured: true });
                    return () => { };
                }
                if (configured !== true) {
                    setState({ loading: configured === null, error: null, events: [], configured: false });
                    return () => { };
                }
                let alive = true;
                setState((prev) => ({ loading: true, error: null, events: prev.events, configured: prev.configured }));
                api("list", { start: range.start, end: range.end, expand: true, maxOccurrences: 300 })
                    .then((value) => { if (alive)
                    setState({ loading: false, error: null, events: (value && value.events) || [], configured: true }); })
                    .catch((error) => { if (alive)
                    setState({ loading: false, error, events: [], configured: error && error.code !== "not-configured" }); });
                return () => { alive = false; };
            }, [range.start, range.end, reloadToken, demo, configured]);
            return state;
        }
        // ───────────────────────────── 表单 ─────────────────────────────
        /** 事件 → 表单草稿（日期与时间都按浏览器本地时区拆开给 datetime-local 用）。 */
        function draftOfEvent(event) {
            const allDay = event.allDay === true;
            const s = startDate(event);
            const rawEnd = endDate(event);
            // 全天事件的 DTEND 是「次日零点」：编辑时退一天，否则用户会看到莫名多一天。
            const e = allDay ? addDays(rawEnd, -1) : rawEnd;
            const draft = {
                uid: event.uid,
                isSeries: isRecurring(event),
                summary: event.summary || "",
                date: dayKey(s),
                startTime: pad2(s.getHours()) + ":" + pad2(s.getMinutes()),
                endTime: pad2(e.getHours()) + ":" + pad2(e.getMinutes()),
                allDay,
                location: event.location || "",
                description: event.description || "",
                repeat: repeatKeyOf(event.rrule),
                rrule: event.rrule || ""
            };
            if (!allDay) draft.sourceRange = { date: draft.date, startTime: draft.startTime, endTime: draft.endTime, start: isoOf(s), end: isoOf(rawEnd) };
            return draft;
        }
        /** 新建表单：默认落在被点的那一天，上午 10:00–11:00（日历产品的惯例）。 */
        function draftAt(date, hour) {
            const d = date || new Date();
            if (typeof hour === "number") {
                const start = startOfDay(d);
                start.setHours(hour);
                return draftOfEvent({ start: isoOf(start), end: isoOf(new Date(+start + 3600000)), allDay: false });
            }
            return {
                uid: undefined,
                summary: "",
                date: dayKey(d),
                startTime: "10:00",
                endTime: "11:00",
                allDay: false,
                location: "",
                description: "",
                repeat: "",
                rrule: ""
            };
        }
        function repeatKeyOf(rrule) {
            if (!rrule)
                return "";
            const freq = /FREQ=([A-Z]+)/i.exec(rrule);
            if (!freq)
                return "custom";
            const value = freq[1].toUpperCase();
            const simple = rrule.replace(/FREQ=[A-Z]+;?/i, "").replace(/^;|;$/g, "");
            if (simple !== "")
                return "custom";
            if (value === "DAILY")
                return "daily";
            if (value === "WEEKLY")
                return "weekly";
            if (value === "MONTHLY")
                return "monthly";
            if (value === "YEARLY")
                return "yearly";
            return "custom";
        }
        function rruleForRepeat(repeat) {
            if (repeat === "daily")
                return "FREQ=DAILY";
            if (repeat === "weekly")
                return "FREQ=WEEKLY";
            if (repeat === "monthly")
                return "FREQ=MONTHLY";
            if (repeat === "yearly")
                return "FREQ=YEARLY";
            return "";
        }
        /** 草稿 → 后端字段（全天走 DATE，定时走本地时间换算出的 UTC 秒级 ISO）。 */
        function fieldsOfDraft(draft) {
            const fields = { summary: draft.summary.trim(), location: draft.location.trim(), description: draft.description.trim(), ...(draft.isSeries ? { scope: "series" } : {}) };
            if (draft.allDay === true) {
                fields.start = draft.date;
                fields.end = dayKey(addDays(new Date(draft.date + "T00:00:00"), 1));
                fields.allDay = true;
            }
            else {
                if (!/^\d{2}:\d{2}$/.test(draft.startTime || '') || !/^\d{2}:\d{2}$/.test(draft.endTime || '')) throw new Error(calendarText('请补全起止时间','Complete the start and end times'));
                const start = new Date(draft.date + "T" + (draft.startTime || "00:00") + ":00");
                const end = new Date(draft.date + "T" + (draft.endTime || "00:00") + ":00");
                const source = draft.sourceRange, sameDate = source && source.date === draft.date;
                fields.start = sameDate && source.startTime === draft.startTime ? source.start : isoOf(start);
                fields.end = sameDate && source.endTime === draft.endTime ? source.end : isoOf(end);
                fields.allDay = false;
            }
            const rrule = draft.repeat === "custom" ? (draft.rrule || "").trim() : rruleForRepeat(draft.repeat);
            if (rrule !== "")
                fields.rrule = rrule;
            else if (draft.uid !== undefined)
                fields.rrule = "";
            return fields;
        }
        /** 草稿算出来的临时事件，用来做冲突检测（不落盘）。 */
        function asPseudoEvent(draft) {
            try {
                const fields = fieldsOfDraft(draft);
                return { uid: "__draft", summary: fields.summary || "(未命名)", start: fields.start, end: fields.end, allDay: draft.allDay === true };
            } catch { return null; }
        }
        // ───────────────────────────── 连接设置 ─────────────────────────────
        /** 每个服务商要填哪些格子。顺序就是表单里的顺序。 */
        const PROVIDER_FIELDS = {
            google: ["calendarId", "clientId", "clientSecret", "refreshToken", "tokenUrl", "proxyUrl"],
            icloud: ["username", "password", "proxyUrl"],
            nextcloud: ["host", "user", "username", "calendar", "password", "proxyUrl"],
            custom: ["caldavUrl", "username", "password", "proxyUrl"]
        };
        const FIELD_LABEL = {
            caldavUrl: "conn.caldavUrl", username: "conn.username", password: "conn.password",
            host: "conn.host", user: "conn.user", calendar: "conn.calendar", calendarId: "conn.calendarId",
            clientId: "conn.clientId", clientSecret: "conn.clientSecret", refreshToken: "conn.refreshToken",
            tokenUrl: "conn.tokenUrl", proxyUrl: "conn.proxyUrl"
        };
        const SECRET_FIELDS = ["password", "clientSecret", "refreshToken"];
        const PROVIDER_HINT = { google: "conn.googleHint", icloud: "conn.icloudHint", nextcloud: "conn.nextcloudHint", custom: "conn.customHint" };
        /** 字段级小字提示：provider -> 字段 -> 文案 key（没有就不显示）。 */
        const FIELD_HINT = {
            google: { calendarId: "hint.calendarId.google", refreshToken: "hint.refreshToken.google", clientId: "hint.clientId.google", tokenUrl: "hint.tokenUrl" },
            icloud: { caldavUrl: "hint.caldavUrl.icloud", username: "hint.username.icloud", password: "hint.password.icloud" },
            nextcloud: { host: "hint.host.nextcloud", user: "hint.user.nextcloud", username: "hint.username.nextcloud", calendar: "hint.calendar.nextcloud" },
            custom: { caldavUrl: "hint.caldavUrl.custom", username: "hint.username.custom" }
        };
        /** 「怎么拿到这些值」的步骤 + 外链（两边语言各一份文案，链接是共用的）。 */
        const PROVIDER_LINKS = {
            google: [
                { href: "https://console.cloud.google.com/apis/credentials", key: "link.googleConsole" },
                { href: "https://developers.google.com/oauthplayground", key: "link.googlePlayground" }
            ],
            icloud: [{ href: "https://appleid.apple.com/account/manage", key: "link.appleId" }],
            nextcloud: [],
            custom: []
        };
        const PROVIDER_NAMES = ["google", "icloud", "nextcloud", "custom"];
        /** 面板上的连接摘要 → 表单草稿。密钥一律留空，靠 placeholder 说明「已保存」。 */
        function connectionDraftOf(connection) {
            const out = { provider: "" };
            for (const key of Object.keys(FIELD_LABEL))
                out[key] = "";
            if (connection) {
                for (const key of Object.keys(out)) {
                    if (typeof connection[key] === "string")
                        out[key] = connection[key];
                }
            }
            return out;
        }
        /** 「当前：icloud · 你@icloud.com」里的那半句。 */
        function connectionSummary(connection) {
            if (connection === null || connection === undefined)
                return "";
            const provider = connection.provider || "custom";
            const account = connection.calendarId || connection.username || connection.user
                || (connection.host ? String(connection.host).replace(/^https?:\/\//, "") : "")
                || connection.caldavUrl || "";
            return account === "" ? provider : provider + " · " + account;
        }
        /**
         * 连接设置表单：填 → 测试 → 保存。保存前服务端还会再测一次（test:true），
         * 所以「保存成功」等价于「这套凭据刚才真的连上了」。
         */
        function ConnectionForm(props) {
            const { connection, onClose, onSaved, inline, onBusy } = props;
            const formId = useId();
            const [form, setForm] = useState(() => connectionDraftOf(connection));
            const [busy, setBusy] = useState("");
            const [result, setResult] = useState(null);
            const [calendars, setCalendars] = useState([]);
            const maySave = connection?.settingsAvailable !== false;
            useEffect(() => {
                onBusy?.(busy !== "");
                return () => onBusy?.(false);
            }, [busy, onBusy]);
// Update protection: dsh-calendar.connection

            const patch = (fields) => {
                setForm((prev) => Object.assign({}, prev, fields));
                setResult(null);
            };
            const iCloud = form.provider === "icloud";
            const savedICloudPassword = connection?.provider === "icloud" && connection.hasPassword
                && (form.username || "").trim().toLowerCase() === (connection.username || "").trim().toLowerCase();
            const mayDiscover = (form.username || "").trim() !== "" && (!!form.password?.trim() || savedICloudPassword);
            const canConnect = !!form.provider && (!iCloud || (mayDiscover && !!form.caldavUrl?.trim()));
            const changeProvider = provider => {
                if (provider === form.provider) return;
                setCalendars([]);
                patch(provider === "icloud" || iCloud ? { provider, caldavUrl: "", password: "" } : { provider });
            };
            const changeField = (key, value) => {
                if (iCloud && ["username", "password", "proxyUrl"].includes(key)) setCalendars([]);
                patch(iCloud && key === "username" ? { username: value, caldavUrl: "", password: "" } : { [key]: value });
            };
            const visible = PROVIDER_FIELDS[form.provider] || [];
            const payload = () => {
                const out = {};
                for (const key of Object.keys(FIELD_LABEL)) {
                    const value = form[key];
                    if (typeof value !== "string")
                        continue;
                    // 密钥留空 = 保持已存的那一份；其余字段空串服务端也按「保持不变」处理。
                    if (SECRET_FIELDS.indexOf(key) !== -1 && value.trim() === "")
                        continue;
                    out[key] = value.trim();
                }
                if (form.provider !== "")
                    out.provider = form.provider;
                if (form.provider === "google")
                    out.authMethod = "oauth";
                else if (form.provider !== "" && connection && form.provider !== connection.provider)
                    out.authMethod = "basic";
                return out;
            };
            const discover = async () => {
                setBusy("discover");
                setResult(null);
                setCalendars([]);
                try {
                    const value = await api("discoverICloud", payload());
                    setCalendars(value.calendars);
                    setResult({ ok: true, text: calendarText("请选择要连接的日历。", "Choose the calendar you want to connect.") });
                }
                catch (error) { setResult({ ok: false, text: backendMessage(error) }); }
                finally { setBusy(""); }
            };
            const test = async () => {
                setBusy("test");
                setResult(null);
                try {
                    const value = await api("testConnection", payload());
                    const sample = (value.sample || []).join("、");
                    setResult({ ok: true, text: t("conn.ok", { n: value.count }) + (sample === "" ? "" : t("conn.okSample", { sample })) });
                }
                catch (error) {
                    setResult({ ok: false, text: backendMessage(error) });
                }
                finally {
                    setBusy("");
                }
            };
            const save = async () => {
                setBusy("save");
                setResult(null);
                try {
                    onSaved(await api("saveConnection", Object.assign({}, payload(), { test: true })));
                }
                catch (error) {
                    setResult({ ok: false, text: backendMessage(error) });
                }
                finally {
                    setBusy("");
                }
            };
            const disconnect = async () => {
                setBusy("disconnect");
                setResult(null);
                try {
                    onSaved(await api("disconnectConnection", { expectedRevision: connection?.revision }));
                } catch (error) {
                    setResult({ ok: false, text: backendMessage(error) });
                } finally {
                    setBusy("");
                }
            };
            const title = t("conn.title");
            const renderField = key => {
                const secret = SECRET_FIELDS.includes(key);
                const saved = { password: "hasPassword", clientSecret: "hasClientSecret", refreshToken: "hasRefreshToken" }[key];
                const mayKeep = iCloud && key === "password" ? savedICloudPassword : saved && connection?.[saved];
                const hintKey = FIELD_HINT[form.provider]?.[key];
                return h("div", {
                    key, className: clsx(styles["dshc-field"], ["caldavUrl", "host", "tokenUrl", "proxyUrl"].includes(key) && styles.fullField)
                },
                    h("label", { htmlFor: formId + "-" + key }, t(FIELD_LABEL[key])),
                    h(Txt, {
                        id: formId + "-" + key, type: secret ? "password" : "text", disabled: busy !== "",
                        value: form[key] || "", placeholder: mayKeep ? t("conn.keep") : "",
                        onChange: event => changeField(key, event.target.value)
                    }),
                    hintKey ? h("div", { className: styles["dshc-sub"] }, t(hintKey)) : null
                );
            };
            const calendarLabel = calendarText("选择日历", "Choose a calendar");
            const body = h(React.Fragment, null,
                h("p", { className: styles.pageIntro }, t("conn.intro")),
                h("p", { className: styles.pageIntro }, t("conn.credentials")),
                maySave ? null : h("div", { className: clsx(styles["dshc-alert"], styles.warn) }, t("conn.noSettings")),
                h("div", { className: styles["dshc-field"] },
                    h("label", { htmlFor: formId + "-provider" }, t("conn.provider")),
                    h(Picker, {
                        id: formId + "-provider", label: t("conn.provider"), value: form.provider, disabled: busy !== "",
                        options: [{ id: "", label: t("conn.needProvider") }].concat(PROVIDER_NAMES.map(id => ({
                            id, label: { google: "Google CalDAV OAuth", icloud: "iCloud", nextcloud: "Nextcloud", custom: t("provider.custom") }[id]
                        }))),
                        onChange: changeProvider
                    })
                ),
                PROVIDER_HINT[form.provider] ? h("p", { className: styles.pageIntro }, t(PROVIDER_HINT[form.provider])) : null,
                form.provider ? h("details", { className: styles["dshc-steps"] },
                    h("summary", null, t("conn.steps")),
                    h("ol", null, (UI[UI_LANG]["steps." + form.provider] || []).map((line, index) => h("li", { key: index }, line))),
                    h("div", { className: styles.helpLinks }, (PROVIDER_LINKS[form.provider] || []).map(link => h("a", {
                        key: link.href, href: link.href, target: "_blank", rel: "noreferrer", className: styles["dshc-link"]
                    }, t(link.key))))
                ) : null,
                h("div", { className: styles.formGrid }, visible.map(renderField)),
                iCloud ? h("div", { className: styles["dshc-field"] },
                    h("div", null, h(Btn, { onClick: discover, disabled: busy !== "" || !mayDiscover },
                        busy === "discover" ? calendarText("正在发现…", "Discovering…") : calendarText("发现日历", "Discover calendars")
                    )),
                    calendars.length > 0 ? h(Picker, {
                        id: formId + "-icloud-calendars", label: calendarLabel,
                        value: calendars.some(calendar => calendar.url === form.caldavUrl) ? form.caldavUrl : "",
                        options: [{ id: "", label: calendarLabel }].concat(calendars.map((calendar, index) => ({
                            id: calendar.url,
                            label: calendar.name || calendarText("日历 ", "Calendar ") + (index + 1)
                        }))),
                        disabled: busy !== "", onChange: caldavUrl => patch({ caldavUrl })
                    }) : null,
                    h("details", { className: styles["dshc-steps"] },
                        h("summary", null, calendarText("手动填写日历地址", "Enter a calendar URL manually")),
                        renderField("caldavUrl")
                    )
                ) : null,
                result ? h("div", {
                    className: clsx(styles["dshc-alert"], result.ok ? styles.success : styles.error), role: result.ok ? "status" : "alert"
                }, (result.ok ? "✓ " : t("conn.fail") + "：") + result.text) : null,
                connection?.settingsKind === "file" ? h("p", { className: styles.pageIntro }, t("conn.storageFallback")) : null
            );
            const actions = h("div", { className: styles["dshc-actions"] },
                h(Btn, { variant: "ghost", onClick: onClose, disabled: busy !== "" }, t("action.cancel")),
                connection?.configured && maySave ? h(Btn, { variant: "ghost", onClick: disconnect, disabled: busy !== "" },
                    busy === "disconnect" ? calendarText("正在断开…", "Disconnecting…") : calendarText("断开连接", "Disconnect")) : null,
                h(Btn, { onClick: test, disabled: busy !== "" || !canConnect }, busy === "test" ? t("conn.testing") : t("conn.test")),
                h(Btn, { variant: "primary", onClick: save, disabled: busy !== "" || !canConnect || !maySave },
                    busy === "save" ? t("conn.saving") : connection?.disconnected ? calendarText("重新连接", "Reconnect") : t("conn.save"))
            );
            if (inline) return h("section", { className: styles.workspacePage, "aria-label": title, "aria-busy": !!busy },
                h("div", { className: styles.pageInner },
                    h("h2", { className: styles.pageHeading }, title),
                    h("div", { className: styles.card }, body, actions)
                )
            );
            return h(Dlg, { open: true, onClose: () => { if (!busy) onClose(); }, title, children: body, footer: actions });
        }
        // ───────────────────────────── 主面板 ─────────────────────────────
        // ───────────────────────────── 浮层 Esc 的模块级栈 ─────────────────────────────
        // 一个页面可能同时有多个 CalendarPanel（设置页一节 + 对话页悬浮面板）。如果各自往
        // document 挂捕获监听，stopPropagation 拦不住同阶段的其他监听 —— 一次 Esc 会连关
        // 两层；用全局 querySelector 兜底也会被另一个面板的浮层误触发。这里共用一个捕获
        // 监听，按「焦点所在 root / 最近打开的层」只关一层。
        const LAYER_ESCAPE_STACK = [];
        let layerEscapeListener = null;
        function panelRootOf(node) {
            if (node === null || node === undefined || typeof node.closest !== "function")
                return null;
            return node.closest(".dshc-root");
        }
        /** 目标是否位于别的宿主浮层内（那类浮层会自己处理 Esc）。 */
        function isForeignHostLayer(node) {
            if (node === null || node === undefined || typeof node.closest !== "function")
                return false;
            const layer = node.closest('[role="dialog"], [role="alertdialog"]');
            if (layer === null)
                return false;
            if (layer.closest(".dshc-root") !== null)
                return false;
            if (layer.querySelector('[data-dshc-scope="1"]') !== null)
                return false;
            return true;
        }
        /** 是否有别的宿主浮层盖在上面：有就把 Esc 让给宿主，别关下面的日历层。 */
        function hasForeignHostDialog() {
            const dialogs = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
            for (let i = 0; i < dialogs.length; i++) {
                const layer = dialogs[i];
                if (layer.closest(".dshc-root") !== null)
                    continue;
                if (layer.querySelector('[data-dshc-scope="1"]') !== null)
                    continue;
                if (layer.hidden === true || layer.getAttribute("aria-hidden") === "true")
                    continue;
                if (typeof window !== "undefined" && window !== null && typeof window.getComputedStyle === "function") {
                    const style = window.getComputedStyle(layer);
                    if (style.display === "none" || style.visibility === "hidden")
                        continue;
                }
                return true;
            }
            return false;
        }
        function registerLayerEscape(root, closeTop) {
            const entry = { root, closeTop };
            LAYER_ESCAPE_STACK.push(entry);
            if (layerEscapeListener === null) {
                layerEscapeListener = (event) => {
                    if (event.key !== "Escape" || event.isComposing === true)
                        return;
                    const target = event.target;
                    if (target?.closest?.('[role="menu"], [aria-haspopup="menu"][aria-expanded="true"]')) return;
                    // 上层有别的宿主浮层（不是本插件渲染的）时，Esc 归它；
                    // 普通宿主元素（不在任何浮层里）仍然兜底关我们自己的层。
                    if (hasForeignHostDialog() || isForeignHostLayer(target))
                        return;
                    const root = panelRootOf(target);
                    let owner = null;
                    if (root !== null) {
                        for (let i = LAYER_ESCAPE_STACK.length - 1; i >= 0; i--) {
                            const candidate = LAYER_ESCAPE_STACK[i];
                            if (candidate.root !== null && candidate.root.contains(target)) {
                                owner = candidate;
                                break;
                            }
                        }
                    }
                    if (owner === null)
                        owner = LAYER_ESCAPE_STACK[LAYER_ESCAPE_STACK.length - 1] || null;
                    if (owner === null)
                        return;
                    event.preventDefault();
                    event.stopPropagation();
                    owner.closeTop();
                };
                document.addEventListener("keydown", layerEscapeListener, true);
            }
            return () => {
                const index = LAYER_ESCAPE_STACK.indexOf(entry);
                if (index >= 0)
                    LAYER_ESCAPE_STACK.splice(index, 1);
                if (LAYER_ESCAPE_STACK.length === 0 && layerEscapeListener !== null) {
                    document.removeEventListener("keydown", layerEscapeListener, true);
                    layerEscapeListener = null;
                }
            };
        }
        Object.assign(UI.zh, {
            "conn.credentials": "这里填写日历服务的凭据。DSH 的模型 API 密钥不能用于日历登录；Google 使用 OAuth 授权，iCloud 使用应用专用密码。",
            "import.open": "导入 ICS", "import.title": "从 ICS 文件导入日程", "import.intro": "先核对预览，再导入选中的日程。已有相同 UID 的记录会跳过。",
            "import.file": "选择 ICS 文件", "import.paste": "或粘贴 ICS 内容", "import.timezone": "未标注时区的时间按", "import.chooseZone": "请主动选择时区", "import.preview": "预览与检查",
            "import.busy": "正在处理…", "import.close": "关闭导入", "import.select": "选择下一批（最多 20 条）", "import.clear": "清除选择", "import.commit": "确认导入 {n} 条",
            "import.ready": "可导入", "import.blocked": "需要修正", "import.duplicate": "已存在，跳过", "import.imported": "已导入", "import.failed": "失败，可重试",
            "import.conflicts": "首场时间与 {n} 条日程重叠，请核对", "import.recurring": "重复系列 · {n} 条例外", "import.scope": "重叠提示检查首场时间，不代表整个重复系列。每批最多 20 个系列；预览保留 15 分钟。",
            "import.ignored": "另有 {n} 个非日程组件未导入。", "import.limit": "ICS 文件最大 256 KiB；每次预览最多 100 个日程系列。", "import.results": "本批：{ok} 条已导入，{duplicate} 条已存在，{failed} 条失败。",
            "import.connection": "连接设置", "import.errorSize": "文件超过 256 KiB，请分批导出。", "import.stopped": "请求已停止；重新预览可核对已写入的日程。", "import.stop": "停止本批",
            "import.retryHint": "重试只处理失败项，成功项不会重复写入。", "import.noReady": "没有可导入的日程，请检查上面的提示。"
        });
        Object.assign(UI.en, {
            "conn.credentials": "Use credentials for your calendar service here. A DSH model API key cannot sign into a calendar. Google uses OAuth authorization; iCloud uses an app-specific password.",
            "import.open": "Import ICS", "import.title": "Import events from ICS", "import.intro": "Review the preview before importing selected events. Existing UIDs are skipped.",
            "import.file": "Choose an ICS file", "import.paste": "Or paste ICS content", "import.timezone": "Interpret times without a timezone as", "import.chooseZone": "Choose a timezone explicitly", "import.preview": "Preview and check",
            "import.busy": "Working…", "import.close": "Close import", "import.select": "Select next batch (up to 20)", "import.clear": "Clear selection", "import.commit": "Confirm import of {n} events",
            "import.ready": "Ready", "import.blocked": "Needs correction", "import.duplicate": "Already exists; skipped", "import.imported": "Imported", "import.failed": "Failed; retry available",
            "import.conflicts": "The first occurrence overlaps {n} events; please review", "import.recurring": "Recurring series · {n} exceptions", "import.scope": "Overlap checks cover the first occurrence, not the whole series. Up to 20 series per batch; previews expire in 15 minutes.",
            "import.ignored": "{n} non-event components were not imported.", "import.limit": "Up to 256 KiB per file and 100 event series per preview.", "import.results": "Batch: {ok} imported, {duplicate} already present, {failed} failed.",
            "import.connection": "Connection settings", "import.errorSize": "The file exceeds 256 KiB; export smaller batches.", "import.stopped": "Request stopped. Preview again to check which events were saved.", "import.stop": "Stop batch",
            "import.retryHint": "Retry only processes failed items; successful items are not written again.", "import.noReady": "No events are ready to import. Review the messages above."
        });
        async function importApi(action, payload, signal) {
            const res = await fetch(IMPORT_ROUTE, { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json", "X-DSH-Calendar-Import": "1" }, body: JSON.stringify(Object.assign({ action }, payload)), signal });
            let body;
            try {
                body = await res.json();
            }
            catch (e) {
                body = null;
            }
            if (!res.ok || !body || body.ok !== true)
                throw Object.assign(new Error(backendMessage({ message: body && body.message || "HTTP " + res.status, status: res.status })), { status: res.status });
            return body.value;
        }
        function importDate(row) {
            if (!row.start)
                return "";
            if (row.allDay)
                return row.start + (row.end && row.end !== row.start ? " → " + row.end + " (" + (UI_LANG === "en" ? "exclusive end" : "结束日不计入") + ")" : "");
            let timezone = row.timezones && row.timezones[0] || "UTC";
            try {
                new Intl.DateTimeFormat("en", { timeZone: timezone });
            }
            catch (e) {
                timezone = "UTC";
            }
            const fmt = new Intl.DateTimeFormat(UI_LANG === "en" ? "en-GB" : "zh-CN", { timeZone: timezone, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
            return fmt.format(new Date(row.start)) + " → " + fmt.format(new Date(row.end || row.start)) + " · " + timezone;
        }
        function IcsImportPanel(props) {
            const timezoneId = useId();
            const [content, setContent] = useState(""), [timezone, setTimezone] = useState(""), [zones, setZones] = useState(["UTC", "Asia/Shanghai", "America/New_York", "Europe/London"]);
            const [preview, setPreview] = useState(null), [selected, setSelected] = useState([]), [results, setResults] = useState({}), [error, setError] = useState(""), [busy, setBusy] = useState(false);
            const controller = useRef(null), alive = useRef(true), fileSequence = useRef(0);
// Update protection: dsh-calendar.import

            useEffect(() => {
                alive.current = true;
                const abort = new AbortController();
                importApi("zones", {}, abort.signal).then(v => { if (alive.current && Array.isArray(v.zones)) {
                    const common = ["Asia/Shanghai", "UTC", "Asia/Tokyo", "Europe/London", "America/New_York"];
                    setZones(common.concat(v.zones.filter(zone => !common.includes(zone))));
                } }).catch(() => { });
                return () => { alive.current = false; abort.abort(); if (controller.current)
                    controller.current.abort(); };
            }, []);
            useEffect(() => { props.onBusy(busy); return () => props.onBusy(false); }, [busy]);
            const reset = () => { setPreview(null); setSelected([]); setResults({}); setError(""); };
            const update = value => { fileSequence.current++; setContent(value); reset(); };
            const loadFile = async (event) => {
                const file = event.target.files && event.target.files[0];
                if (!file)
                    return;
                const sequence = ++fileSequence.current;
                reset();
                setContent("");
                if (file.size > 256 * 1024) {
                    setError(t("import.errorSize"));
                    return;
                }
                try {
                    const value = await file.text();
                    if (alive.current && sequence === fileSequence.current)
                        setContent(value);
                }
                catch (e) {
                    if (alive.current && sequence === fileSequence.current)
                        setError(backendMessage(e));
                }
            };
            const eligible = preview ? preview.rows.filter(row => row.status === "ready" && !["imported", "duplicate"].includes(results[row.id] && results[row.id].status)) : [];
            const run = async (committing, ids = selected) => {
                if (busy)
                    return;
                setBusy(true);
                setError("");
                const abort = new AbortController();
                controller.current = abort;
                const timer = setTimeout(() => abort.abort(), 125000);
                try {
                    const value = await importApi(committing ? "commit" : "preview", committing ? { id: preview.id, selected: ids, confirmed: true } : { ics: content, floatingTimezone: timezone }, abort.signal);
                    if (!alive.current)
                        return;
                    if (committing) {
                        const next = Object.assign({}, results);
                        value.results.forEach(row => { next[row.id] = row; });
                        setResults(next);
                        setSelected(value.results.filter(row => row.status === "failed").map(row => row.id));
                        props.onImported();
                    }
                    else {
                        setPreview(value);
                        setResults({});
                        setSelected([]);
                    }
                }
                catch (e) {
                    if (alive.current)
                        setError(abort.signal.aborted ? t("import.stopped") : backendMessage(e));
                }
                finally {
                    clearTimeout(timer);
                    controller.current = null;
                    if (alive.current)
                        setBusy(false);
                }
            };
            const count = Object.values(results);
            const failed = eligible.filter(row => results[row.id]?.status === "failed").slice(0, 20).map(row => row.id);
            const importStatusTone = { ready: styles.success, imported: styles.success, blocked: styles.warn, failed: styles.error };
            const title = t("import.title");
            const fields = h("div", { className: styles.card },
                h("div", { className: styles["dshc-field"] },
                    h("label", { htmlFor: timezoneId + "-file" }, t("import.file")),
                    h("input", { id: timezoneId + "-file", className: styles["dshc-input"], type: "file", accept: ".ics,text/calendar", disabled: busy, onChange: loadFile })
                ),
                h("div", { className: styles["dshc-field"] },
                    h("label", { htmlFor: timezoneId + "-paste" }, t("import.paste")),
                    h("textarea", { id: timezoneId + "-paste", className: clsx(styles["dshc-input"], styles.importText), value: content, rows: 5, disabled: busy, onChange: e => update(e.target.value), spellCheck: false })
                ),
                h("div", { className: styles["dshc-field"] },
                    h("label", { htmlFor: timezoneId }, t("import.timezone")),
                    h(Picker, {
                        id: timezoneId, label: t("import.timezone"), value: timezone, disabled: busy,
                        options: [{ id: "", label: t("import.chooseZone") }].concat(zones.map(id => ({
                            id, label: id === "Asia/Shanghai" ? calendarText("北京时间 · Asia/Shanghai", "Beijing time · Asia/Shanghai") : id
                        }))),
                        onChange: value => { setTimezone(value); reset(); }
                    })
                ),
                h("p", { className: styles["dshc-sub"] }, t("import.limit")),
                h("div", { className: styles["dshc-import-actions"] },
                    h(Btn, { variant: preview ? "outline" : "primary", disabled: busy || !content.trim(), onClick: () => run(false) }, busy ? t("import.busy") : t("import.preview")),
                    busy ? h(Btn, { onClick: () => controller.current?.abort() }, t("import.stop")) : null
                )
            );
            const previewCard = preview ? h("div", { className: styles.card },
                h("div", { className: styles.cardToolbar },
                    h("h3", null, t("import.preview")),
                    h("div", { className: styles["dshc-actions"] },
                        failed.length ? h(Btn, { disabled: busy || !preview.connectionReady, onClick: () => run(true, failed) },
                            calendarText("重试失败项", "Retry failed items")) : null,
                        h(Btn, { variant: "primary", disabled: busy || !preview.connectionReady || !selected.length, onClick: () => run(true) }, t("import.commit", { n: selected.length }))
                    )
                ),
                preview.connectionReady === false ? h("div", { className: clsx(styles["dshc-alert"], styles.warn) },
                    backendMessage(preview.connectionMessage), h(Btn, { onClick: props.onConnection }, t("import.connection"))) : null,
                h("p", { className: styles["dshc-sub"] }, t("import.scope")),
                preview.ignored ? h("p", null, t("import.ignored", { n: preview.ignored })) : null,
                h("div", { className: styles["dshc-import-actions"] },
                    h(Btn, { variant: "ghost", disabled: busy || !eligible.length, onClick: () => setSelected(eligible.slice(0, 20).map(row => row.id)) }, t("import.select")),
                    h(Btn, { variant: "ghost", disabled: busy || !selected.length, onClick: () => setSelected([]) }, t("import.clear"))
                ),
                h("div", { className: styles["dshc-import-rows"] }, preview.rows.map(row => {
                    const result = results[row.id], status = result?.status || row.status;
                    const checked = selected.includes(row.id);
                    const done = status === "imported" || status === "duplicate";
                    return h("div", { key: row.id, className: styles["dshc-import-row"] },
                        h("div", { className: styles["dshc-import-pick"] },
                            h(Chk, { label: row.summary, checked,
                                disabled: busy || row.status !== "ready" || done || (!checked && selected.length >= 20),
                                onChange: next => setSelected(prev => next ? prev.concat(row.id) : prev.filter(id => id !== row.id)) }),
                            h("span", { className: clsx(styles["dshc-tag"], importStatusTone[status]) }, t("import." + status))
                        ),
                        h("p", { className: styles["dshc-mono"] }, importDate(row)),
                        row.recurring ? h("p", null, t("import.recurring", { n: row.exceptions })) : null,
                        !done && row.conflicts ? h("p", { className: styles["dshc-import-warning"] }, t("import.conflicts", { n: row.conflicts })) : null,
                        !done ? row.warnings.concat(row.errors).map((message, i) => h("p", { key: i, className: styles["dshc-import-warning"] }, backendMessage(message))) : null,
                        result?.message ? h("p", { role: "alert" }, backendMessage(result.message)) : null
                    );
                })),
                count.length ? h("p", { role: "status" }, t("import.results", {
                    ok: count.filter(row => row.status === "imported").length,
                    duplicate: count.filter(row => row.status === "duplicate").length,
                    failed: count.filter(row => row.status === "failed").length
                })) : null,
                failed.length ? h("p", { className: styles["dshc-sub"] }, t("import.retryHint")) : null,
                !eligible.length && !count.length ? h("p", null, t("import.noReady")) : null
            ) : null;
            return h("section", { className: styles.workspacePage, "aria-label": title, "aria-busy": busy },
                h("div", { className: styles.pageInner },
                    h("div", { className: styles.pageHeader },
                        h("h2", { className: styles.pageHeading }, title),
                        h(IconButton, { label: t("import.close"), icon: "close", disabled: busy, onClick: props.onClose })
                    ),
                    h("p", { className: styles.pageIntro }, t("import.intro")),
                    fields,
                    error ? h("p", { className: clsx(styles["dshc-alert"], styles.error), role: "alert" }, error) : null,
                    previewCard
                )
            );
        }
        const NO_EVENTS = [];

        function CalendarPanel(props) {
            useUILanguage();
            const compact = props.compact === true;
            const workbench = props.workbench === true;
            const workspaceId = useId();
            const viewId = useId();
            const [view, setView] = useState(loadStoredView);
            const [anchor, setAnchor] = useState(() => new Date());
            const [showCalendar, setShowCalendar] = useState(true);
            const [hiddenCalendars, setHiddenCalendars] = useState(() => new Set());
            const toggleCalendar = id => setHiddenCalendars(previous => { const next = new Set(previous); if (next.has(id)) next.delete(id); else next.add(id); return next; });
            const [demo, setDemo] = useState(false);
            const [reloadToken, setReloadToken] = useState(0);
            const [selected, setSelected] = useState(null);
            const [draft, setDraft] = useState(null);
            const [busy, setBusy] = useState(false);
            const [formError, setFormError] = useState(null);
            const [banner, setBanner] = useState(null);
            const [confirmDelete, setConfirmDelete] = useState(false);
            const [configured, setConfigured] = useState(null);
            const [conn, setConn] = useState(null);
            const [connOpen, setConnOpen] = useState(false);
            const [tool, setTool] = useState("schedule");
            const [layout, setLayout] = useState(loadCalendarLayout);
            const [palette, setPalette] = useState(loadCalendarPalette);
            const [dshStyle, setDshStyle] = useDshStyle(React);
            const [dshFont, setDshFont] = useDshFont(React);
            const dark = useCalendarDarkMode(workbench && dshStyle === "harness");
            const appearance = useMemo(() => workbench ? calendarAppearance(layout, palette, dark ? "dark" : "light", dshStyle) : undefined,
                [workbench, layout, palette, dark, dshStyle]);
            const [utility, setUtility] = useState(null);
            const [importBusy, setImportBusy] = useState(false);
            const [availabilityBusy, setAvailabilityBusy] = useState(false);
            const [connectionBusy, setConnectionBusy] = useState(false);
            const [tour, setTour] = useState({ open: false, step: 0, manual: false });
            const [tourLayout, setTourLayout] = useState(null);
            const importOpen = tool === "import";
            const availabilityOpen = tool === "availability";
            const connectionOpen = tool === "connection";
            const layerOpen = draft !== null || selected !== null || connOpen === true || utility !== null;
            // Update protection: dsh-calendar

            const rootRef = useRef(null);
            const triggerRef = useRef(null);
            const layerOpenRef = useRef(layerOpen);
            layerOpenRef.current = layerOpen;
            useEffect(() => {
                if (layerOpen && tour.open) {
                    setTour(prev => ({ ...prev, open: false }));
                }
            }, [layerOpen, tour.open]);
            /** 让 Launcher 知道本面板里有没有浮层：宿主 Portal 的 Esc 不能被面板级监听抢走。 */
            useEffect(() => {
                const notify = typeof props.onLayerChange === "function" ? props.onLayerChange : null;
                if (notify !== null)
                    notify(layerOpen);
                return () => { if (notify !== null)
                    notify(false); };
            }, [layerOpen]);
            /** 面板内浮层的打开顺序：Esc 关最后打开的那个，而不是按类型硬编码。 */
            const layerOrderRef = useRef([]);
            useEffect(() => {
                const openKeys = [];
                if (selected !== null)
                    openKeys.push("selected");
                if (draft !== null)
                    openKeys.push("draft");
                if (connOpen === true)
                    openKeys.push("conn");
                if (utility !== null)
                    openKeys.push("utility");
                const kept = layerOrderRef.current.filter((key) => openKeys.indexOf(key) !== -1);
                const added = openKeys.filter((key) => kept.indexOf(key) === -1);
                layerOrderRef.current = kept.concat(added);
            }, [draft, connOpen, selected, utility]);
            /**
             * Esc 分层关闭：有浮层时只关最上面一层（表单/连接设置 > 详情抽屉）。
             * 监听走模块级的层栈 —— 多个 CalendarPanel 并存时一次 Esc 只关一层；
             * 焦点在上层宿主 Portal 里时直接让行，交给宿主自己的 Esc 语义。
             */
            useEffect(() => {
                if (layerOpen !== true)
                    return () => { };
                const root = rootRef.current;
                if (root === null)
                    return () => { };
                const closeTop = () => {
                    const order = layerOrderRef.current;
                    const top = order.length === 0 ? null : order[order.length - 1];
                    if (top === "draft") {
                        setDraft(null);
                        setFormError(null);
                        setConfirmDelete(false);
                    }
                    else if (top === "conn")
                        setConnOpen(false);
                    else if (top === "utility")
                        setUtility(null);
                    else if (top === "selected") {
                        setSelected(null);
                        setConfirmDelete(false);
                    }
                };
                return registerLayerEscape(root, closeTop);
            }, [draft, selected, connOpen, utility]);
            /** 乐观改期：uid → { start, end }。等服务器回读到同样的时间再撤掉，避免闪回。 */
            const [overrides, setOverrides] = useState({});
            const [undo, setUndo] = useState(null);
            const undoTimer = useRef(0);
            /** 每个 uid 一个串行队列：见 applyMove 的注释。 */
            const moveQueue = useRef({});
            useEffect(() => () => { if (undoTimer.current)
                clearTimeout(undoTimer.current); }, []);
            useEffect(() => {
                let alive = true;
                api("connection", {}).then((value) => { if (alive) {
                    setConn(value);
                    setConfigured(value && value.configured !== false);
                } })
                    .catch(() => { if (alive)
                    setConfigured(true); }); // 状态都问不到时按「已配置」处理，让错误条去解释
                return () => { alive = false; };
            }, [reloadToken]);
            const range = useMemo(() => rangeOf(view, anchor), [view, anchor.getFullYear(), anchor.getMonth(), anchor.getDate()]);
            const data = useCalendarData(range, reloadToken, demo, configured);
            const reload = () => setReloadToken((n) => n + 1);
            /** 渲染用的事件：把乐观改期叠加在服务器数据之上。 */
            const eventsWithMoves = useMemo(() => data.events.map((event) => {
                const override = overrides[event.uid];
                return override === undefined ? event : Object.assign({}, event, override);
            }), [data.events, overrides]);
            const visibleEvents = useMemo(() => demo ? eventsWithMoves
                : showCalendar ? eventsWithMoves.filter(event => !event.calendarId || !hiddenCalendars.has(event.calendarId)) : NO_EVENTS,
                [demo, showCalendar, eventsWithMoves, hiddenCalendars]);
            const { count: conflicts, conflicted, overlap } = useMemo(() => conflictSummary(visibleEvents), [visibleEvents]);
            const source = conn?.configured ? conn.calendar || connectionSummary(conn) : null;
            /**
             * 改期成功后把焦点还给同一个日程。
             *
             * 位置必须在 const data = useCalendarData(...) **之后**：依赖数组 [data.events] 在渲染期求值，
             * 写在前面会直接 TDZ 抛错（panel 每次渲染就崩 —— 纯函数测试抓不到，评审抓到了）。
             * 另外只在「焦点还在面板里」时才回收，免得用户在慢 reload 期间已经点到别处又被抢回来。
             */
            const focusUid = useRef(null);
            useEffect(() => {
                const uid = focusUid.current;
                if (uid === null)
                    return;
                focusUid.current = null;
                const active = document.activeElement;
                const inPanel = active === undefined || active === null || active === document.body
                    || (typeof active.closest === "function" && active.closest(".dshc-root") !== null);
                if (inPanel !== true)
                    return;
                try {
                    const selector = '.dshc-slot[data-uid="' + String(uid).replace(/"/g, '\\"') + '"]';
                    const node = document.querySelector(selector);
                    if (node !== null && typeof node.focus === "function")
                        node.focus({ preventScroll: true });
                }
                catch (error) { /* uid 里有怪字符就算了，不值得为此报错 */ }
            }, [data.events]);
            /** 服务器回读到新时间后，撤掉对应的乐观覆盖（否则会一直盖着）。 */
            useEffect(() => {
                setOverrides((prev) => {
                    const uids = Object.keys(prev);
                    if (uids.length === 0)
                        return prev;
                    const next = Object.assign({}, prev);
                    let changed = false;
                    for (const uid of uids) {
                        const stored = data.events.find((event) => event.uid === uid);
                        if (stored !== undefined && stored.start === prev[uid].start && stored.end === prev[uid].end) {
                            delete next[uid];
                            changed = true;
                        }
                    }
                    return changed ? next : prev;
                });
            }, [data.events]);
            /** 乐观改期的落盘：先动画面、再发请求；失败就把覆盖撤掉并报错。 */
            /**
             * 改期落盘：**按 uid 串行 + 合并**。
             *
             * 按住方向键会按 repeat 频率连发，直接并发发 PUT 的话：乱序可能让服务器停在中间某个时间、
             * 而先发的那次失败会把后发那次的乐观位置一起回滚掉。这里同一 uid 只跑一个请求，
             * 期间来的新落点合并成「最后一次」，跑完再接着发。
             */
            const applyMove = (event, range) => {
                const uid = event.uid;
                const shown = overrides[uid] === undefined ? { start: event.start, end: event.end } : overrides[uid];
                if (range.start === shown.start && range.end === shown.end)
                    return; // 无效位移（同一格内晃一下）不发请求
                const queue = moveQueue.current;
                if (queue[uid] === undefined)
                    queue[uid] = { running: false, next: null };
                const entry = queue[uid];
                if (entry.running === true) {
                    entry.next = range;
                    return;
                }
                entry.running = true;
                void drain(uid, event, range, entry);
            };
            /** 串行队列的驱动：失败即回滚 + 对账（超时可能已经落盘，不能假设「失败 = 没改」）。 */
            const drain = async (uid, event, firstRange, entry) => {
                const original = { uid, start: event.start, end: event.end, summary: event.summary };
                let range = firstRange;
                try {
                    for (;;) {
                        setOverrides((prev) => Object.assign({}, prev, { [uid]: { start: range.start, end: range.end } }));
                        try {
                            await api("update", { uid, start: range.start, end: range.end });
                        }
                        catch (error) {
                            setOverrides((prev) => { const next = Object.assign({}, prev); delete next[uid]; return next; });
                            notify(t("move.failed", { message: error !== null && error !== undefined && error.message ? error.message : String(error) }));
                            reload(); // 对账：超时/断连时服务器可能已经改了
                            break;
                        }
                        focusUid.current = uid;
                        // 一次「连续操作」只留一个撤销点：记录的是这段操作前的原始位置，而不是上一小步。
                        setUndo(Object.assign({ recurring: false }, original));
                        if (undoTimer.current)
                            clearTimeout(undoTimer.current);
                        undoTimer.current = setTimeout(() => setUndo(null), 5000);
                        reload();
                        if (entry.next === null)
                            break;
                        range = entry.next;
                        entry.next = null;
                    }
                }
                finally {
                    entry.running = false;
                    if (entry.next === null)
                        delete moveQueue.current[uid];
                    else {
                        const pending = entry.next;
                        entry.next = null;
                        applyMove(event, pending);
                    }
                }
            };
            /** 改期入口：重复日程先问一句（拖动会移动整个系列，这是语义雷区，不能悄悄做）。 */
            const reschedule = (event, range) => {
                if (demo === true) {
                    notify(t("demo.banner"));
                    return;
                }
                // 重复日程暂不支持拖动改期：CalDAV 里整个系列是一个对象，而 update 只能改 master 的
                // DTSTART —— 把「这次实例的目标时间」发过去等于**重锚系列起点**（早于它的实例全丢、
                // COUNT/UNTIL 语义被改，撤销也回不到原系列）。评审实测过，这里必须先挡住。
                if (isRecurring(event)) {
                    notify(t("move.recurringUnsupported"));
                    return;
                }
                // 超过 24 小时的日程：当天放不下，任何位移都会被钳到 00:00，语义不清，一并挡住。
                if (slotFromEvent(event).durationMinutes > 24 * 60) {
                    notify(t("move.tooLong"));
                    return;
                }
                applyMove(event, range);
            };
            /** 撤销：把上一次改期前的 start/end 再写回去。 */
            const undoMove = async () => {
                if (undo === null)
                    return;
                const target = undo;
                setUndo(null);
                if (undoTimer.current)
                    clearTimeout(undoTimer.current);
                const optimistic = true; // 撤销只服务单次日程（重复日程不走拖动）
                if (optimistic === true)
                    setOverrides((prev) => Object.assign({}, prev, { [target.uid]: { start: target.start, end: target.end } }));
                try {
                    await api("update", { uid: target.uid, start: target.start, end: target.end });
                    reload();
                }
                catch (error) {
                    if (optimistic === true)
                        setOverrides((prev) => { const next = Object.assign({}, prev); delete next[target.uid]; return next; });
                    notify(t("move.failed", { message: error !== null && error !== undefined && error.message ? error.message : String(error) }));
                }
            };
            /** 未连接日历时的点法：别让按钮「点了没反应」，直接打开连接设置并说明原因。 */
            const connectFirst = () => {
                setConnOpen(true);
                notify(calendarText('请先连接日历，再新建日程或查找空闲时段。', 'Connect a calendar before creating events or finding available time.'));
            };
            const notify = (text) => { setBanner(text); setTimeout(() => setBanner((current) => (current === text ? null : current)), 2200); };
            const title = view === "week" ? formatWeekTitle(anchor) : view === "agenda" ? t("view.agenda") : formatMonthTitle(anchor);
            const step = (delta) => setAnchor((current) => (view === "week" ? addDays(current, delta * 7) : addMonthShift(current, delta)));
            const submit = async (form) => {
                if (demo === true) {
                    setFormError(t("demo.banner"));
                    return;
                }
                setBusy(true);
                setFormError(null);
                try {
                    const fields = fieldsOfDraft(form);
                    if (form.uid === undefined)
                        await api("create", fields);
                    else
                        await api("update", Object.assign({ uid: form.uid }, fields));
                    setDraft(null);
                    setSelected(null);
                    reload();
                    notify(form.uid === undefined ? calendarText("已创建", "Event created") : calendarText("已保存", "Event saved"));
                }
                catch (error) {
                    setFormError(backendMessage(error));
                }
                finally {
                    setBusy(false);
                }
            };
            const remove = async (event) => {
                if (demo === true) {
                    notify(t("demo.banner"));
                    return;
                }
                setBusy(true);
                try {
                    await api("delete", { uid: event.uid, ...(isRecurring(event) ? { scope: "series" } : {}) });
                    setSelected(null);
                    setConfirmDelete(false);
                    reload();
                    setDraft(null);
                    setFormError(null);
                    notify(calendarText("已删除", "Event deleted"));
                }
                catch (error) {
                    if (draft) setFormError(backendMessage(error));
                    else setBanner(backendMessage(error));
                }
                finally {
                    setBusy(false);
                }
            };
            const toolBusy = importBusy || availabilityBusy || connectionBusy;
            const backToSchedule = () => setTool("schedule");
            const showAvailability = () => {
                if (configured === true) setTool("availability");
                else connectFirst();
            };
            const createAt = (day, hour) => {
                if (demo) {
                    notify(t("demo.banner"));
                    return;
                }
                if (conn?.readOnly === true) {
                    notify(calendarText("这个日历是只读的。", "This calendar is read-only."));
                    return;
                }
                setConfirmDelete(false);
                setFormError(null);
                setDraft(draftAt(day, hour));
            };
            const startDraft = () => configured === true ? createAt(anchor) : connectFirst();
            const finishConnection = value => {
                if (value?.connection) {
                    setConn(value.connection);
                    setConfigured(value.connection.configured === true);
                }
                setConnOpen(false);
                if (connectionOpen) backToSchedule();
                setDemo(false);
                setShowCalendar(!value?.disconnected);
                reload();
                notify(value?.disconnected ? calendarText("已断开连接，随时可以重新连接。", "Disconnected. You can reconnect anytime.") : t("conn.savedToast"));
            };
            const openEvent = event => {
                setConfirmDelete(false);
                setFormError(null);
                if (workbench && !demo && !isRecurring(event)) {
                    setDraft(draftOfEvent(event));
                } else {
                    setSelected(event);
                }
            };
            const closeReview = () => {
                setSelected(null);
                setConfirmDelete(false);
            };
            const closeDraft = () => {
                setDraft(null);
                setFormError(null);
                setConfirmDelete(false);
            };
            const editEvent = async event => {
                if (!isRecurring(event) || demo) {
                    closeReview();
                    setDraft(draftOfEvent(event));
                    return;
                }
                setBusy(true);
                try {
                    const value = await api("event", { uid: event.uid });
                    closeReview();
                    setDraft({ ...draftOfEvent(value.event), isSeries: true });
                } catch (error) {
                    setBanner(backendMessage(error));
                } finally {
                    setBusy(false);
                }
            };
            const selectView = name => { setView(name); storeView(name); };
            const views = h(Segments, {
                id: viewId, label: calendarText("日历视图", "Calendar view"),
                items: VIEWS.map(value => ({ value, label: t("view." + value) })), value: view, onChange: selectView
            });
            const period = h("div", { className: styles.period },
                view !== "agenda" ? h(Btn, { onClick: () => setAnchor(new Date()) }, t("action.today")) : null,
                view !== "agenda" ? h(IconButton, { icon: "left", label: t("action.prev"), onClick: () => step(-1) }) : null,
                view !== "agenda" ? h(IconButton, { icon: "right", label: t("action.next"), onClick: () => step(1) }) : null,
                h("strong", { className: styles["dshc-monthhead"], "data-dsh-serif": "" }, title)
            );
            const refresh = demo
                ? h(Btn, { onClick: () => setDemo(false) }, t("action.exitDemo"))
                : h(IconButton, { icon: "refresh", label: t("action.refresh"), "aria-busy": data.loading || undefined, onClick: reload });
            const availabilityLabel = calendarText("找空闲时段", "Find available time");
            const quickLabel = calendarText("日历快捷操作", "Calendar quick actions");
            const isDarwin = workbench && document.documentElement.dataset.platform === "darwin";
            const quickKey = isDarwin ? "⌘⇧K" : "Ctrl+Shift+K";
            const compactQuickKey = isDarwin ? "⌘K" : "^K";
            const layoutOptions = workbench ? calendarLayoutOptions() : [];
            const selectLayout = value => { setLayout(value); storeCalendarPreference(CALENDAR_LAYOUT_KEY, value); };
            const selectPalette = value => { setPalette(value); storeCalendarPreference(CALENDAR_PALETTE_KEY, value); };
            const reviewConflicts = () => setUtility("conflicts");
            const readOnly = conn?.readOnly === true;
            const canCreate = !demo && configured !== null && !toolBusy && !readOnly;
            const closeTour = (restoreFocus = false) => {
                writeCalendarTourDone();
                setTour(prev => ({ ...prev, open: false }));
                if (restoreFocus) {
                    setTimeout(() => {
                        (triggerRef.current || rootRef.current?.querySelector?.("[data-calendar-tour-trigger]"))?.focus?.();
                    }, 0);
                }
            };
            const tourSteps = [
                {
                    id: "focus-ribbon",
                    selector: '[data-calendar-focus-ribbon="true"]',
                    fallback: '[data-tour="calendar-views"]',
                    side: "bottom",
                    title: calendarText("今日聚焦条：下一场倒计时、冲突状态与快速新建", "Today Focus Ribbon: countdown, conflicts & quick add"),
                    desc: calendarText("聚焦条常驻日历画布上方，一眼看清今天日期、下一场日程倒计时与无冲突/告警状态，支持 1 键「+ 快速新建」或回到今天；点顶栏「日历连接」可配置 iCloud / Google / CalDAV。", "The Today Focus Ribbon keeps today's date, next event countdown, conflict status, and + Quick add always in view; configure iCloud, Google OAuth, Nextcloud, or CalDAV in Connection.")
                },
                {
                    id: "availability",
                    selector: '[data-segment-id="availability"], [id$="-availability"]',
                    fallback: '[data-tour="calendar-workspace-tabs"]',
                    side: "bottom",
                    title: calendarText("查找空闲时段并一键复制候选时间", "Find free slots & copy meeting options"),
                    desc: calendarText("按 F 打开「找空闲时段」，查出候选后点「复制空闲时段文案」直接发微信/钉钉/邮件，或复制下方指令交给助手：", "Press F for Find available time and click Copy free slots summary for chat/email—or copy this assistant prompt:"),
                    prompt: calendarText("帮我查一下本周工作时间的空闲时段，整理成可发送的会议候选时间", "Find my free working-hour slots this week and format meeting options"),
                    promptLabel: calendarText("复制查空档指令", "Copy free-slots prompt")
                },
                {
                    id: "smart-draft",
                    selector: '[data-tour="calendar-new-event"]',
                    fallback: ".topbar",
                    side: "bottom",
                    title: calendarText("冲突检查与从文字 / 截图智能建日程", "Conflict checks & smart drafts from text or screenshots"),
                    desc: calendarText("点击「新建日程」或聚焦条「+ 快速新建」，可粘贴通知文字或拖入截图自动生成草稿，保存前自动检测时间重叠并在侧栏汇总冲突。", "Paste message text or drop a screenshot in New event / + Quick add to generate a reviewed draft, with automatic overlap detection before saving.")
                }
            ];
            const commandActions = workbench ? [
                ...(readOnly ? [] : [{ id: "create", key: "n", label: t("action.new"), run: startDraft, disabled: !canCreate }]),
                { id: "availability", key: "f", label: availabilityLabel, run: showAvailability, disabled: demo || configured === null },
                { id: "conflicts", label: calendarText("查看日程冲突", "Review scheduling conflicts"), run: reviewConflicts, disabled: conflicts === 0 },
                ...(readOnly ? [] : [{ id: "import", label: t("import.open"), run: () => setTool("import"), disabled: demo }]),
                { id: "connection", label: t("conn.title"), run: () => setTool("connection"), disabled: configured === null },
                { id: "tour", label: calendarText("使用引导", "Interactive guide"), run: () => setTour({ open: true, step: 0, manual: true }) },
                ...VIEWS.map(name => ({
                    id: name, key: name[0],
                    label: calendarText("切换到" + t("view." + name) + "视图", "Switch to " + t("view." + name)),
                    run: () => { backToSchedule(); selectView(name); }
                }))
            ] : [];
            function onWorkbenchKeyDown(event) {
                if (layerOpen || toolBusy || event.defaultPrevented || event.nativeEvent?.isComposing) return;
                if (event.target.closest?.('input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"], [role="menu"], [role="dialog"], [role="alertdialog"], [aria-expanded="true"][aria-haspopup="menu"]')) return;
                const key = event.key.toLowerCase();
                if (key === "k" && (event.ctrlKey || event.metaKey) && event.shiftKey && !event.altKey) {
                    event.preventDefault();
                    event.stopPropagation();
                    setUtility("commands");
                    return;
                }
                if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || tool !== "schedule") return;
                const action = commandActions.find(action => action.key === key && !action.disabled);
                if (!action) return;
                event.preventDefault();
                event.stopPropagation();
                action.run();
            }
            const compactToolbar = compact ? h("header", { className: styles["dshc-toolbar"] },
                h("h2", { className: styles["dshc-title"] }, t("section.title")),
                tool === "schedule" ? period : null,
                tool === "schedule" ? views : null,
                h("span", { className: styles["dshc-spacer"] }),
                h(Btn, { disabled: configured === null || toolBusy, onClick: () => setConnOpen(true) }, t("conn.button")),
                readOnly ? null : h(Btn, { disabled: demo || toolBusy, onClick: () => importOpen ? backToSchedule() : setTool("import") }, t("import.open")),
                h(Btn, { disabled: demo || configured !== true || toolBusy, onClick: () => availabilityOpen ? backToSchedule() : showAvailability() }, availabilityLabel),
                refresh,
                readOnly ? null : h(Btn, { variant: "primary", disabled: demo || toolBusy, onClick: () => createAt(anchor) }, t("action.new"))
            ) : null;
            const topbar = !compact ? h("header", { className: clsx(styles.topbar, "dsh-header"), "data-dsh-header": "" },
                h("div", { className: clsx(styles.brand, "dsh-header-brand") },
                    h("span", { className: clsx(styles.brandMark, "dsh-header-badge") }, h(CalendarIcon)),
                    h("h1", { className: "dsh-header-title" }, t("section.title"))
                ),
                h(Segments, {
                    id: workspaceId, label: t("section.title"), value: tool, disabled: toolBusy,
                    "data-tour": "calendar-workspace-tabs",
                    items: [
                        { value: "schedule", label: calendarText("日程", "Schedule") },
                        { value: "availability", label: calendarText("找空闲时段", "Free time"), disabled: demo || configured === null },
                        ...(readOnly ? [] : [{ value: "import", label: t("import.open"), disabled: demo }]),
                        { value: "connection", label: calendarText("日历连接", "CalDAV"), disabled: configured === null }
                    ],
                    onChange: next => next === "availability" ? showAvailability() : setTool(next)
                }),
                h("div", { className: clsx(styles.topActions, "dsh-header-actions") },
                    h("span", { className: styles.zone }, Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"),
                    h(Btn, {
                        ref: triggerRef,
                        variant: "ghost",
                        className: styles.tourTrigger,
                        "data-tour-trigger": "",
                        "data-calendar-tour-trigger": "",
                        "aria-label": calendarText("使用引导", "Interactive guide"),
                        "aria-expanded": Boolean(tour.open && !layerOpen),
                        title: calendarText("使用引导", "Interactive guide"),
                        onClick: () => (tour.open && !layerOpen ? closeTour(true) : setTour({ open: true, step: 0, manual: true }))
                    }, calendarText("? 引导", "? Tour")),
                    workbench ? h(Btn, {
                        className: styles.commandTrigger, icon: "search", disabled: toolBusy,
                        "aria-label": quickLabel, title: quickLabel + " (" + quickKey + ")",
                        onClick: () => setUtility("commands"), "aria-keyshortcuts": "Control+Shift+K Meta+Shift+K"
                    }, h("kbd", { className: styles.triggerKey }, compactQuickKey)) : null,
                    readOnly ? null : h(Btn, { variant: "primary", icon: "plus", "data-tour": "calendar-new-event", disabled: !canCreate, onClick: startDraft }, t("action.new"))
                )
            ) : null;

            const renderCalendar = () => {
                if (!demo && configured === false) {
                    return h(EmptyState, {
                        title: t("state.notConfigured"),
                        action: h(React.Fragment, null,
                            h(Btn, { variant: "primary", onClick: () => setConnOpen(true) }, t("conn.button")),
                            h(Btn, { onClick: () => setDemo(true) }, t("action.demo"))
                        )
                    }, h("p", null, t("state.notConfiguredHint")));
                }
                if (configured === null || (data.loading && data.events.length === 0)) {
                    return h("div", { className: styles["dshc-grid"], role: "status", "aria-busy": true, "aria-label": t("state.loading") },
                        Array.from({ length: configured === null ? 7 : 14 }, (_, key) =>
                            h("div", { className: clsx(styles["dshc-skel"], "dsh-skeleton"), "data-dsh-skeleton": "rect", "data-animated": "true", key })));
                }
                const calendarProps = { anchor, events: visibleEvents, conflicted, onPick: openEvent, onCreateAt: createAt, canCreate: !readOnly };
                const calendar = view === "week"
                    ? h(WeekView, { ...calendarProps, onReschedule: demo || readOnly ? undefined : reschedule })
                    : view === "agenda" ? h(AgendaView, calendarProps) : h(MonthView, calendarProps);
                const message = !demo && !showCalendar
                    ? calendarText("当前日历已隐藏。", "The connected calendar is hidden.")
                    : !demo && view !== "agenda" && !data.loading && data.events.length === 0 && !data.error
                        ? readOnly ? calendarText("这段时间没有日程。", "Nothing scheduled in this range.") : calendarText("这段时间没有日程。点日期格或「新建日程」开始。", "Nothing scheduled in this range. Click a date or use New event.")
                        : null;
                return h(React.Fragment, null,
                    message ? h("p", { className: styles["dshc-emptyhint"], role: "status" }, message) : null,
                    calendar
                );
            };
            const schedule = tool === "schedule" ? h(ScheduleLayout, {
                resizable: workbench && !compact,
                rail: compact ? null : h(ScheduleRail, {
                    id: viewId + "-sidebar",
                    anchor, onPick: setAnchor, source, showing: showCalendar, onVisibilityChange: setShowCalendar,
                    calendars: Array.isArray(conn?.calendars) && conn.calendars.length > 1 ? conn.calendars : null, hiddenCalendars, onToggleCalendar: toggleCalendar,
                    conflicts, overlap, workbench, loading: configured === null,
                    onReviewConflicts: workbench ? reviewConflicts : undefined
                })
            },
                h("div", { className: styles.scheduleMain },
                    compact ? null : h("div", { className: styles.calendarToolbar }, period,
                        h("div", { className: styles.period, "data-tour": "calendar-views" }, views,
                            workbench && conflicts > 0 ? h(Btn, {
                                className: styles.toolbarConflicts, icon: "warning", onClick: reviewConflicts
                            }, calendarText("查看日程冲突", "Review conflicts")) : null,
                            refresh)),
                    data.error && !demo && configured !== false ? h("div", { className: clsx(styles["dshc-alert"], styles.error), role: "alert" },
                        backendMessage(data.error) || t("error.load"),
                        h("span", { className: styles["dshc-spacer"] }),
                        h(Btn, { onClick: reload }, t("action.retry"))
                    ) : null,
                    !compact ? h(TodayFocusRibbon, {
                        events: visibleEvents,
                        conflicts,
                        canCreate,
                        readOnly,
                        configured,
                        demo,
                        onJumpToday: () => setAnchor(new Date()),
                        onOpenEvent: openEvent,
                        onReviewConflicts: reviewConflicts,
                        onCreate: startDraft
                    }) : null,
                    h("div", { className: styles.calendarSurface },
                        h("div", { id: viewId + "-" + view + "-panel", className: "dsh-tab-panel", role: "tabpanel", "aria-labelledby": viewId + "-" + view }, renderCalendar())
                    ),
                    h("footer", { className: styles["dshc-footer"] },
                        h("span", null, t("count.events", { n: visibleEvents.length }) +
                            (visibleEvents.some(event => event.isOccurrence) ? " · " + t("count.occurrences", { n: visibleEvents.filter(event => event.isOccurrence).length }) : "")),
                        workbench ? h(CalendarShortcutHints, { quickKey, canCreate: !readOnly }) : null,
                        compact && source ? h("span", null, t("conn.current", { summary: source })) : null
                    )
                )
            ) : null;
            const workspacePage = importOpen
                ? h(IcsImportPanel, { onBusy: setImportBusy, onClose: backToSchedule, onConnection: () => setConnOpen(true), onImported: reload })
                : availabilityOpen ? h(AvailabilityPanel, {
                    anchor, onBusy: setAvailabilityBusy, onClose: backToSchedule,
                    onChoose: slot => {
                        backToSchedule();
                        setAnchor(new Date(slot.start));
                        setConfirmDelete(false);
                        setFormError(null);
                        setDraft(draftOfEvent({ start: slot.start, end: slot.end, allDay: false }));
                    }
                }) : connectionOpen ? h(ConnectionForm, {
                    inline: true, connection: conn, onClose: backToSchedule, onSaved: finishConnection, onBusy: setConnectionBusy
                }) : schedule;
            const original = draft?.uid && !draft.isSeries ? data.events.find(event => event.uid === draft.uid) : undefined;
            const page = h("section", {
                ref: rootRef, className: clsx(styles["dshc-root"], workbench && LAYOUT_CLASSES[layout]),
                "data-main": workbench, "data-compact": compact, "data-calendar-layout": workbench ? (layout === "cards" ? "bento" : layout) : undefined, "data-dsh-style": dshStyle, "data-dsh-font": dshFont, style: appearance,
                onPointerMove: workbench ? moveCalendarSpotlight : undefined,
                tabIndex: workbench ? 0 : undefined, onKeyDown: workbench ? onWorkbenchKeyDown : undefined
            },
                h("div", { className: styles["dshc-shell"] },
                    topbar, compactToolbar,
                    banner ? h("div", { className: styles["dshc-alert"], role: "status" }, banner) : null,
                    undo ? h("div", { className: styles["dshc-undo"], role: "status", "data-window-drag-exclude": "" },
                        h("span", null, t("move.saved") + " · " + (undo.summary || "")),
                        h(Btn, { onClick: undoMove }, t("move.undo"))
                    ) : null,
                    demo ? h("div", { className: clsx(styles["dshc-alert"], styles.demo) }, t("demo.banner")) : null,
                    compact ? workspacePage : h("div", { className: styles.workspacePanel,
                        id: workspaceId + "-" + tool + "-panel", role: "tabpanel", "aria-labelledby": workspaceId + "-" + tool
                    }, workspacePage)
                ),
                !compact && !layerOpen && tour.open ? h(CoachmarkTour, {
                    rootRef,
                    steps: tourSteps,
                    step: tour.step,
                    manual: tour.manual,
                    style: dshStyle,
                    font: dshFont,
                    appearance,
                    lang: UI_LANG,
                    activeKey: tool + ":" + view,
                    layout: tourLayout,
                    setLayout: setTourLayout,
                    onStep: (nextStep, isManual) => setTour({ open: true, step: nextStep, manual: Boolean(isManual) }),
                    onClose: closeTour,
                    onCopyPrompt: async promptText => {
                        const ok = await copyText(promptText);
                        if (ok) notify(calendarText("已复制对话指令，可直接粘贴到聊天框", "Copied prompt — paste it into chat"));
                        return ok;
                    }
                }) : null,
                selected ? h(EventReview, {
                    event: selected, readOnly: demo || readOnly || selected?.readOnly === true, events: data.events, busy, confirmDelete, setConfirmDelete,
                    onClose: closeReview, onEdit: editEvent, onDelete: remove
                }) : null,
                draft ? h(EventForm, {
                    draft, events: eventsWithMoves, busy, error: formError, source, original,
                    onCancel: closeDraft, onSubmit: submit, onDelete: remove, confirmDelete, setConfirmDelete
                }) : null,
                utility === "commands" ? h(CalendarCommands, { actions: commandActions, onClose: () => setUtility(null) }) : null,
                utility === "conflicts" ? h(CalendarConflicts, {
                    events: conflicted, onPick: openEvent, onClose: () => setUtility(null)
                }) : null,
                connOpen ? h(ConnectionForm, { connection: conn, onClose: () => setConnOpen(false), onSaved: finishConnection }) : null
            );
            return workbench ? h(getCalendarAppearanceContext().Provider, { value: appearance }, page) : page;
        }
        /** 月份平移：先跳到本月 1 号再加月，避免 1 月 31 日 +1 个月变成 3 月 3 日。 */
        function addMonthShift(date, delta) {
            const first = new Date(date.getFullYear(), date.getMonth(), 1);
            const shifted = new Date(first.getFullYear(), first.getMonth() + delta, 1);
            const lastDay = new Date(shifted.getFullYear(), shifted.getMonth() + 1, 0).getDate();
            return new Date(shifted.getFullYear(), shifted.getMonth(), Math.min(date.getDate(), lastDay));
        }
        /** 设置页里的那一节。 */
        function CalendarSection({ workbench = false } = {}) {
            useUILanguage();
            return h("div", null, workbench ? null : h(FloatingButtonSetting, {}), h(CalendarPanel, { workbench }));
        }
        /** Whether the floating button shows: each person's own setting, kept on the server and read live by the Launcher. */
        const FAB_EVENT = "dsh-calendar:preferences";
        function useFloatingButton() {
            const [state, setState] = useState({ show: true, editable: false });
            useEffect(() => {
                let alive = true;
                const read = () => api("connection", {}).then((value) => {
                    if (alive) setState({ show: value?.floatingButton !== false, editable: value?.floatingButtonEditable === true });
                }).catch(() => { });
                read();
                window.addEventListener(FAB_EVENT, read);
                return () => { alive = false; window.removeEventListener(FAB_EVENT, read); };
            }, []);
            return state;
        }
        function FloatingButtonSetting() {
            const { show, editable } = useFloatingButton();
            const [busy, setBusy] = useState(false);
            if (!editable) return null;
            const change = (checked) => {
                setBusy(true);
                api("setPreferences", { floatingButton: checked })
                    .then(() => window.dispatchEvent(new Event(FAB_EVENT)))
                    .catch(() => { })
                    .finally(() => setBusy(false));
            };
            return h("label", { style: { display: "flex", gap: 8, alignItems: "center", padding: "8px 12px", fontSize: 13 } },
                h("input", { type: "checkbox", checked: show, disabled: busy, onChange: (event) => change(event.target.checked) }),
                h("span", null, t("fab.label")),
                h("span", { style: { opacity: 0.65 } }, t("fab.hint")));
        }
        /** 对话页右下角的小按钮 + 悬浮面板（自己挂 root，不占用宿主槽位）。 */
        function Launcher() {
            const [activePanel, setActivePanel] = useState(null);
            useEffect(() => {
                let layout;
                try { layout = calendarHostContext?.get?.("layout") || calendarHostContext?.layout; } catch {}
                const panelInfo = layout?.panelInfo;
                if (!panelInfo) return;
                const update = () => setActivePanel(panelInfo.getSnapshot().activePanelId);
                update();
                return panelInfo.subscribe(update);
            }, []);
            useUILanguage();
            const { show } = useFloatingButton();
            const [dshStyle] = useDshStyle(React);
            const [dshFont] = useDshFont(React);
            const [open, setOpen] = useState(false);
            const [layerOpen, setLayerOpen] = useState(false);
            useEffect(() => {
                if (open !== true)
                    return () => { };
                const onKey = (event) => {
                    if (event.key !== "Escape" || event.isComposing === true || event.defaultPrevented)
                        return;
                    // 浮层交给 CalendarPanel 的层栈；宿主 Portal 的 Esc 交给宿主组件。
                    if (layerOpen === true)
                        return;
                    setOpen(false);
                };
                document.addEventListener("keydown", onKey);
                return () => document.removeEventListener("keydown", onKey);
            }, [open, layerOpen]);
            if (activePanel || !show) return null;
            return h("div", null,
                h("button", {
                    type: "button",
                    className: styles["dshc-fab"],
                    "data-dsh-style": dshStyle,
                    "data-dsh-font": dshFont,
                    "data-window-drag-exclude": "",
                    "aria-expanded": open,
                    title: t("nav.title"),
                    "aria-label": t("nav.title"),
                    onClick: () => setOpen((value) => !value)
                }, h(CalendarIcon, { size: 18 })),
                open === true ? h("div", { className: styles["dshc-float"], "data-dsh-style": dshStyle, "data-dsh-font": dshFont, "data-window-drag-exclude": "" }, h(CalendarPanel, { compact: true, onLayerChange: setLayerOpen })) : null
            );
        }
        // ───────────────────────────── 挂载 ─────────────────────────────
        const inject = ["slots", "locale"];
        function apply(ctx) {
            calendarHostContext = ctx;
            const id = "dsh-calendar.workbench";
            ctx.slots.inject("main", () => ctx.slots.register({
                name: "main", key: id, inject: () => ({ workbench: true })
            }, CalendarSection));
            ctx.slots.inject("sidebar.panellist", () => ctx.slots.register({
                name: "sidebar.panellist", id, order: 58, label: () => t("nav.title")
            }, CalendarIcon));

            // 语言要在任何 t() 之前定下来（与 dsh-email 同款契约）。
            try {
                ctx.effect(() => subscribeLocale(ctx), "dsh-calendar: locale");
            }
            catch (e) { /* 没有 effect 的宿主不该拖垮面板 */ }
            try {
                ctx.effect(() => {
                    const id = "dsh-calendar/client";
                    if (document.querySelector('style[data-plugin-css="' + id + '"]'))
                        return () => { };
                    const style = document.createElement("style");
                    style.dataset.plugin = "dsh-calendar";
                    style.dataset.pluginCss = id;
                    style.textContent = CSS;
                    document.head.appendChild(style);
                    return () => { style.remove(); };
                }, "dsh-calendar: styles");
            }
            catch (e) { /* 无 DOM 环境（纯 node 侧冒烟）时跳过 */ }
            try {
                ctx.slots.inject("settings.section", () => ctx.slots.register({
                    name: "settings.section",
                    id: "dsh-calendar",
                    order: 50,
                    label: () => {
                        let lang = UI_LANG;
                        try {
                            if (activeLocaleService?.getSnapshot)
                                lang = localeToLang(activeLocaleService.getSnapshot().active);
                        }
                        catch { }
                        return UI[lang]["nav.title"];
                    },
                    inject: () => ({})
                }, CalendarSection));
            }
            catch (e) { /* 没有 slots 服务：仍是合法的插件，只是没有设置页 */ }
            try {
                ctx.effect(() => mountLauncher(), "dsh-calendar: floating panel");
            }
            catch (e) { /* 同上 */ }
        }
        /** 把悬浮面板挂到页面上；已经挂过（HMR / 重复 apply）就复用。 */
        function mountLauncher() {
            if (typeof document === "undefined" || document.body === null)
                return () => { };
            if (document.getElementById("dsh-calendar-root") !== null)
                return () => { };
            const host = document.createElement("div");
            host.id = "dsh-calendar-root";
            document.body.appendChild(host);
            let root = null;
            try {
                const ReactDomClient = require("react-dom/client");
                root = ReactDomClient.createRoot(host);
                root.render(h(Launcher, {}));
            }
            catch (e) {
                // 老宿主没有 react-dom/client 时不要静默留下一个空气泡：整个按钮一起撤掉。
                host.remove();
                return () => { };
            }
            return () => {
                try {
                    if (root !== null)
                        root.unmount();
                }
                catch (e) { /* 卸载失败也要把节点摘掉 */ }
                host.remove();
            };
        }
        relocalize = () => { for (const update of languageListeners)
            update(); };
        exports.apply = apply;
        exports.inject = inject;
        return module.exports;
    } });

})();
