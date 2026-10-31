export default `
<mj-section>
  <mj-column>
    <mj-text padding="0 0 12px" css-class="title" font-size="26px" line-height="32px" font-weight="600" color="#141414">
      {{title}}
    </mj-text>
    <mj-text padding="0 0 24px">
      {{intro}}
    </mj-text>
  </mj-column>
</mj-section>

{{#if detailRows}}
<mj-section css-class="soft" background-color="#f5f3ff" border-radius="12px" padding="20px 24px">
  <mj-column>
    <mj-text>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        {{#each detailRows}}
        <tr>
          <td class="detail-label" width="120" valign="top" style="width:120px;padding:6px 12px 6px 0;font-size:14px;line-height:22px;color:#66665f;">{{label}}</td>
          <td valign="top" style="padding:6px 0;font-size:15px;line-height:22px;font-weight:500;color:#141414;word-break:break-word;">{{value}}</td>
        </tr>
        {{/each}}
      </table>
    </mj-text>
  </mj-column>
</mj-section>
{{/if}}

<mj-section padding="24px 0 0">
  <mj-column>
    <mj-button href="{{buttonUrl}}" background-color="#6f5fe0" color="#ffffff" font-size="15px" font-weight="600" border-radius="10px" padding="0 0 16px" inner-padding="14px 28px" align="left">
      {{buttonLabel}}
    </mj-button>
    {{#if secondaryUrl}}
    <mj-text padding="0 0 24px" font-size="14px" line-height="22px" color="#66665f">
      <a href="{{secondaryUrl}}" style="color:#6f5fe0;font-weight:500;">{{secondaryLabel}}</a>
    </mj-text>
    {{/if}}
    {{#if contactIntro}}
    <mj-text padding="0 0 24px">
      {{contactIntro}} <a href="{{contactUrl}}" style="color:#6f5fe0;font-weight:500;">{{contactLabel}}</a>
    </mj-text>
    {{/if}}
    <mj-text padding="0 0 12px">
      {{signOff}}
    </mj-text>
    <mj-text padding="0">
      {{{signature}}}
    </mj-text>
  </mj-column>
</mj-section>
`
