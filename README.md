# AJAX wrapper
Simple wrapper over `XMLHttpRequest` to make AJAX calls easier to make.

- - - 
## Using the wrapper.
The wrapper exposes a single variable names `ajax`. '`ajax`' has two methods `ajax.post(options)` for `POST` requests and `ajax.get(options)` for `GET` requests.

Both take in a variable 'options' which is an object with callbacks to handle the responses. Some options are included in both while some are exclusive to just one.

1. Options for both `ajax.get` and `ajax.post`.  
   1. __url__ : The urls to send the request. It's either a string or a URL object.
   2. __responseType__ : The format of the response. Choices are __'text', 'blob', 'arraybuffer', 'document', 'json'__. Accepts strings.
   3. __error__ : Callback to handle and error whether HTTP or if the server response is not between 200 and 299. Receives an error object as argument. `error(errorObject)`.
   4. __success__ : Callback to handle response with 2** response. `success(succesfulResponse)` -> `successfulResponse = {status: 'number', statusText: 'string', response: 'responseType'}`.
   5. __crosssite__ _(optional)_: `true` if the request is to another domain and `false` if it's to the same domain.
   6. __sendCookies__ _(optional)_: `Boolean` to determine if the request shall include cookies and credentials or not.
   7. __headers__ _(optional)_: An array of header objects to be added to the request. A header object in the format `{name: 'string', value: 'string'}`.

2. Options for exclusively `ajax.post`.  
   1. __data__ _(optional)_: In JSON format or as a string to send.
   2. __form__ _(optional)_: A HTMLformElement (selected from `document.forms[*]`) to send. The wrapper converts its into a `FormData` object. The wrapper cannot send both __data__ and __form__, only one. It throws an error if you attempt to.
   3. __uploaderror__ _(optional)_: Callback to handle error during upload of a data. `uploaderror(event)`
   4. __uploadstart__ _(optional)_: Callback to handle the start of the upload process. `uploadstart(event)`
   5. __uploadprogress__ _(optional)_: Callback to handle the progress of the upload. `uploadprogress(totalUploaded: number, totalToUpload: number)`. Takes two arguments; `totalUploaded` - total sent and `totalToUpload` - the total to upload.
   6. __uploadend__ _(optional)_: Callback to handle the end of the upload process. `uploadend(event)`
   
3. Options exclusively for `ajax.get`.
   1. __downloadprogress__ _(optional)_: Callback to handle the progress of a download. `downloadprogress(contentLengthAvailable, downloaded, total?)`. Takes in 3 arguments; `contentLengthAvailable` - boolean on if the value of content to download is available, `downloaded` - total length downloaded and `total` - the total length to download (this is only available if `contentLengthAvailable` is `true` otherwise it's `undefined`).
   2. __params__ _(optional)_: An array of objects -> `{name: string, value: string}` that are added to the URL as query parameters.


## Example use
1. `GET` request.
   ```javascript
      const options = {
         url: 'https://example.com',
         params: {
            name: 'search',
            value: 'query'
         },
         responseType: 'json',
         success: (response) => {
            console.log(response.response);
         },
         error: (error) => {
            console.log('an error occured', error)
         }
      };

      ajax.get(options);
   ```

2. `POST` request.
   ```javascript
      // retrieve form
      const loginForm = document.forms['login-form'];

      const options = {
         url: 'https://example.com',
         responseType: 'json',
         success: (response) => {
            console.log(response.response);
         },
         error: (error) => {
            console.log('an error occured', error)
         },
         form: loginForm
      };

      ajax.post(options);
   ```

> Ensure the ajaxWrapper.js is available. Download from [here](https://github.com/muremwa/ajax-wrapper/releases/download/1.0/ajaxWrapper.js).