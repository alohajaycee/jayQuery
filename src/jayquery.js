const lean = function(param)
{
    var item;
    
    try
    {
        item = document.querySelector(param);
    } catch (error)
    {
        if(param != null)
        {
            if(param[0] == '<')
            {
                item = document.createElement(param.substring(1));
            }
            else
            {
                item = param;
            }
        }
    }
    return{

        hide: function()
        {
            item.style.display = 'none';
            return this;
        },
        show: function()
        {
            item.style.display = '';
            return this;
        },
        attr: function(name,value = null)
        {
            if(value != null)
            {
                var attribute = document.createAttribute(name);
                attribute.value = value;

                item.setAttributeNode(attribute);
                return this;
            }
            else
            {
                return item.getAttribute(name);
            }
        },
        submit: function(callback)
        {
            item.addEventListener("submit", callback);
        },
        on: function(a,b,c = null)
        {
            if(a=='click')
            {
                if(c == null) item.addEventListener("click", b);
                else 
                {
                    var events = item.querySelectorAll(String(b));
                    events.forEach(event => {
                        event.addEventListener("click", c);
                    });
                }
                
            }
            if(a='change')
            {
                if(c == null) item.addEventListener("change", b);
                else 
                {
                    var events = item.querySelectorAll(String(b));
                    events.forEach(event => {
                        event.addEventListener("change", c);
                    });
                }
            }
        },
        val: function()
        {
            return item.value;
        },
        html: function(value)
        {
            // console.log(item);
            item.innerHTML = value;
            return this;
        },
        empty: function()
        {
             item.innerHTML = '';
              return this;
        },
        text: function()
        {
            return item.textContent;
        },
        append: function(html)
        {
            var x = item;
            var option = html;
            return x.add(option);
        },
        prop: function(key,value)
        {
            item.selectedIndex = key[ value ];
        },
        css: function(key,value)
        {
              var attribute = document.createAttribute('style');
              attribute.value = key+':'+value;

              item.setAttributeNode(attribute);
              return this;
        }
    }
    
};
lean.ajax = function(param){
    
    var request = new XMLHttpRequest();

    request.open('GET', param.url, true);
    
    request.onload = function () {

        if (request.status >= 200 && request.status < 400) {
            param.success(JSON.parse(this.response));
        } else {
            console.log('error');
        }
    }

    request.send();
};

lean.each = function(variables, callback)
{
    variables.forEach(variable => {
        callback(variable);
    });
}

lean.inArray = function(needle,haystack)
{
    return haystack.indexOf(needle);
}

lean('.text').empty().html('new text');
