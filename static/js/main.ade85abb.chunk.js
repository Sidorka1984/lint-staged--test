(this["webpackJsonplint-staged--test"]=this["webpackJsonplint-staged--test"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"label":"Tab 1","content":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."},{"label":"Tab 2","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{"label":"Tab 3","content":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text."}]')},,,,,,,function(e,t,n){},,function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(6),c=n.n(r),i=(n(22),n(2)),s=n(3),l=n(5),u=n(4),d=n(13),h=n(12),b=n(0),j={form:{marginBottom:20}},m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={pokemonName:""},e.handleNameChange=function(t){e.setState({pokemonName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.pokemonName.trim()?(e.props.onSubmit(e.state.pokemonName),e.setState({pokemonName:""})):d.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u0430.")},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,style:j.form,children:[Object(b.jsx)("input",{type:"text",name:"pokemonName",value:this.state.pokemonName,onChange:this.handleNameChange}),Object(b.jsxs)("button",{type:"submit",children:[Object(b.jsx)(h.a,{style:{marginRight:8}}),"\u041d\u0430\u0439\u0442\u0438"]})]})}}]),n}(a.Component),v=n.p+"static/media/error.7d86105a.jpg";function p(e){var t=e.message;return Object(b.jsxs)("div",{role:"alert",children:[Object(b.jsx)("img",{src:v,width:"240",alt:"sadcat"}),Object(b.jsx)("p",{children:t})]})}function f(e){var t=e.pokemon,n=t.sprites,a=t.name,o=t.stats;return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:n.other["official-artwork"].front_default,width:"240",height:"100",alt:a}),Object(b.jsx)("h2",{children:a}),Object(b.jsx)("ul",{children:o.map((function(e){return Object(b.jsxs)("li",{children:[e.stat.name,": ",e.base_stat]},e.stat.name)}))})]})}var O={spinner:{display:"flex",alignItems:"center",marginBottom:10,fontSize:24}};function g(e){var t={name:e.pokemonName,sprites:{other:{"official-artwork":{front_default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAADXCAMAAADMbFYxAAAA4VBMVEX+/v7t7e3////+qQDs7OwAAADr6+v09PT5+fnx8fH6+vr29vb/qwD/rQD/rwejo6Pf39/BwcGEhIR5eXmnp6fNzc3U1NTb29uSkpLHx8e7u7uxsbE5OTl+fn4fHx+3t7eVlZVPT09vb29mZmYuLi5BQUHhmg4XFxf5qQxeXl5VVVUgICClcQ41NTVhYWE4Iwavdw2OYQ7blxLxpA7OjhNGLwgODg4dEALBhQ9mRgtZPQmZaQ96VA0sHgfGixtfPwYSBgGDWg8nGAhAKwpyTAiPYgpPNgoPAAA0HwS2fAtPNxDB+LChAAAV70lEQVR4nO1d6ULbuhK2jRNZdmLCFsJWtgJpS0tLKNBCTxfannLf/4FuNCNvsjY7diC9V79MPpJoImn2GTme4zgecaeDwCN78oPpoxf67DHDqRR32ItRhlP2GDHc0eOOHR6yjwrYi26GExH3Jbgn4o4j0AL/ELBXc7QQX6BVwCMBL9HiF2ipgocpntHikyLuBDI8R8pfTKv7f1odjw3qTweFR/bUDdhT2GWP8CLJcFfAHRkesScnw6NuilMl7mZTMeEEHgEP2VPAHn0T7hA2omA6IngM0kd4MSDCYyD861Pj0qnKcUfOd6ePPt+TvoTviniUwz2+50q4I8WpEncznGR4yldFXOS7vi/ijlvc1AoZYzi/cL7k57fq+cxwV4qr+a6I+6KM+h+kVbOHBdy4h5O5Kvcw4xWUDc5LLPewqDuY9rBb3sPwrUE4HTgB9hRG7InAI7wYqXEi4IEKn/7aYRRF7mA4HG6tTMfWcEDD6YthEAUW7+dTyXBqhUcZXpI5XanMyWSGKJMcAZfKHIfQze3l1ePds4443h6vrm8NXEJoBZlUU+Y4wvlsWJdgE6Qbo3dlIovjcG9ngHNtUZdolVZK3OHyawOZ6dhd3QrBDFhAWind2ntjSygfx+vdiLot6f52OqJwHq3Oa3f0skDGl9/f7x7/uTqdTMbjOO6Nx5PTy38ez79/vSiSu7ZCQ/157dY8r0qZo7JXPYV8LehN0yU9zk3/4v78atKfjt50LKWD/cVenVy+//Ax9+8nOz4pyVdRb1KsY0nmZLhCl5DQWkWXCLdP0on/+Pn+NI77ORLLY0pyPLn6kC3w2ahLNHZPFV0ik88t6E2et5Gyo5v7q3GsJTNHcD8+vUuX9+xgAXREz01379fbsX49JeRefr/h736xPT2zjdJqslet7NlM9tNgxKf67ddp3KtEKSd3/Jjs5ZNBntc4Aq+poFvgVJ2qRqAe97Y47/12N7Hdu6XR71395tSOSFjfXhVxh/MiIB6YGRvId/k6FnFXwJ0c7nmrfI6/Jv2ahPLFveVr+3bANnLkwzoir4F1ZGyVryPwKljHIg7r7Gd4s7rE8AVO8NNslAK18ftv+GHLTL4+N70pWsbJfbyKZ6WUjf7kO37eUXO+tYQWP09rdXuWdl/h1D6M655TccRXP+ATd13Hwp51Tfas62RGIBGMwEr2bDRApvRw2cii4uiN7/H324ys7VUpjlOtKXNK+u8QJ3Xf2KLiiN/j5w61MseoH3OZ04gu4W3hlN43uKg4+leoWmx4z0RvIvuoEF7OzH7Loze54CvbFq0GvlvEyQ7y30mz+zclFhWLgfdEOmL+vJJtVH4bPqoZsWMg9oy6qvMoP6/d0nmFgfFXJ1lHF9fRTQUw7mk5ztnSp3E7lLIxBuvnBGZL06nClnRxHd1knUt4kOFOuidF+SruWVG+ctzrXrdN6nQbP7Dv2PMUe1YnX4MM57RmvKii3uSGu2wan1vavwmxp7B3Vrwn1REJGKsPba4qG/0rILbrzR5/rWqvpjgBHfiLLQfuMWucudXYMDlmCiM+Z1/0ahZfuOtEs4xwAD/3ld2c+/H49PHu/vPHiz83P748/P756/HU2kMTAzPeD2eYrcPtUa3M8ZVx9EPQlmxUiF58+v4TN9Ny49vP24mVsoVH9hq/H+1RcR39bB192TrPpDd5sIN/Wsy1t3T7qURnMr5f2ixuH1TjVa9xvcmOVhdWZmKeZ3z7UUkpSKxTi98r/ojsaVZaBQeyZfwVePCtcQf3J58zsnaPR+s7+/v768ujtZPs5V9mrat3lQpZK3tVFX+dmrEON/JYoBLtWXgUcQhkYlBzA5bEuCLx7b+coNcHQ+QHISFRNGUCdHhwyLELs+EQwzHwHf79ualG0qmKpMwQf/VAizDuYJQWzJXvpvpr4mN1KfUGa5zaR9Ov1ruEE0tqx3Nq6xLeCvvmO9ME4zuk5ACDb+X8iOmcOLXnxs/6Cax4zjl67FCw0/bNpDDFj0DG4SZR54J43sYLK2LxxK7TeeuI6Io4NxwynF1nLaLavJew+9qKWGDFh8Stua7iebXWEZnb8Ma0rBPwoIyc7P3yfAiX4j42aGAoYzfdmueVsanEyGOPsNDTDUe5EZjhYYZP5wZW651hWftf2X8dkyh7f8jfz/gkfD77qimOIYMbA6ubwCb2AuH93F41kGIvX4t7muxZMOE+HNZdWs6Nzs5Esqc9D1bWoIT1mdg5lMtX0V/cVPzVdVkixL3heE1AsG5Sq7w1zwEZdqsPSsOvN18dkW5bnK4YghTLxDJHD505D/rfDyyAYViT1lq+NXLEVB09Z0IefMJcYiVeVORVHCcj88LGf5isdqR2jolX1bRfPeZk+qDnTD2wODeDCh/LPvWzdmH7LOrxrt6sa/klfLTR9Vu4d4uqOmM78nUU1tnlNuKpllamcZ7l3l/FL1FLl3DWp9/4r34Lg9w/66rPZ/n8esSon+DBGMxRb/KOjBYOTuqAVqHVASvxk/ZogIQdzkKrxD+si786L42KRAxqRNdNafFtaF03KmNj9rErMnmq8A9nONCaGHlscCOQ/Rg0VU5EvGs8rmh/jSKKelL2URi/hX2D9nAe94APXOo+OP4CmpP1VPO4iRdJ8aFRaQLzqxNVrGFxB9cmqQP+xBGtJnO08Vel7xv3HJiu2q02YS7DVUkulv78UnY4tH5JOBsjMj+9iR2rPzrWhAbJoDqtJyZGAI6Y1SZpNazrgUnmx/+Z/sdrz8SLyrQyO/aXjlZQJvbq0VrrvI5MIgfU1p1E9zDl72c4PTStax/XtXAeq8VfDXw4KuIRszV/ambU/wUCp8RnTXwYHTtaZSJm/teDenxYlJ828pWsGtY1ZolJR6SwZ63kq8d406ORDy/Xl69V9SZyoDe+UGfaoubzKdJqFtzxRSpf56Ij0h29Otxnhuu1Z8GLRFpXzIKbebD269Eq40W6uB3jNXRD//OPf4BwNdmrZTsH/DAPZn14S7RzfCs7p5YlGDF/7nfVnNDNtFHFcMURgJ2jFTnczqn+2RGPv1aWOSF41k4VCzu+AI9azt6180t06bJRHQaH01lYzy9RS2+KwBGucK3hsi7TyjWhrssq0T5qPQDACg4xnWdOvrUIEmgfpbsN/N9n3er1r1b+ps/ACmbxIwpOVaN/GF3hHVkcES2cZWIjTyV+xAu9HxFY076jlqdZvlPZPwx0i8ldWR5bDs/lsUVuBGsgybaMQWU6IdSl2fuj0vtdt4SDzmTlxHID4f2aPLUcKfXjr5gGfissAw9BDiT6r6EnA+5gk9+fbZrdaM7xV895C1TdjbOl7cUTzABZtzqfBRyTVU3xnPENWK/z7pHidTHr/eaclctNR9w//QCvdFadyrSiemJgTNws3qJzz9Fzukmuw8PPD3fnv+6/8D/3SOW+A5zXfTAEiPpMcp9QU/x1th4p0vpX101SHQpjnch7nGjir84G1Hh/MiTtJXH1uvkSpWKHNM8llwcj1G2k9qy38Vak9PXAK+Sp0DRPJRTen+ERrqoxgxOE65vACaV5MOW6jWIeTDhTfhPj4vuFcvRXG1CTJuuBIu7pDCdYGXFhyuDkCplXO7/JLW7qyrUNlAz2V9eOT07eHa2udEk1Pz/gPIf+wZisOgaGwH73p6vj4Fq+R2lVe5Xh0Y4lqSi6QZzVpTXjNb7KzlHnmebtmFBqx5jsnACr8H4bc/Qw0fStJs9Ub89O9zDWi8LAItL0EU1KEY+aw6dfFThYGvzZIrEcwrlbYeH9+a+SfX5hKq305bK1V/0k1eermVTcwccz5YXX1yVm77dGfVSqTTkmS0ks7Jo8k/rXyrTS7gmq1BbJwxMoD92arbahKC+r1+fUp9XjZaTGlMulJClsTVGzUqU+x7LuylPipb6VFrg3wIRLYyotO6xgVLwMvWTdUISwIdRdlfC8PWviRVb6sUb/VeHcsOlcWRRG8BTkIW2l/tVwPmfvt0bA6935ZlNGygt+V4jqfD7v3nK8jPRC5XYtkIopyMuz14Q+Ca3OsqVemJG62kCt75Oc1wOuLNmQihv4SJe7ZRt/lfYZmKGvngmf2pMRRA06P20KDrmv7jiiDfQhEO3VVL7O3C9RYa8meuG9TWVaQiqzoGbvL+EI57N1vYkgqSbXEpKKzro1q5jG89MRgzVrZWkpvudsyYoXWfdI8SV9frgRWMRdAXdkOO7hbopHCZ50Ajq3qhaEaElnlMZncY/6SZ8f+P5cH58i7pT7/DTbv8nY32lkvaq9MfrVD7zG+jfVkzmCPauxVws4WbUnlbeVWCduY3255qlLYMDLyobjrQc6O6Fw/hdEb+KKoRWpp9jOaGUOffREviuxZyvTyhvk2JDav8Rq76Gil+tM/RHhPOI/4HkE2Q/nTcAdGR4JeJThNMUpNN34bsGBeYeF600v7cXMjhvXDdh5RFq9BOf16kXcF/GZ+w+LuDq+CgECc2lwqu2/2KSq/MXn2X84i6+CaWPTdINb5iw0n+zZhbqjgtcaKtOE8qSiCnwY5PIfnl0fPS2tuIMtOlFgYVrn2MvZq8/rjgrTecX6O4vDOka9cK983pu4o6KiParu067DA+YeNXei6I2/ogocEPPnV+wDH+Tjry3eUYE+F1PB91RZ+shdS67ZXq3R31+uS7huk3qTG7BqWUNZZaYX7i/yHRWU1X2YclzSjnlb5f6lc7qjwm9gD0PVjT6nMlOBNxO9q/l7VphhR9HIo+xRZgQiHgg4scUjYMLaLH62qpAhcD30kqnoPj/Dc1MV8VDAK8scEbeROaz68YuhCHoMZ/V6EKFfoxWZ074u4VEwb/RMGEl94cvtmoXRmzwwW7XVyks98LecdRU23OLQytRDfRV6mp0q57vzvaNCrSN6xvPqgCas40z925QDW90pU9ema923RreMWxiSvTvbpPh+kRfN4FvT1jYY9mwVXYKyQNWPsabVP7q8V8XaJbUuUckHU9IlRFrd5miFMghdujdmjx6K8Z9F1BGNfRSwy+NgDrS2fV6Ndfy4rCMzL3rKOyrs7kQMNw2sCZuo+ar3i58vTsWES+6oUOj6vs6e7TI8vTuoHH/twkaCfBeNgghMmBUq53T53PvD1JYo2QJdX6/rC3j7ugRoTTeaWllwkG5SVX7FIulNkBvxW00r9BU4Ie48aC3tYVdvz9r7ZDithjp+qJU9IMU9Kt7XbHPnou0dFZHgoJoh90PEPUNtO2RAb0QWvroZckN4LUQ7MifTj6GDlzpptgcpPVb67/OPv0JD8e9KWkE/fC2t01o8vQkc/uqkF6ikGoVPSWtzun+k38NwXLeD+dBa77za5+hFWt6E9awDqx4q6vNom6OX7VmSW0dR5oh7WpA5Jvmq9EpApOqw5Ds3yFdXJ3ME+VrOW5PIV1NPXltdgvnBv6ho7T+A3j/jXfK6+yXnqjeBPqyKWvHOGDPS+mx0RGgW/4/cpsPjSudFay3dwVCLVORVu2q/BCrDZV93S77wdnPypo/hSJ08AFt4FM4lPTAIHCGXstKdiikeCXiUw10w1qUSFlNmec9ezKXMvV+aa9lV5lryMkflnYtzib9G7yB0VfY4Yd3Ya1XP3sXTEanLK3FKNy/yeOsWnTOtou6Qs0cF3JHhkYAX468kSaQtnNk+JpKuRUVasvjtrPaq6o6K9moZAMaa9k/ZfSq9/vj2G4ar6tujajwQcJzKzDl6djk/Jx2k9nESszG+PP+Dr2x4Sv23+XhO27oE4u5Rh4+bi98f/6R3Bm0Za/kXSW/itJLlTnmcTMXN30frlEFtik1Grg8oNdekzT/+KpzHyud1+ugG3fSynE7nxattj3WIN/T8bPa8MoLlDZ5oKpM0dy5W6EXl0IgMVlbWR8s72xt+REo4vD9Uvz/Dc1PV1P5mUxXvqBB9MPo7KiR71qZOkrfdCKlyz2bvt4y/ivI3xZu6o6IurVXwRdQRnxGtBnvVyp61rUWSxWel9qovsVdn94XXaZa5oKNW71a7XjiKdQSl1bCO4h0UVuv8vHqksDHYWNnf3xiwP1yb87uIehObAN0/epkoEy/XtgekJb2psfirgKdzFe1ZgVYaDY8EJbGzthm5qb2a0OoLtHoCrRXt2cp3VAi90bG3OTcSlXih93k0OJYo/509uArTvne6k/SSS/FAhjd5R0X1ngvbGX3/3txkf7xZIbb6r1rmPKceKS7vvtXp/Ofu6nQyHk9Or+6SW1LXo79Kb6L8pN6fJlc093r9+BLLjjoHkfxOt8WLv9KU1M+nRedaL77EGpVleU/QxYu/TieKRep35QaePV5RthLWOa/N3FEhvaiwhBfvXMzzUTd/pyIvZ34vjeig5//apZL3O/I7GWV47s7FHCnCnYuI15Kvuh5lBX/vtZrUJHf4OLLXJZT2ajt3VFSKSQILVieHjIEfb/0NOXouFKzo7u6A7JBX5LnGXyvYOXg9ga7hOR7ZDVrZzqneC7Jtm5FFmvUFKxCEPZiDIW3llzDas+rerXAJm+F6Asaedqv5JWqtc8t6E2QPG+qZk6SJRdcR4ZIY/RZOUk3nRmsqhOrHX0VasV/ToVbg4IB+0TsqWivKU90dxjk9iWZ6kswIDDNcbW8KONxfpa0vm44+a3k+8vD96rvAHCkuV/mkOI/nZPpro/FX131hZE28kmOPLHr8tXtmQytjxGuk/Thdu7TSN/bruug6IjHeN7fEmwuvzmFds03eRo8UctIxlm8vjVnuxDJt/7xK/Ya1/IrSOxPNlx1zJXHDk/sNBT5cyW8o4G3LV8getrmHvWsrXzN7tKJ8bV1HhGRE7S1sS31m6Lz0Fl9HdF4YFSdQm1a9Zxh/rXpHBWS/6JR/fkths3aOL7VzWrYZQ+g9prusAK6ze9vyNGC0fUeFD90lNN3e0bm2Q/Xx1ybywufgWwPudKNqKodN896q82IWR29iPlNwhUtu7ctI7QznSWsmL/1EnjZ1R4XnYbaapDlt4vdfd3x7Wivas+X4K/wYqQzS5bHRFDflqSW452Mw/dOkFM/BxNo9z5SnViGPTU3KXOKvlF8y0vmQj9P1r3icbk1xx9tixl9pEpTs/L7755LFXy//+fXAX1r+m2ob4NDsdOTj5ZC4fxet0z3afScjdRQSkZe1SOsczivHhyVqR90q9mpDd1RkxQ6mug7pnYuh9E7GUMAjlt/0Jt28aysu6+SZ4fk7E+V9BJR4dqfifO+oSPac5I4K+PGHWysrQ1g+t4gb+kvMbM8+wR0V8GNDQF93vgvnb2F0RAMt86QVOoar43JJr3RfEX/1K+eZKvFZ8kyl9irML2fvOuwiwqRIlD2S5DEpIq2AB/l/DbI7D3MvlvGg+Pm56xF1eGCcaiDidvFXu7zwendn2tcxt9VHr3Fdosb5XVi96RnTarBXn5hWU39EXX1OzsiTrmvOXuW0Cngk4NI7F50Ul9/JiHgoxb0iXrpTUY1nLVGcmXsueBJeZKpRkeO6ngsymVM5nvNf7a9qk80lVkwAAAAASUVORK5CYII="}}},stats:[]};return Object(b.jsxs)("div",{role:"alert",children:[Object(b.jsxs)("div",{style:O.spinner,children:[Object(b.jsx)(h.b,{size:"32",className:"icon-spin"}),"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."]}),Object(b.jsx)(f,{pokemon:t})]})}var x={fetchPokemon:function(e){return fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u0430 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(e)))}))}},k="idle",y="pending",w="resolved",N="rejected",S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={pokemon:null,error:null,status:k},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this,a=e.pokemonName,o=this.props.pokemonName;a!==o&&(console.log("change pokemon"),this.setState({status:y}),setTimeout((function(){x.fetchPokemon(o).then((function(e){return n.setState({pokemon:e,status:w})})).catch((function(e){return n.setState({error:e,status:N})}))}),1e3))}},{key:"render",value:function(){var e=this.state,t=e.pokemon,n=e.error,a=e.status,o=this.props.pokemonName;return"idle"===a?Object(b.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u0430."}):"pending"===a?Object(b.jsx)(g,{pokemonName:o}):"rejected"===a?Object(b.jsx)(p,{message:n.message}):"resolved"===a?Object(b.jsx)(f,{pokemon:t}):void 0}}]),n}(a.Component),C=n(7),T=n(16),V=function(e){var t=e.onIncrement,n=e.onDecrement;return Object(b.jsxs)("div",{className:"Counter__controls",children:[Object(b.jsx)("button",{type:"button",onClick:t,children:"\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043d\u0430 1"}),Object(b.jsx)("button",{type:"button",onClick:n,children:"\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043d\u0430 1"})]})},D=function(e){var t=e.value;return Object(b.jsx)("span",{className:"Counter__value",children:t})},P=(n(24),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:e.props.initialValue},e.handlerIncrement=function(){e.setState((function(e){return{value:e.value+1}}))},e.handlerDecrement=function(){e.setState((function(e){return{value:e.value-1}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.value;return Object(b.jsxs)("div",{className:"Counter",children:[Object(b.jsx)(D,{value:e}),Object(b.jsx)(V,{onIncrement:this.handlerIncrement,onDecrement:this.handlerDecrement})]})}}]),n}(o.a.Component));P.defaultProps={initialValue:0};var I=P,R=n(8),X=n.n(R),A=(n(33),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={visible:!1},e.toggle=function(){e.setState((function(e){return{visible:!e.visible}}))},e.show=function(){e.setState({visible:!0})},e.hide=function(){e.setState({visible:!1})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.visible;return Object(b.jsxs)("div",{className:"Dropdown",children:[Object(b.jsx)("button",{type:"button",className:"Dropdown__toggle",onClick:this.toggle,children:e?"\u0421\u043a\u0440\u044b\u0442\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"}),e&&Object(b.jsx)("div",{className:"Dropdown__menu",children:"\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0435 \u043c\u0435\u043d\u044e"})]})}}]),n}(a.Component)),q=n(9),L=n.n(q),E=(n(34),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={activeOptionIdx:0},e.setActiveIdx=function(t){e.setState({activeOptionIdx:t})},e.makeOptionClassName=function(t){return L()("ColorPicker__option",{"ColorPicker__option--active":t===e.state.activeOptionIdx})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state.activeOptionIdx,n=this.props.options[t].label;return Object(b.jsxs)("div",{className:"ColorPicker",children:[Object(b.jsx)("h2",{className:"ColorPicker__title",children:"Color Picker"}),Object(b.jsxs)("p",{children:["\u0412\u044b\u0431\u0440\u0430\u043d \u0446\u0432\u0435\u0442: ",n]}),Object(b.jsx)("div",{children:this.props.options.map((function(n,a){var o=n.label,r=n.color;return Object(b.jsx)("button",{className:L()("ColorPicker__option",{"ColorPicker__option--active":a===t}),style:{backgroundColor:r},onClick:function(){return e.setActiveIdx(a)}},o)}))})]})}}]),n}(a.PureComponent)),F=n(17),H=(n(35),["children","onClick"]),Z=function(e){var t=e.children,n=e.onClick,a=Object(F.a)(e,H);return Object(b.jsx)("button",Object(C.a)(Object(C.a)({type:"button",className:"IconButton",onClick:n},a),{},{children:t}))};Z.defaultProps={onClick:function(){return null},children:null};var W=Z;n.p;var z,K,M=function(e){var t=e.text,n=e.completed,a=e.onToggleCompleted,o=e.onDelete;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"checkbox",className:"TodoList__checkbox",checked:n,onChange:a}),Object(b.jsx)("p",{className:"TodoList__text",children:t}),Object(b.jsx)("button",{type:"button",className:"TodoList__btn",onClick:o,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},G=(n(36),function(e){var t=e.todos,n=e.onDeleteTodo,a=e.onToggleCompleted;return Object(b.jsx)("ul",{className:"TodoList ",children:t.map((function(e){var t=e.id,o=e.text,r=e.completed;return Object(b.jsx)("li",{className:L()("TodoList__item",{"todoList__item--completed":r}),children:Object(b.jsx)(M,{text:o,completed:r,onToggleCompleted:function(){return a(t)},onDelete:function(){return n(t)}})},t)}))})}),U=(n(37),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={message:""},e.handleChange=function(t){e.setState({message:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.message),e.setState({message:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"TodoEditor",onSubmit:this.handleSubmit,children:[Object(b.jsx)("textarea",{className:"TodoEditor__textarea",value:this.state.message,onChange:this.handleChange}),Object(b.jsx)("button",{type:"submit",className:"TodoEditor__button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}}]),n}(a.Component)),J=n(11),Y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={name:"",tag:"",experience:"junior",licence:!1},e.nameInputId=X.a.generate(),e.tagInputId=X.a.generate(),e.handleChange=function(t){var n=t.currentTarget,a=n.name,o=n.value;e.setState(Object(J.a)({},a,o))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.onSubmit(e.state),e.reset()},e.handleLicenceChange=function(t){console.log(t.currentTarget.checked),e.setState({licence:t.currentTarget.checked})},e.reset=function(){e.setState({name:"",tag:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("label",{htmlFor:this.nameInputId,children:["\u0418\u043c\u044f",Object(b.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(b.jsxs)("label",{htmlFor:this.tagInputId,children:["\u041f\u0440\u043e\u0437\u0432\u0438\u0449\u0435",Object(b.jsx)("input",{type:"text",name:"tag",value:this.state.tag,onChange:this.handleChange,id:this.tagInputId})]}),Object(b.jsx)("p",{children:"\u0412\u0430\u0448 \u0443\u0440\u043e\u0432\u0435\u043d\u044c:"}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:"experience",value:"junior",onChange:this.handleChange,checked:"junior"===this.state.experience}),"Junior"]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:"experience",value:"middle",onChange:this.handleChange,checked:"middle"===this.state.experience}),"Middle"]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:"experience",value:"senior",onChange:this.handleChange,checked:"senior"===this.state.experience}),"Senior"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",name:"licence",checked:this.state.licence,onChange:this.handleLicenceChange}),"\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 \u0443\u0441\u043b\u043e\u0432\u0438\u0435\u043c"]}),Object(b.jsx)("button",{type:"submit",disabled:!this.state.licence,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}}]),n}(a.Component),B=(n(38),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={time:(new Date).toLocaleTimeString()},e.intervalId=null,e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("setInterval"),this.intervalId=setInterval((function(){return e.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"Clock__face",children:this.state.time})}}]),n}(a.Component)),Q=(n(39),function(e){var t=e.children;return Object(b.jsx)("div",{className:"Container",children:t})}),_=(n(40),document.querySelector("#modal-root")),$=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).heandleKeyDown=function(t){"Escape"===t.code&&(console.log("tach ESC, close modal"),e.props.onClose())},e.heandleBackDropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.heandleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.heandleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(b.jsx)("div",{className:"Modal__backdrop",onClick:this.heandleBackDropClick,children:Object(b.jsx)("div",{className:"Modal__content",children:this.props.children})}),_)}}]),n}(a.Component),ee=["title","titleId"];function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ae(e,t){var n=e.title,o=e.titleId,r=ne(e,ee);return a.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":o},r),n?a.createElement("title",{id:o},n):null,z||(z=a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),K||(K=a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var oe=a.forwardRef(ae),re=(n.p,function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={activeTabIdx:0},e.setActiveTabIdx=function(t){e.setState({activeTabIdx:t})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;console.log("Re-render @ ".concat(Date.now()));var t=this.state.activeTabIdx,n=this.props.items,a=n[t];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:n.map((function(t,n){return Object(b.jsx)("button",{type:"button",onClick:function(){return e.setActiveTabIdx(n)},children:t.label},t.label)}))}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:a.label}),Object(b.jsx)("p",{children:a.content})]})]})}}]),n}(a.PureComponent)),ce=n(15),ie=(n(41),function(e){var t=e.value,n=e.onChange;return Object(b.jsxs)("div",{className:"TodoFilter",children:[Object(b.jsx)("p",{className:"TodoFilter__label",children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443"}),Object(b.jsx)("input",{type:"text",className:"TodoFilter__input",value:t,onChange:n})]})}),se=[{label:"red",color:"#F44336"},{label:"green",color:"#4CAF50"},{label:"blue",color:"#2196F3"},{label:"grey",color:"#607D8B"},{label:"pink",color:"#E91E63"},{label:"indigo",color:"#3F5185"}],le=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[],filter:"",showModal:!1},e.addTodo=function(t){var n={id:X.a.generate(),text:t,completed:!1};e.setState((function(e){var t=e.todos;return{todos:[n].concat(Object(T.a)(t))}}))},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.toggleCompleted=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(C.a)(Object(C.a)({},e),{},{completed:!e.completed}):e}))}}))},e.formSubmitHandler=function(e){setTimeout((function(){console.log(e)}),1e3)},e.handleNameChange=function(t){e.setState({name:t.currentTarget.value})},e.handleTagChange=function(t){e.setState({tag:t.currentTarget.value})},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleTodos=function(){var t=e.state,n=t.filter,a=t.todos,o=n.toLowerCase();return a.filter((function(e){return e.text.toLowerCase().includes(o)}))},e.calculateCompletedTodos=function(){return e.state.todos.reduce((function(e,t){return t.completed?e+1:e}),0)},e.togleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&this.setState({todos:t})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.todos,a=t.todos;n!==a&&localStorage.setItem("todos",JSON.stringify(this.state.todos)),n.length>a.length&&0!==a.length&&this.togleModal()}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.filter,a=e.showModal,o=t.length,r=this.calculateCompletedTodos(),c=this.getVisibleTodos();return Object(b.jsxs)(Q,{children:[Object(b.jsx)(B,{}),Object(b.jsx)(re,{items:ce}),Object(b.jsx)(W,{onClick:this.togleModal,"aria-label":"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c todo",children:Object(b.jsx)(oe,{width:"40",height:"40",fill:"#fff"})}),a&&Object(b.jsx)($,{onClose:this.togleModal,children:Object(b.jsx)(U,{onSubmit:this.addTodo})}),Object(b.jsx)(Y,{onSubmit:this.formSubmitHandler}),Object(b.jsx)("input",{type:"text",value:this.state.inputValue,onChange:this.handleInputChange}),Object(b.jsx)("h1",{children:"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b-\u0432\u043e: ",o]}),Object(b.jsxs)("p",{children:["\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445: ",r]})]}),Object(b.jsx)(ie,{value:n,onChange:this.changeFilter}),Object(b.jsx)(G,{todos:c,onDeleteTodo:this.deleteTodo,onToggleCompleted:this.toggleCompleted}),Object(b.jsx)(E,{options:se}),Object(b.jsx)(I,{}),Object(b.jsx)(A,{})]})}}]),n}(a.Component),ue=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={pokemonName:""},e.handleFormSubmit=function(t){e.setState({pokemonName:t})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{style:{maxWidth:1170,margin:"0 auto",padding:20},children:[Object(b.jsx)(m,{onSubmit:this.handleFormSubmit}),Object(b.jsx)(S,{pokemonName:this.state.pokemonName}),Object(b.jsx)(d.a,{autoClose:3e3}),Object(b.jsx)(le,{})]})}}]),n}(a.Component);c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(ue,{})}),document.getElementById("root"))}],[[42,1,2]]]);
//# sourceMappingURL=main.ade85abb.chunk.js.map