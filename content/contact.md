+++
title = "contact"
SubTitle = "email me"
weight = 60
draft = false
+++

<form id="thatguywiththemohawk.com" name="thatguywiththemohawk.com" method="post" data-netlify="true" action="#contactformsent">
	<div class="field half first">
		<input type="text" name="name" id="name" placeholder="Name"/>
	</div>
	<div class="field half">
		<input type="email" id="email" name="email" placeholder="Email">
	</div>
	<div class="field">
		<textarea name="message" id="message" rows="4" placeholder="Message"></textarea>
	</div>
	<ul class="actions">
		<li><input type="submit" value="Send message" class="special" /></li>
		<li><input type="reset" value="Reset" /></li>
	</ul>
</form>
<span id="contactformsent">Thank you for your message</span>

<script>
$(document).ready(function($) { 
    $(function(){
        if (window.location.search == "?sent") {
        	$('#thatguywiththemohawk.com').hide();
        	$('#contactformsent').show();
        } else {
        	$('#contactformsent').hide();
        }
    });
});
</script>