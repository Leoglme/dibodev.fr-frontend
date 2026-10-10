export default `
<mj-section>
  <mj-column>
    <mj-text padding="0 0 12px" css-class="title" font-size="26px" line-height="32px" font-weight="600" color="#141414">
      {{title}}
    </mj-text>
    <mj-text padding="0 0 28px">
      {{introStart}} <strong style="font-weight:600;color:#141414;">{{replyDeadline}}</strong>{{introEnd}}
    </mj-text>
  </mj-column>
</mj-section>

<mj-section css-class="soft" background-color="#f5f3ff" border-radius="12px" padding="24px">
  <mj-column>
    <mj-text padding="0 0 20px" font-size="18px" line-height="24px" font-weight="600" color="#141414">
      {{nextStepsTitle}}
    </mj-text>
    <mj-text>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        {{#each nextSteps}}
        <tr>
          <td width="32" valign="top" style="width:32px;padding:0 16px {{#if @last}}0{{else}}16px{{/if}} 0;">
            <div style="width:32px;height:32px;border-radius:16px;background-color:#6f5fe0;color:#ffffff;font-size:14px;line-height:32px;font-weight:600;text-align:center;">{{number}}</div>
          </td>
          <td valign="top" style="padding:5px 0 {{#if @last}}0{{else}}16px{{/if}};">
            <p style="margin:0;font-size:15px;line-height:22px;font-weight:600;color:#141414;">{{title}}</p>
            <p style="margin:2px 0 0;font-size:14px;line-height:22px;color:#4b4b47;">{{description}}</p>
          </td>
        </tr>
        {{/each}}
      </table>
    </mj-text>
  </mj-column>
</mj-section>

<mj-section padding="32px 0 0">
  <mj-column>
    <mj-text padding="0 0 12px" font-size="15px" line-height="22px" font-weight="600" color="#141414">
      {{requestTitle}}
    </mj-text>
    <mj-text>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        {{#each requestRows}}
        <tr>
          <td class="detail-label" width="120" valign="top" style="width:120px;padding:10px 12px 10px 0;border-top:1px solid #ebebe7;font-size:14px;line-height:20px;color:#66665f;">{{label}}</td>
          <td valign="top" style="padding:10px 0;border-top:1px solid #ebebe7;font-size:14px;line-height:20px;font-weight:500;color:#141414;word-break:break-word;">{{value}}</td>
        </tr>
        {{/each}}
      </table>
      {{#if message}}
      <div style="margin:4px 0 0;padding:16px 18px;background-color:#f6f6f3;border-radius:12px;font-size:14px;line-height:22px;color:#141414;white-space:pre-line;word-break:break-word;">{{message}}</div>
      {{/if}}
    </mj-text>
  </mj-column>
</mj-section>

<mj-section padding="28px 0 0">
  <mj-column>
    <mj-text padding="0 0 12px">
      {{replyStart}} <a href="{{ownerPhoneHref}}" style="color:#6f5fe0;font-weight:500;text-decoration:none;white-space:nowrap;">{{ownerPhoneDisplay}}</a>{{replyEnd}}
    </mj-text>
    <mj-text padding="0 0 24px">
      {{portfolioStart}} <a href="{{portfolioUrl}}" style="color:#6f5fe0;font-weight:500;text-decoration:none;">{{portfolioLabel}}</a>{{portfolioEnd}}
    </mj-text>
    <mj-text padding="0 0 16px">
      {{signOff}}
    </mj-text>
    <mj-text>
      {{{signature}}}
    </mj-text>
  </mj-column>
</mj-section>
`
