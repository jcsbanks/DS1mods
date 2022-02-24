function hexStringToByte(str)
{
	var a = [];
	for (var i = 0, len = str.length; i < len; i+=3)
	{
		a.push(parseInt(str.substr(i,2),16));
	}
	return new Uint8Array(a);
}

gE('#opdiv').innerHTML='';
ws.send('RTconn');
ws.send('RTstat');