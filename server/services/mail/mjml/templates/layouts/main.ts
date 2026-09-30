export default `
<mjml>
  <mj-head>
    {{head}}
    <mj-attributes>
      <mj-all font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" />
      <mj-section padding="0" />
      <mj-column padding="0" />
      <mj-text padding="0" color="#4b4b47" font-size="15px" line-height="24px" />
    </mj-attributes>
    <mj-style>
      a { color: #6f5fe0; }
      @media only screen and (max-width: 480px) {
        .card > table > tbody > tr > td { padding: 28px 20px !important; }
        .card, .card > table { border-radius: 0 !important; }
        .edge > table > tbody > tr > td { padding-left: 20px !important; padding-right: 20px !important; }
        .soft > table > tbody > tr > td { padding: 20px !important; }
        .title div { font-size: 24px !important; line-height: 30px !important; }
        .detail-label { width: 96px !important; }
      }
    </mj-style>
  </mj-head>
  <mj-body background-color="#f6f6f3" width="600px">
    <mj-section css-class="edge" padding="32px 0 20px">
      <mj-column>
        <mj-text>{{header}}</mj-text>
      </mj-column>
    </mj-section>

    <mj-wrapper css-class="card" background-color="#ffffff" border-radius="16px" padding="40px">
      {{body}}
    </mj-wrapper>

    <mj-section css-class="edge" padding="24px 0 40px">
      <mj-column>
        <mj-text font-size="12px" line-height="18px" color="#66665f">{{footer}}</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`
