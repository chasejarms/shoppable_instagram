const requestSecureRandomToken = () => (
  $.ajax({
    method: "POST",
    url: "api/secure_random_tokens"
  })
);

export default requestSecureRandomToken;
