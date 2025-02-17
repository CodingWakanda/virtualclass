// This file is part of Vidyamantra - http:www.vidyamantra.com/
/** @Copyright 2014  Vidya Mantra EduSystems Pvt. Ltd.
 * @author  Suman Bogati <http://www.vidyamantra.com>
 * This file looks for the environmment support for the virtual claas and its apis
 */
(function (window) {
  let system = {
    /*
     * Initializing webRtc and browser
     * @return system object
     */
    init() {
      this.wbRtc = {};
      this.wbRtc.className = 'webrtcCont';
      this.mybrowser = {};
    },
    // TODO function need to be revised
    isCanvasSupport(navigator, browserName, version) {
      if (browserName === 'MSIE') return version === 9;
      return !(!window.CanvasRenderingContext2D);
    },

    /*
     * To check whether  webSocket is supported  or not
     *
     */
    isWebSocketSupport() {
      return (window.WebSocket && (typeof window.WebSocket === 'function'
      || typeof window.WebSocket === 'object') && Object.prototype.hasOwnProperty.call(window.WebSocket, 'OPEN'));
    },
    /*
     * To check whether local storage is supported or not
     *
     */
    isLocalStorageSupport() {
      return (Storage !== void (0));
    },

    /*
     * to test for getUSerMedia support
     */
    isGetUserMediaSupport() {
      navigator.getUserMedia = (navigator.getUserMedia
      || navigator.webkitGetUserMedia
      || navigator.mozGetUserMedia
      || navigator.msGetUserMedia);

      return !!(navigator.getUserMedia);
    },
    /*
     * Test for showned db support
     *
     */
    isIndexedDbSupport() {
      return !!((window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB));
    },
    /*
     * function to test  whether worker is supported or not
     *
     */
    isWorkerSupport() {
      return !!window.Worker;
    },
    /*
     * to test wheter audio api is supported
     */
    isAudioApiSupport() {
      return !!((window.AudioContext || window.webkitAudioContext));
    },
    /*
     * to check for typed aray support
     */
    isTypedArraySupport() {
      return !!('ArrayBuffer' in window);
    },

    // Inspired from https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    isMobile() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    },
    /*
     *
     * @param bname browser name
     * @param bversion browser version
     */
    isScreenShareSupport(bname, bversion) {
      if (bname === 'Firefox') {
        return (bversion >= 34);
      } if (bname === 'Chrome') {
        return (bversion >= 39);
      }
      return false;
    },
    /*
     *
     * @param key: property of the object
     * @param value: value of the property
     */
    setValue(key, value) {
      this[key] = value;
    },
    /*
     * Setting the api properties to true or false based on whether they are supported
     * or not by the environment
     * @param bname browser name
     * @param bversion browser version
     */
    checkBrowserFunctions(bname, bversion) {
      this.setValue('canvas', this.isCanvasSupport());
      this.setValue('webSocket', this.isWebSocketSupport());
      this.setValue('getusermedia', this.isGetUserMediaSupport());
      this.setValue('indexeddb', this.isIndexedDbSupport());
      this.setValue('webworker', this.isWorkerSupport());
      this.setValue('webaudio', this.isAudioApiSupport());
      this.setValue('typedarray', this.isTypedArraySupport());
      this.setValue('screenshare', this.isScreenShareSupport(bname, bversion));
      this.setValue('localstorage', this.isLocalStorageSupport());
    },
    /*
     * Measuring the resolution of virtual class container
     * @param resolution : an object containing inner width and inner height of window
     */
    measureResoultion(resolution) {
      if (!Object.prototype.hasOwnProperty.call(virtualclass.gObj, 'measureDimension')) {
        const element = document.getElementById('virtualclassCont');
        const offset = virtualclass.vutil.getElementOffset(element);
        const offsetLeft = offset.x;
        let width;
        if (resolution.width < 1024) {
          width = 1024 - (offsetLeft + 10);
        } else {
          width = resolution.width - (offsetLeft + 350);
        }
        const height = resolution.height - (offset.y);
        virtualclass.gObj.measureDimension = { width, height };
      }
      return virtualclass.gObj.measureDimension;
    },

    setDocCanvasDimension(width, height, id) {
      const elem = document.querySelector(`#canvas${id}`);
      if (elem != null) {
        elem.width = width;
        elem.height = height;
      }
    },

    /*
     *Getting application support for the user and if there  are errors they will be pushed in an array error
     *@param user user role
     */
    reportBrowser(user) {
      const errors = this.getErrors(user);
      if (errors.length > 1) {
        virtualclass.error.push(`${errors.join(',')} are disabled in your browser.`);
      } else if (errors.length === 1) {
        virtualclass.error.push(`${errors} is disabled in your browser.`);
      }
    },

    /*
     * Test for the apis availability and if test fails corresponding api error will be pushed into an array called errors
     * @param user user role
     * @return errors : An array of generated errors if apis are not available
     */
    getErrors(user) {
      const errors = [];
      // webSocket to websocket
      const apis = ['canvas', 'webSocket', 'getusermedia', 'webaudio', 'indexeddb', 'localstorage', 'typedarray'];
      if (user === 't' || user === 'e') apis.push('webworker', 'screenshare');
      for (let i = 0; i < apis.length; i++) {
        if (!this[apis[i]]) {
          if (apis[i] === 'screenshare') {
            virtualclass.gObj.errNotScreenShare = true;
          }
          errors.push(virtualclass.lang.getString(`err${apis[i]}`));
        }
      }
      return errors;
    },

    /*
     * to check for  the support of virtual class and it's api in  browsers and versions
     * for unsupported browsers virtual class will be disabled and erroe
     * will be generated
     *
     */
    check() {
      this.device = 'desktop';
      const addAttr = document.getElementById('virtualclassCont');
      const vendor = this.mybrowser.detection();
      const bname = vendor[0];
      const bversion = parseFloat(vendor[1]);
      this.mobile = this.isMobile();
      this.mybrowser.name = bname;
      this.mybrowser.version = bversion;
      console.log('====> is browser name ' + this.mybrowser.name);
      console.log('====> is browser version ' + this.mybrowser.version);
      this.checkBrowserFunctions(bname, bversion);
      if (this.mobile) {
        console.log('====> is mobile true');
        this.device = 'mobTab';
        addAttr.classList.add('mobTab');
        addAttr.setAttribute('device', 'mobile');
        if (bname === 'Chrome') {
          if (bversion < 40) {
            virtualclass.error.push(virtualclass.error.push(getString));
            virtualclass.vutil.initDisableVirtualClass();
          } else if (bversion >= 40 && bversion < 67) {
            // DO : Disable Audio Controls and Cam Support for this user
            virtualclass.vutil.initDisableAudVid();
          }
        }
      } else if ((bname === 'Chrome' && bversion >= 40) || (bname === 'Firefox' && bversion >= 35)
        || (roles.isStudent() && bname === bversion && 'OPR' >= 26)) {
        this.reportBrowser(virtualclass.gObj.uRole);
      } else if ((bname === 'Chrome' && bversion < 40) || (bname === 'Firefox' && bversion < 35)
        || (roles.isStudent() && bname === 'OPR' && bversion < 26)) {
        this.reportBrowser(virtualclass.gObj.uRole);
        virtualclass.error.push(virtualclass.lang.getString('chFireBrowsersIssue', [bname, bversion]));
      } else if (bname === 'OPR' && bversion >= 26) {
        this.reportBrowser(virtualclass.gObj.uRole);
        if (roles.hasControls()) {
          virtualclass.error.push(virtualclass.lang.getString('operaBrowserIssue', [bname, bversion]));
        }
      } else if (this.mybrowser.detectIE()) {
        virtualclass.gObj.errIE = true;
        virtualclass.error.push(virtualclass.lang.getString('ieBrowserIssue'));
        virtualclass.vutil.initDisableVirtualClass();
      }
    },

    mediaDevices: {
      webcamErr: [],
      async getMediaDeviceInfo() {
        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
          // Firefox 38+ seems having support of enumerateDevicesx
          navigator.enumerateDevices = async function () {
            const devices = await navigator.mediaDevices.enumerateDevices();
            return devices;
          };
        }

        let MediaDevices = [];
        const isHTTPs = location.protocol === 'https:';
        let canEnumerate = false;

        if (typeof MediaStreamTrack !== 'undefined' && 'getSources' in MediaStreamTrack) {
          canEnumerate = true;
        } else if (navigator.mediaDevices && !!navigator.mediaDevices.enumerateDevices) {
          canEnumerate = true;
        }

        this.hasMicrophone = false;
        this.hasSpeakers = false;
        this.hasWebcam = false;

        let isMicrophoneAlreadyCaptured = false;
        let isWebcamAlreadyCaptured = false;

        const that = this;

        if (!canEnumerate) {
          return;
        }

        if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
          navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack);
        }

        if (!navigator.enumerateDevices && navigator.enumerateDevices) {
          navigator.enumerateDevices = navigator.enumerateDevices.bind(navigator);
        }

        if (!navigator.enumerateDevices) {
          if (callback) {
            callback();
          }
          return;
        }

        MediaDevices = [];
        let devices;
        try {
          devices = await navigator.enumerateDevices();
        } catch (err) {
          // console.log(err);
        }


        devices.forEach((_device) => {
          const device = {};
          for (const d in _device) {
            device[d] = _device[d];
          }

          if (device.kind === 'audio') {
            device.kind = 'audioinput';
          }

          if (device.kind === 'video') {
            device.kind = 'videoinput';
          }

          let skip;
          MediaDevices.forEach((d) => {
            if (d.id === device.id && d.kind === device.kind) {
              skip = true;
            }
          });

          if (skip) {
            return;
          }

          if (!device.deviceId) {
            device.deviceId = device.id;
          }

          if (!device.id) {
            device.id = device.deviceId;
          }

          if (!device.label) {
            device.label = 'Please invoke getUserMedia once.';
            if (!isHTTPs) {
              device.label = `HTTPs is required to get label of this ${device.kind} device.`;
            }
          } else {
            if (device.kind === 'videoinput' && !isWebcamAlreadyCaptured) {
              isWebcamAlreadyCaptured = true;
            }

            if (device.kind === 'audioinput' && !isMicrophoneAlreadyCaptured) {
              isMicrophoneAlreadyCaptured = true;
            }
          }

          if (device.kind === 'audioinput') {
            that.hasMicrophone = true;
          }

          if (device.kind === 'audiooutput') {
            that.hasSpeakers = true;
          }

          if (device.kind === 'videoinput') {
            that.hasWebcam = true;
          }
          // there is no 'videoouput' in the spec.
          MediaDevices.push(device);
        });
      },
    },

    webpInit() {
      virtualclass.modernizr.on('webp', (result) => {
        if (virtualclass.system.mybrowser.name === 'Firefox' || virtualclass.system.mybrowser.name === 'Edge') {
          virtualclass.system.webpSupport = false;
        } else {
          virtualclass.system.webpSupport = !!(result);
        }
      });
    },

    initResize() {
      if (Object.prototype.hasOwnProperty.call(virtualclass.gObj, 'measureDimension')) {
        delete virtualclass.gObj.measureDimension;
      }

      if (Object.prototype.hasOwnProperty.call(virtualclass.gObj, 'initResize')) {
        clearTimeout(virtualclass.gObj.initResize);
      }

      virtualclass.gObj.initResize = setTimeout(() => {
        virtualclass.vutil.addClass('virtualclassCont', 'resizeWindow');
        virtualclass.view.window.resize();
      }, 50);
    },

    _initResize() {
      virtualclass.vutil.addClass('virtualclassCont', 'resizeWindow');
      virtualclass.view.window.resize();
    },
  };

  system.init();

  // TODO two event listener for the same event resize
  window.addEventListener('resize', () => { system.initResize(); });

  system.mybrowser.detectIE = function () {
    const ua = window.navigator.userAgent;

    const msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    const trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      const rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    const edge = ua.indexOf('Edge/');
    if (edge >= 17) {
      // IE 12 => return version number
      // We are supporting on edge 17 or higher
      return false;
    }
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  },

  system.mybrowser.detection = function () {
    /**  inspired from
     https://stackoverflow.com/questions/5916900/how-can-you-detect-the-version-of-a-browser/5916928
     answered by Brandon
     * */

    let browser;
    const ua = navigator.userAgent; let tem;
    let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      browser = { name: 'IE', version: (tem[1] || '') };
    }
    if (M[1] === 'Chrome') {
      tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) {
        browser = { name: tem[1].replace('OPR', 'Opera'), version: tem[2] };
      }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
      M.splice(1, 1, tem[1]);
      browser = { name: M[0], version: M[1] };
    }
    if (typeof browser !== 'undefined') {
      return [browser.name, browser.version];
    }
    return M;
  };

  system.isCompatibleCPU = function () {
    if (window.navigator.hardwareConcurrency) {
      return !(window.navigator.hardwareConcurrency < 4);
    }
    return true;
  };

  system.isCompatibleRAM = function () {
    if (window.navigator.deviceMemory) {
      return !(window.navigator.deviceMemory < 4);
    }
    return true;
  };

  window.system = system;
}(window));
