export default `
<mj-section>
  <mj-column>
    <mj-text padding="0 0 12px" css-class="title" font-size="26px" line-height="32px" font-weight="600" color="#141414">
      {{title}}
    </mj-text>
    <mj-text padding="0 0 24px">
      {{intro}}
    </mj-text>
    <mj-button href="{{buttonUrl}}" background-color="#6f5fe0" color="#ffffff" font-size="15px" font-weight="600" border-radius="10px" padding="0 0 20px" inner-padding="14px 28px" align="left">
      {{buttonLabel}}
    </mj-button>
    <mj-text padding="0 0 8px" font-size="14px" line-height="22px" color="#66665f">
      {{expiryNote}}
    </mj-text>
    <mj-text padding="0 0 28px" font-size="14px" line-height="22px" color="#66665f">
      {{ignoreNote}}
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
