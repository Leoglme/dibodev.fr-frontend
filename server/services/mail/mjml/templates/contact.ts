export default `
<mj-section>
  <mj-column>
    <mj-text padding="0 0 20px">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="padding:7px 12px;background-color:#f5f3ff;border-radius:8px;font-size:13px;line-height:18px;color:#141414;">
            À répondre au plus tard <strong style="font-weight:600;">{{replyDeadline}}</strong>
          </td>
        </tr>
      </table>
    </mj-text>
    <mj-text padding="0 0 6px" css-class="title" font-size="26px" line-height="32px" font-weight="600" color="#141414">
      {{fullName}}
    </mj-text>
    {{#if qualification}}
    <mj-text padding="0 0 24px" font-size="15px" line-height="22px">
      {{qualification}}
    </mj-text>
    {{/if}}
    <mj-text padding="0 0 20px">
      {{#each actions}}<a href="{{href}}" style="display:inline-block;margin:0 8px 8px 0;padding:11px 20px;{{#if isPrimary}}background-color:#6f5fe0;border:1px solid #6f5fe0;color:#ffffff;{{else}}background-color:#ffffff;border:1px solid #d3d3cf;color:#141414;{{/if}}border-radius:8px;font-size:15px;line-height:22px;font-weight:500;text-decoration:none;">{{label}}</a>{{/each}}
    </mj-text>
  </mj-column>
</mj-section>

<mj-section>
  <mj-column>
    {{#if message}}
    <mj-text padding="0 0 10px" font-size="13px" line-height="18px" font-weight="600" color="#66665f">
      Message
    </mj-text>
    <mj-text padding="0 0 28px">
      <div style="padding:18px 20px;background-color:#f6f6f3;border-radius:12px;font-size:15px;line-height:24px;color:#141414;white-space:pre-line;word-break:break-word;">{{message}}</div>
    </mj-text>
    {{/if}}
    <mj-text>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        {{#each detailRows}}
        <tr>
          <td class="detail-label" width="120" valign="top" style="width:120px;padding:10px 12px 10px 0;border-top:1px solid #ebebe7;font-size:14px;line-height:20px;color:#66665f;">{{label}}</td>
          <td valign="top" style="padding:10px 0;border-top:1px solid #ebebe7;font-size:14px;line-height:20px;font-weight:500;color:#141414;word-break:break-word;">{{#if href}}<a href="{{href}}" style="color:#6f5fe0;font-weight:500;text-decoration:none;">{{value}}</a>{{else}}{{value}}{{/if}}</td>
        </tr>
        {{/each}}
      </table>
    </mj-text>
  </mj-column>
</mj-section>
`
