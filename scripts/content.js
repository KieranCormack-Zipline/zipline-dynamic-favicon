if (document.location.host.includes('retailzipline.xyz')) {
  document.querySelector("link[rel='shortcut icon']").href = "https://zipline-logo.s3.amazonaws.com/yellow.ico"
} else if (document.location.host.includes('getzipline.co')){
  document.querySelector("link[rel='shortcut icon']").href = "https://zipline-logo.s3.amazonaws.com/blue.ico"
} 