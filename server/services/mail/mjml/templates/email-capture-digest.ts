export default `
<mj-section>
  <mj-column>
    <mj-text padding="0 0 6px" css-class="title" font-size="26px" line-height="32px" font-weight="600" color="#141414">
      {{title}}
    </mj-text>
    <mj-text padding="0 0 24px" font-size="15px" line-height="22px">
      {{intro}}
    </mj-text>
    {{#each entries}}
    <mj-text padding="0 0 4px" font-size="16px" line-height="22px" font-weight="600" color="#141414">
      {{heading}}
    </mj-text>
    <mj-text padding="0 0 24px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        {{#each rows}}
        <tr>
          <td class="detail-label" width="120" valign="top" style="width:120px;padding:8px 12px 8px 0;border-top:1px solid #ebebe7;font-size:14px;line-height:20px;color:#66665f;">{{label}}</td>
          <td valign="top" style="padding:8px 0;border-top:1px solid #ebebe7;font-size:14px;line-height:20px;font-weight:500;color:#141414;word-break:break-word;">{{#if href}}<a href="{{href}}" style="color:#6f5fe0;font-weight:500;text-decoration:none;">{{value}}</a>{{else}}{{value}}{{/if}}</td>
        </tr>
        {{/each}}
      </table>
    </mj-text>
    {{/each}}
    {{#if hiddenText}}
    <mj-text padding="0 0 16px" font-size="14px" line-height="20px" color="#66665f">
      {{hiddenText}}
    </mj-text>
    {{/if}}
    <mj-divider border-width="1px" border-color="#ebebe7" padding="0 0 12px" />
    <mj-text padding="0" font-size="14px" line-height="20px" color="#66665f">
      {{alertTotalsText}}
    </mj-text>
  </mj-column>
</mj-section>
`
