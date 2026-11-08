export default `
<mj-section>
  <mj-column>
    <mj-text padding="0 0 10px" font-size="13px" line-height="18px" font-weight="600" color="#6f5fe0">
      {{eyebrow}}
    </mj-text>
    <mj-text padding="0 0 12px" css-class="title" font-size="26px" line-height="32px" font-weight="600" color="#141414">
      {{title}}
    </mj-text>
    <mj-text padding="0">
      {{summary}}
    </mj-text>
  </mj-column>
</mj-section>

{{#each sections}}
<mj-section padding="28px 0 0">
  <mj-column>
    <mj-text padding="0 0 12px" font-size="13px" line-height="18px" font-weight="600" color="#66665f">
      {{title}}
    </mj-text>
    <mj-text padding="0">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        {{#each points}}
        <tr>
          <td style="padding:0 0 {{#if @last}}0{{else}}12px{{/if}};">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:2px 0 2px 14px;border-left:3px solid {{accentColor}};">
                  {{#if label}}<p style="margin:0;font-size:15px;line-height:22px;font-weight:600;color:#141414;">{{label}}{{#if statusLabel}}&nbsp; <span style="display:inline-block;padding:1px 8px;border-radius:10px;background-color:{{badgeBackground}};color:{{badgeColor}};font-size:12px;line-height:18px;font-weight:500;white-space:nowrap;">{{statusLabel}}</span>{{/if}}</p>{{else}}{{#if statusLabel}}<p style="margin:0 0 2px;"><span style="display:inline-block;padding:1px 8px;border-radius:10px;background-color:{{badgeBackground}};color:{{badgeColor}};font-size:12px;line-height:18px;font-weight:500;white-space:nowrap;">{{statusLabel}}</span></p>{{/if}}{{/if}}
                  {{#if text}}<p style="margin:{{#if label}}2px{{else}}0{{/if}} 0 0;font-size:14px;line-height:22px;color:#4b4b47;word-break:break-word;">{{text}}</p>{{/if}}
                  {{#if advice}}<p style="margin:6px 0 0;font-size:14px;line-height:22px;color:#141414;"><strong style="font-weight:600;">{{@root.adviceLabel}}</strong> {{advice}}</p>{{/if}}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        {{/each}}
      </table>
    </mj-text>
  </mj-column>
</mj-section>
{{/each}}

{{#if hasSteps}}
<mj-section padding="0">
  <mj-column>
    <mj-spacer height="28px" />
  </mj-column>
</mj-section>
<mj-section css-class="soft" background-color="#f5f3ff" border-radius="12px" padding="24px">
  <mj-column>
    <mj-text padding="0 0 14px" font-size="18px" line-height="24px" font-weight="600" color="#141414">
      {{stepsTitle}}
    </mj-text>
    <mj-text padding="0">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        {{#each steps}}
        <tr>
          <td width="28" valign="top" style="width:28px;padding:0 8px {{#if @last}}0{{else}}12px{{/if}} 0;font-size:14px;line-height:22px;font-weight:600;color:#6f5fe0;">{{number}}.</td>
          <td valign="top" style="padding:0 0 {{#if @last}}0{{else}}12px{{/if}};font-size:14px;line-height:22px;color:#141414;word-break:break-word;">{{text}}</td>
        </tr>
        {{/each}}
      </table>
    </mj-text>
  </mj-column>
</mj-section>
{{/if}}

{{#if hasGuides}}
<mj-section padding="28px 0 0">
  <mj-column>
    <mj-text padding="0 0 12px" font-size="13px" line-height="18px" font-weight="600" color="#66665f">
      {{guidesTitle}}
    </mj-text>
    <mj-text padding="0">
      {{#each guides}}<p style="margin:0 0 {{#if @last}}0{{else}}10px{{/if}};font-size:15px;line-height:22px;"><a href="{{url}}" style="color:#6f5fe0;font-weight:500;text-decoration:none;">{{label}}&nbsp;→</a></p>{{/each}}
    </mj-text>
  </mj-column>
</mj-section>
{{/if}}

<mj-section padding="32px 0 0">
  <mj-column>
    <mj-text padding="0 0 14px">
      {{testAgainIntro}}
    </mj-text>
    <mj-button href="{{testAgainUrl}}" background-color="#6f5fe0" color="#ffffff" font-size="15px" font-weight="600" border-radius="10px" padding="0 0 28px" inner-padding="14px 28px" align="left">
      {{testAgainLabel}}
    </mj-button>
    <mj-text padding="0 0 16px">
      {{helpIntro}}
    </mj-text>
    <mj-text padding="0 0 12px">
      {{signOff}}
    </mj-text>
    <mj-text padding="0">
      {{{signature}}}
    </mj-text>
  </mj-column>
</mj-section>
`
