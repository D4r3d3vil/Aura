<script>
    export let data;
</script>
  <object data={data.pdfUrl} type="application/pdf" width="100%" height="100%">
    <p>Your browser does not support PDFs. <a href={data.pdfUrl}>Download the PDF</a>.</p>
  </object>
