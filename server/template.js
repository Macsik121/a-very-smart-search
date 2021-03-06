export default function template(body) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Очень умный поиск</title>
                <link rel="stylesheet" href="/app.styles.css">
            </head>
            <body>
                <div id="content">${body}</div>
                <script src="/vendor.bundle.js"></script>
                <script src="/app.bundle.js"></script>
            </body>
        </html>
    `
}
