import api from '../utils/api';

export function sendURL(url) {
  return api({
    method: 'post',
    url: '/predict/with_url',
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify({
      data: url,
    }),
  });
}

export function sendDoc(formData) {
  return api({
    method: 'post',
    url: '/predict/with_document',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  });
}

// with text url
// /predict/with_text
