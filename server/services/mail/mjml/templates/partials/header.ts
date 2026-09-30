export default `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
  <tr>
    <td style="font-size:0;line-height:0;">
      <img src="https://dibodev.fr/email/logo-240.png" width="28" height="28" alt="" style="display:inline-block;vertical-align:middle;width:28px;height:28px;border:0;"><span style="display:inline-block;vertical-align:middle;margin-left:8px;font-size:18px;line-height:28px;font-weight:600;color:#141414;letter-spacing:-0.2px;">{{headerTitle}}</span>
    </td>
    {{#if headerMeta}}
    <td align="right" style="font-size:13px;line-height:28px;color:#66665f;white-space:nowrap;">{{headerMeta}}</td>
    {{/if}}
  </tr>
</table>
`
