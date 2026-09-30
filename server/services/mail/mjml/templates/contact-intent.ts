export default `
<mj-section>
  <mj-column>
    <mj-text padding="0 0 6px" css-class="title" font-size="26px" line-height="32px" font-weight="600" color="#141414">
      {{contactTitle}}
    </mj-text>
    <mj-text padding="0 0 24px" font-size="15px" line-height="22px">
      A commencé à remplir le formulaire de contact, sans l’envoyer pour l’instant.
    </mj-text>
    <mj-text padding="0 0 20px">
      {{#each actions}}<a href="{{href}}" style="display:inline-block;margin:0 8px 8px 0;padding:11px 20px;{{#if isPrimary}}background-color:#6f5fe0;border:1px solid #6f5fe0;color:#ffffff;{{else}}background-color:#ffffff;border:1px solid #d3d3cf;color:#141414;{{/if}}border-radius:8px;font-size:15px;line-height:22px;font-weight:500;text-decoration:none;">{{label}}</a>{{/each}}
    </mj-text>
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
