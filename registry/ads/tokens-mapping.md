# ADS Design Tokens

This document contains all Atlassian Design System tokens organized by category.

## Summary

Total tokens: 453

- **Background Colors**: 181 tokens
- **Text Colors**: 33 tokens
- **Icon Colors**: 23 tokens
- **Border Colors**: 32 tokens
- **Chart Colors**: 100 tokens
- **Link Colors**: 4 tokens
- **Skeleton Colors**: 2 tokens
- **Interaction Colors**: 2 tokens
- **Blanket Colors**: 3 tokens
- **Elevation Shadow**: 5 tokens
- **Elevation Surface**: 10 tokens
- **Opacity**: 2 tokens
- **Utility**: 1 token
- **Spacing**: 23 tokens
- **Font Family**: 5 tokens
- **Font Weight**: 4 tokens
- **Typography Styles**: 14 tokens
- **Border Radius**: 7 tokens
- **Border Widths**: 2 tokens

## Background Colors

| Token                                        | Light Value | Dark Value | Light Base Token | Dark Base Token | Light Tailwind Class     | Dark Tailwind Class           | Usage                                                                                                                                   |
| -------------------------------------------- | ----------- | ---------- | ---------------- | --------------- | ------------------------ | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `background.accent.blue.bolder`              | #1868DB     | #669DF1    | blue700          | blue400         | `bg-blue-600`            | `dark:bg-blue-500`            | Use for blue backgrounds when there is no meaning tied to the color, and the background needs to pass min 3:1 contrast requirements.    |
| `background.accent.blue.bolder.hovered`      | #1558BC     | #8FB8F6    | blue800          | blue300         | `hover:bg-blue-700`      | `dark:hover:bg-blue-400`      | Hovered state of color.background.accent.blue.bolder.                                                                                   |
| `background.accent.blue.bolder.pressed`      | #123263     | #CFE1FD    | blue900          | blue200         | `active:bg-blue-800`     | `dark:active:bg-blue-600`     | Pressed state of color.background.accent.blue.bolder.                                                                                   |
| `background.accent.blue.subtle`              | #669DF1     | #1558BC    | blue400          | blue800         | `bg-blue-500`            | `dark:bg-blue-700`            | Use for vibrant blue backgrounds when there is no meaning tied to the color, such as colored tags.                                      |
| `background.accent.blue.subtle.hovered`      | #8FB8F6     | #123263    | blue300          | blue900         | `hover:bg-blue-400`      | `dark:hover:bg-blue-800`      | Hovered state of color.background.accent.blue.subtle.                                                                                   |
| `background.accent.blue.subtle.pressed`      | #CFE1FD     | #1C2B42    | blue200          | blue1000        | `active:bg-blue-300`     | `dark:active:bg-blue-900`     | Pressed state of color.background.accent.blue.subtle.                                                                                   |
| `background.accent.blue.subtler`             | #CFE1FD     | #123263    | blue200          | blue900         | `bg-blue-200`            | `dark:bg-blue-800`            | Use for blue backgrounds when there is no meaning tied to the color, such as colored tags.                                              |
| `background.accent.blue.subtler.hovered`     | #8FB8F6     | #1558BC    | blue300          | blue800         | `hover:bg-blue-300`      | `dark:hover:bg-blue-700`      | Hovered state of color.background.accent.blue.subtler.                                                                                  |
| `background.accent.blue.subtler.pressed`     | #669DF1     | #1868DB    | blue400          | blue700         | `active:bg-blue-500`     | `dark:active:bg-blue-600`     | Pressed state of color.background.accent.blue.subtler.                                                                                  |
| `background.accent.blue.subtlest`            | #E9F2FE     | #1C2B42    | blue100          | blue1000        | `bg-blue-50`             | `dark:bg-blue-900`            | Use for blue backgrounds when there is no meaning tied to the color. Reserved for when you only want a hint of color.                   |
| `background.accent.blue.subtlest.hovered`    | #CFE1FD     | #123263    | blue200          | blue900         | `hover:bg-blue-100`      | `dark:hover:bg-blue-800`      | Hovered state of color.background.accent.blue.subtlest.                                                                                 |
| `background.accent.blue.subtlest.pressed`    | #8FB8F6     | #1558BC    | blue300          | blue800         | `active:bg-blue-200`     | `dark:active:bg-blue-700`     | Pressed state of color.background.accent.blue.subtlest.                                                                                 |
| `background.accent.gray.bolder`              | #6B6E76     | #96999E    | neutral700       | darkneutral700  | `bg-slate-600`           | `dark:bg-slate-400`           | Use for gray backgrounds when there is no meaning tied to the color, and the background needs to pass min 3:1 contrast requirements.    |
| `background.accent.gray.bolder.hovered`      | #505258     | #A9ABAF    | neutral800       | darkneutral800  | `hover:bg-slate-700`     | `dark:hover:bg-slate-300`     | Hovered state of color.background.accent.gray.bolder.                                                                                   |
| `background.accent.gray.bolder.pressed`      | #3B3D42     | #BFC1C4    | neutral900       | darkneutral900  | `active:bg-slate-800`    | `dark:active:bg-slate-200`    | Pressed state of color.background.accent.gray.subtlest.                                                                                 |
| `background.accent.gray.subtle`              | #8C8F97     | #63666B    | neutral500       | darkneutral500  | `bg-slate-500`           | `dark:bg-slate-600`           | Use for vibrant gray backgrounds when there is no meaning tied to the color, such as colored tags.                                      |
| `background.accent.gray.subtle.hovered`      | #B7B9BE     | #4B4D51    | neutral400       | darkneutral400  | `hover:bg-slate-400`     | `dark:hover:bg-slate-700`     | Hovered state of color.background.accent.gray.subtle.                                                                                   |
| `background.accent.gray.subtle.pressed`      | #DDDEE1     | #3D3F43    | neutral300       | darkneutral350  | `active:bg-slate-300`    | `dark:active:bg-slate-800`    | Pressed state of color.background.accent.gray.subtle.                                                                                   |
| `background.accent.gray.subtler`             | #DDDEE1     | #4B4D51    | neutral300       | darkneutral400  | `bg-slate-200`           | `dark:bg-slate-700`           | Use for gray backgrounds when there is no meaning tied to the color, such as colored tags.                                              |
| `background.accent.gray.subtler.hovered`     | #B7B9BE     | #63666B    | neutral400       | darkneutral500  | `hover:bg-slate-300`     | `dark:hover:bg-slate-600`     | Hovered state of color.background.accent.gray.subtler.                                                                                  |
| `background.accent.gray.subtler.pressed`     | #8C8F97     | #7E8188    | neutral500       | darkneutral600  | `active:bg-slate-500`    | `dark:active:bg-slate-500`    | Pressed state of color.background.accent.gray.subtler.                                                                                  |
| `background.accent.gray.subtlest`            | #F0F1F2     | #303134    | neutral200       | darkneutral300  | `bg-slate-50`            | `dark:bg-slate-800`           | Use for gray backgrounds when there is no meaning tied to the color. Reserved for when you only want a hint of color.                   |
| `background.accent.gray.subtlest.hovered`    | #DDDEE1     | #3D3F43    | neutral300       | darkneutral350  | `hover:bg-slate-100`     | `dark:hover:bg-slate-700`     | Hovered state of color.background.accent.gray.subtlest.                                                                                 |
| `background.accent.gray.subtlest.pressed`    | #B7B9BE     | #4B4D51    | neutral400       | darkneutral400  | `active:bg-slate-200`    | `dark:active:bg-slate-600`    | Pressed state of color.background.accent.gray.subtlest.                                                                                 |
| `background.accent.green.bolder`             | #1F845A     | #4BCE97    | green700         | green400        | `bg-green-600`           | `dark:bg-green-400`           | Use for green backgrounds when there is no meaning tied to the color, and the background needs to pass min 3:1 contrast requirements.   |
| `background.accent.green.bolder.hovered`     | #216E4E     | #7EE2B8    | green800         | green300        | `hover:bg-green-700`     | `dark:hover:bg-green-300`     | Hovered state of color.background.accent.green.bolder.                                                                                  |
| `background.accent.green.bolder.pressed`     | #164B35     | #BAF3DB    | green900         | green200        | `active:bg-green-800`    | `dark:active:bg-green-200`    | Pressed state of color.background.accent.green.bolder.                                                                                  |
| `background.accent.green.subtle`             | #4BCE97     | #216E4E    | green400         | green800        | `bg-green-500`           | `dark:bg-green-700`           | Use for vibrant green backgrounds when there is no meaning tied to the color, such as colored tags.                                     |
| `background.accent.green.subtle.hovered`     | #7EE2B8     | #164B35    | green300         | green900        | `hover:bg-green-400`     | `dark:hover:bg-green-800`     | Hovered state of color.background.accent.green.subtle.                                                                                  |
| `background.accent.green.subtle.pressed`     | #BAF3DB     | #1C3329    | green200         | green1000       | `active:bg-green-300`    | `dark:active:bg-green-900`    | Pressed state of color.background.accent.green.subtle.                                                                                  |
| `background.accent.green.subtler`            | #BAF3DB     | #164B35    | green200         | green900        | `bg-green-200`           | `dark:bg-green-800`           | Use for green backgrounds when there is no meaning tied to the color, such as colored tags.                                             |
| `background.accent.green.subtler.hovered`    | #7EE2B8     | #216E4E    | green300         | green800        | `hover:bg-green-300`     | `dark:hover:bg-green-700`     | Hovered state of color.background.accent.green.subtler.                                                                                 |
| `background.accent.green.subtler.pressed`    | #4BCE97     | #1F845A    | green400         | green700        | `active:bg-green-500`    | `dark:active:bg-green-600`    | Pressed state of color.background.accent.green.subtler.                                                                                 |
| `background.accent.green.subtlest`           | #DCFFF1     | #1C3329    | green100         | green1000       | `bg-green-50`            | `dark:bg-green-900`           | Use for green backgrounds when there is no meaning tied to the color. Reserved for when you only want a hint of color.                  |
| `background.accent.green.subtlest.hovered`   | #BAF3DB     | #164B35    | green200         | green900        | `hover:bg-green-100`     | `dark:hover:bg-green-800`     | Hovered state of color.background.accent.green.subtlest.                                                                                |
| `background.accent.green.subtlest.pressed`   | #7EE2B8     | #216E4E    | green300         | green800        | `active:bg-green-200`    | `dark:active:bg-green-700`    | Pressed state of color.background.accent.green.subtlest.                                                                                |
| `background.accent.lime.bolder`              | #5B7F24     | #94C748    | lime700          | lime400         | `bg-lime-600`            | `dark:bg-lime-400`            | Use for for backgrounds when there is no meaning tied to the color, and the background needs to pass min 3:1 contrast requirements.     |
| `background.accent.lime.bolder.hovered`      | #4C6B1F     | #B3DF72    | lime800          | lime300         | `hover:bg-lime-700`      | `dark:hover:bg-lime-300`      | Hovered state of color.background.accent.lime.bolder.                                                                                   |
| `background.accent.lime.bolder.pressed`      | #37471F     | #D3F1A7    | lime900          | lime200         | `active:bg-lime-800`     | `dark:active:bg-lime-200`     | Pressed state of color.background.accent.lime.bolder.                                                                                   |
| `background.accent.lime.subtle`              | #94C748     | #4C6B1F    | lime400          | lime800         | `bg-lime-500`            | `dark:bg-lime-700`            | Use for vibrant for backgrounds when there is no meaning tied to the color, such as colored tags.                                       |
| `background.accent.lime.subtle.hovered`      | #B3DF72     | #37471F    | lime300          | lime900         | `hover:bg-lime-400`      | `dark:hover:bg-lime-800`      | Hovered state of color.background.accent.lime.subtle.                                                                                   |
| `background.accent.lime.subtle.pressed`      | #D3F1A7     | #28311B    | lime200          | lime1000        | `active:bg-lime-300`     | `dark:active:bg-lime-900`     | Pressed state of color.background.accent.lime.subtle.                                                                                   |
| `background.accent.lime.subtler`             | #D3F1A7     | #37471F    | lime200          | lime900         | `bg-lime-200`            | `dark:bg-lime-800`            | Use for for backgrounds when there is no meaning tied to the color, such as colored tags.                                               |
| `background.accent.lime.subtler.hovered`     | #B3DF72     | #4C6B1F    | lime300          | lime800         | `hover:bg-lime-300`      | `dark:hover:bg-lime-700`      | Hovered state of color.background.accent.lime.subtler.                                                                                  |
| `background.accent.lime.subtler.pressed`     | #94C748     | #5B7F24    | lime400          | lime700         | `active:bg-lime-500`     | `dark:active:bg-lime-600`     | Pressed state of color.background.accent.lime.subtler.                                                                                  |
| `background.accent.lime.subtlest`            | #EFFFD6     | #28311B    | lime100          | lime1000        | `bg-lime-50`             | `dark:bg-lime-900`            | Use for for backgrounds when there is no meaning tied to the color. Reserved for when you only want a hint of color.                    |
| `background.accent.lime.subtlest.hovered`    | #D3F1A7     | #37471F    | lime200          | lime900         | `hover:bg-lime-100`      | `dark:hover:bg-lime-800`      | Hovered state of color.background.accent.lime.subtlest.                                                                                 |
| `background.accent.lime.subtlest.pressed`    | #B3DF72     | #4C6B1F    | lime300          | lime800         | `active:bg-lime-200`     | `dark:active:bg-lime-700`     | Pressed state of color.background.accent.lime.subtlest.                                                                                 |
| `background.accent.magenta.bolder`           | #AE4787     | #E774BB    | magenta700       | magenta400      | `bg-pink-600`            | `dark:bg-pink-400`            | Use for magenta backgrounds when there is no meaning tied to the color, and the background needs to pass min 3:1 contrast requirements. |
| `background.accent.magenta.bolder.hovered`   | #943D73     | #F797D2    | magenta800       | magenta300      | `hover:bg-pink-700`      | `dark:hover:bg-pink-300`      | Hovered state of color.background.accent.magenta.bolder.                                                                                |
| `background.accent.magenta.bolder.pressed`   | #50253F     | #FDD0EC    | magenta900       | magenta200      | `active:bg-pink-800`     | `dark:active:bg-pink-200`     | Pressed state of color.background.accent.magenta.bolder.                                                                                |
| `background.accent.magenta.subtle`           | #E774BB     | #943D73    | magenta400       | magenta800      | `bg-pink-500`            | `dark:bg-pink-700`            | Use for vibrant magenta backgrounds when there is no meaning tied to the color, such as colored tags.                                   |
| `background.accent.magenta.subtle.hovered`   | #F797D2     | #50253F    | magenta300       | magenta900      | `hover:bg-pink-400`      | `dark:hover:bg-pink-800`      | Hovered state of color.background.accent.magenta.subtle.                                                                                |
| `background.accent.magenta.subtle.pressed`   | #FDD0EC     | #3D2232    | magenta200       | magenta1000     | `active:bg-pink-300`     | `dark:active:bg-pink-900`     | Pressed state of color.background.accent.magenta.subtle.                                                                                |
| `background.accent.magenta.subtler`          | #FDD0EC     | #50253F    | magenta200       | magenta900      | `bg-pink-200`            | `dark:bg-pink-800`            | Use for magenta backgrounds when there is no meaning tied to the color, such as colored tags.                                           |
| `background.accent.magenta.subtler.hovered`  | #F797D2     | #943D73    | magenta300       | magenta800      | `hover:bg-pink-300`      | `dark:hover:bg-pink-700`      | Hovered state of color.background.accent.magenta.subtler.                                                                               |
| `background.accent.magenta.subtler.pressed`  | #E774BB     | #AE4787    | magenta400       | magenta700      | `active:bg-pink-500`     | `dark:active:bg-pink-600`     | Pressed state of color.background.accent.magenta.subtler.                                                                               |
| `background.accent.magenta.subtlest`         | #FFECF8     | #3D2232    | magenta100       | magenta1000     | `bg-pink-50`             | `dark:bg-pink-900`            | Use for magenta backgrounds when there is no meaning tied to the color. Reserved for when you only want a hint of color.                |
| `background.accent.magenta.subtlest.hovered` | #FDD0EC     | #50253F    | magenta200       | magenta900      | `hover:bg-pink-100`      | `dark:hover:bg-pink-800`      | Hovered state of color.background.accent.magenta.subtlest.                                                                              |
| `background.accent.magenta.subtlest.pressed` | #F797D2     | #943D73    | magenta300       | magenta800      | `active:bg-pink-200`     | `dark:active:bg-pink-700`     | Pressed state of color.background.accent.magenta.subtlest.                                                                              |
| `background.accent.orange.bolder`            | #BD5B00     | #FCA700    | orange700        | orange400       | `bg-orange-600`          | `dark:bg-orange-400`          | Use for orange backgrounds when there is no meaning tied to the color, and the background needs to pass min 3:1 contrast requirements.  |
| `background.accent.orange.bolder.hovered`    | #9E4C00     | #FBC828    | orange800        | orange300       | `hover:bg-orange-700`    | `dark:hover:bg-orange-300`    | Hovered state of color.background.accent.orange.bolder.                                                                                 |
| `background.accent.orange.bolder.pressed`    | #693200     | #FCE4A6    | orange900        | orange200       | `active:bg-orange-800`   | `dark:active:bg-orange-200`   | Pressed state of color.background.accent.orange.bolder.                                                                                 |
| `background.accent.orange.subtle`            | #FCA700     | #9E4C00    | orange400        | orange800       | `bg-orange-500`          | `dark:bg-orange-700`          | Use for vibrant orange backgrounds when there is no meaning tied to the color, such as colored tags.                                    |
| `background.accent.orange.subtle.hovered`    | #FBC828     | #693200    | orange300        | orange900       | `hover:bg-orange-400`    | `dark:hover:bg-orange-800`    | Hovered state of color.background.accent.orange.subtle.                                                                                 |
| `background.accent.orange.subtle.pressed`    | #FCE4A6     | #3A2C1F    | orange200        | orange1000      | `active:bg-orange-300`   | `dark:active:bg-orange-900`   | Pressed state of color.background.accent.orange.subtle.                                                                                 |
| `background.accent.orange.subtler`           | #FCE4A6     | #693200    | orange200        | orange900       | `bg-orange-200`          | `dark:bg-orange-800`          | Use for orange backgrounds when there is no meaning tied to the color, such as colored tags.                                            |
| `background.accent.orange.subtler.hovered`   | #FBC828     | #9E4C00    | orange300        | orange800       | `hover:bg-orange-300`    | `dark:hover:bg-orange-700`    | Hovered state of color.background.accent.orange.subtler.                                                                                |
| `background.accent.orange.subtler.pressed`   | #FCA700     | #BD5B00    | orange400        | orange700       | `active:bg-orange-500`   | `dark:active:bg-orange-600`   | Pressed state of color.background.accent.orange.subtler.                                                                                |
| `background.accent.orange.subtlest`          | #FFF5DB     | #3A2C1F    | orange100        | orange1000      | `bg-orange-50`           | `dark:bg-orange-900`          | Use for orange backgrounds when there is no meaning tied to the color. Reserved for when you only want a hint of color.                 |
| `background.accent.orange.subtlest.hovered`  | #FCE4A6     | #693200    | orange200        | orange900       | `hover:bg-orange-100`    | `dark:hover:bg-orange-800`    | Hovered state of color.background.accent.orange.subtlest.                                                                               |
| `background.accent.orange.subtlest.pressed`  | #FBC828     | #9E4C00    | orange300        | orange800       | `active:bg-orange-200`   | `dark:active:bg-orange-700`   | Pressed state of color.background.accent.orange.subtlest.                                                                               |
| `background.accent.purple.bolder`            | #964AC0     | #C97CF4    | purple700        | purple400       | `bg-purple-600`          | `dark:bg-purple-400`          | Use for purple backgrounds when there is no meaning tied to the color, and the background needs to pass min 3:1 contrast requirements.  |
| `background.accent.purple.bolder.hovered`    | #803FA5     | #D8A0F7    | purple800        | purple300       | `hover:bg-purple-700`    | `dark:hover:bg-purple-300`    | Hovered state of color.background.accent.purple.bolder.                                                                                 |
| `background.accent.purple.bolder.pressed`    | #48245D     | #EED7FC    | purple900        | purple200       | `active:bg-purple-800`   | `dark:active:bg-purple-200`   | Pressed state of color.background.accent.purple.bolder.                                                                                 |
| `background.accent.purple.subtle`            | #C97CF4     | #803FA5    | purple400        | purple800       | `bg-purple-500`          | `dark:bg-purple-700`          | Use for vibrant purple backgrounds when there is no meaning tied to the color, such as colored tags.                                    |
| `background.accent.purple.subtle.hovered`    | #D8A0F7     | #48245D    | purple300        | purple900       | `hover:bg-purple-400`    | `dark:hover:bg-purple-800`    | Hovered state of color.background.accent.purple.subtle.                                                                                 |
| `background.accent.purple.subtle.pressed`    | #EED7FC     | #35243F    | purple200        | purple1000      | `active:bg-purple-300`   | `dark:active:bg-purple-900`   | Pressed state of color.background.accent.purple.subtle.                                                                                 |
| `background.accent.purple.subtler`           | #EED7FC     | #48245D    | purple200        | purple900       | `bg-purple-200`          | `dark:bg-purple-800`          | Use for purple backgrounds when there is no meaning tied to the color, such as colored tags.                                            |
| `background.accent.purple.subtler.hovered`   | #D8A0F7     | #803FA5    | purple300        | purple800       | `hover:bg-purple-300`    | `dark:hover:bg-purple-700`    | Hovered state of color.background.accent.purple.subtler.                                                                                |
| `background.accent.purple.subtler.pressed`   | #C97CF4     | #964AC0    | purple400        | purple700       | `active:bg-purple-500`   | `dark:active:bg-purple-600`   | Pressed state of color.background.accent.purple.subtler.                                                                                |
| `background.accent.purple.subtlest`          | #F8EEFE     | #35243F    | purple100        | purple1000      | `bg-purple-50`           | `dark:bg-purple-900`          | Use for purple backgrounds when there is no meaning tied to the color. Reserved for when you only want a hint of color.                 |
| `background.accent.purple.subtlest.hovered`  | #EED7FC     | #48245D    | purple200        | purple900       | `hover:bg-purple-100`    | `dark:hover:bg-purple-800`    | Hovered state of color.background.accent.purple.subtlest.                                                                               |
| `background.accent.purple.subtlest.pressed`  | #D8A0F7     | #803FA5    | purple300        | purple800       | `active:bg-purple-200`   | `dark:active:bg-purple-700`   | Pressed state of color.background.accent.purple.subtlest.                                                                               |
| `background.accent.red.bolder`               | #C9372C     | #F87168    | red700           | red400          | `bg-red-600`             | `dark:bg-red-400`             | Use for red backgrounds when there is no meaning tied to the color, and the background needs to pass min 3:1 contrast requirements.     |
| `background.accent.red.bolder.hovered`       | #AE2E24     | #FD9891    | red800           | red300          | `hover:bg-red-700`       | `dark:hover:bg-red-300`       | Hovered state of color.background.accent.red.bolder.                                                                                    |
| `background.accent.red.bolder.pressed`       | #5D1F1A     | #FFD5D2    | red900           | red200          | `active:bg-red-800`      | `dark:active:bg-red-200`      | Pressed state of color.background.accent.red.bolder.                                                                                    |
| `background.accent.red.subtle`               | #F87168     | #AE2E24    | red400           | red800          | `bg-red-500`             | `dark:bg-red-700`             | Use for vibrant red backgrounds when there is no meaning tied to the color, such as colored tags.                                       |
| `background.accent.red.subtle.hovered`       | #FD9891     | #5D1F1A    | red300           | red900          | `hover:bg-red-400`       | `dark:hover:bg-red-800`       | Hovered state of color.background.accent.red.subtle.                                                                                    |
| `background.accent.red.subtle.pressed`       | #FFD5D2     | #42221F    | red200           | red1000         | `active:bg-red-300`      | `dark:active:bg-red-900`      | Pressed state of color.background.accent.red.subtle.                                                                                    |
| `background.accent.red.subtler`              | #FFD5D2     | #5D1F1A    | red200           | red900          | `bg-red-200`             | `dark:bg-red-800`             | Use for red backgrounds when there is no meaning tied to the color, such as colored tags.                                               |
| `background.accent.red.subtler.hovered`      | #FD9891     | #AE2E24    | red300           | red800          | `hover:bg-red-300`       | `dark:hover:bg-red-700`       | Hovered state of color.background.accent.red.subtler.                                                                                   |
| `background.accent.red.subtler.pressed`      | #F87168     | #C9372C    | red400           | red700          | `active:bg-red-500`      | `dark:active:bg-red-600`      | Pressed state of color.background.accent.red.subtler.                                                                                   |
| `background.accent.red.subtlest`             | #FFECEB     | #42221F    | red100           | red1000         | `bg-red-50`              | `dark:bg-red-900`             | Use for red backgrounds when there is no meaning tied to the color. Reserved for when you only want a hint of color.                    |
| `background.accent.red.subtlest.hovered`     | #FFD5D2     | #5D1F1A    | red200           | red900          | `hover:bg-red-100`       | `dark:hover:bg-red-800`       | Hovered state of color.background.accent.red.subtlest.                                                                                  |
| `background.accent.red.subtlest.pressed`     | #FD9891     | #AE2E24    | red300           | red800          | `active:bg-red-200`      | `dark:active:bg-red-700`      | Pressed state of color.background.accent.red.subtlest.                                                                                  |
| `background.accent.teal.bolder`              | #227D9B     | #6CC3E0    | teal700          | teal400         | `bg-teal-600`            | `dark:bg-teal-400`            | Use for teal backgrounds when there is no meaning tied to the color, and the background needs to pass min 3:1 contrast requirements.    |
| `background.accent.teal.bolder.hovered`      | #206A83     | #9DD9EE    | teal800          | teal300         | `hover:bg-teal-700`      | `dark:hover:bg-teal-300`      | Hovered state of color.background.accent.teal.bolder.                                                                                   |
| `background.accent.teal.bolder.pressed`      | #164555     | #C6EDFB    | teal900          | teal200         | `active:bg-teal-800`     | `dark:active:bg-teal-200`     | Pressed state of color.background.accent.teal.bolder.                                                                                   |
| `background.accent.teal.subtle`              | #6CC3E0     | #206A83    | teal400          | teal800         | `bg-teal-500`            | `dark:bg-teal-700`            | Use for vibrant teal backgrounds when there is no meaning tied to the color, such as colored tags.                                      |
| `background.accent.teal.subtle.hovered`      | #9DD9EE     | #164555    | teal300          | teal900         | `hover:bg-teal-400`      | `dark:hover:bg-teal-800`      | Hovered state of color.background.accent.teal.subtle.                                                                                   |
| `background.accent.teal.subtle.pressed`      | #C6EDFB     | #1E3137    | teal200          | teal1000        | `active:bg-teal-300`     | `dark:active:bg-teal-900`     | Pressed state of color.background.accent.teal.subtle.                                                                                   |
| `background.accent.teal.subtler`             | #C6EDFB     | #164555    | teal200          | teal900         | `bg-teal-200`            | `dark:bg-teal-800`            | Use for teal backgrounds when there is no meaning tied to the color, such as colored tags.                                              |
| `background.accent.teal.subtler.hovered`     | #9DD9EE     | #206A83    | teal300          | teal800         | `hover:bg-teal-300`      | `dark:hover:bg-teal-700`      | Hovered state of color.background.accent.teal.subtler.                                                                                  |
| `background.accent.teal.subtler.pressed`     | #6CC3E0     | #227D9B    | teal400          | teal700         | `active:bg-teal-500`     | `dark:active:bg-teal-600`     | Pressed state of color.background.accent.teal.subtler.                                                                                  |
| `background.accent.teal.subtlest`            | #E7F9FF     | #1E3137    | teal100          | teal1000        | `bg-teal-50`             | `dark:bg-teal-900`            | Use for teal backgrounds when there is no meaning tied to the color. Reserved for when you only want a hint of color.                   |
| `background.accent.teal.subtlest.hovered`    | #C6EDFB     | #164555    | teal200          | teal900         | `hover:bg-teal-100`      | `dark:hover:bg-teal-800`      | Hovered state of color.background.accent.teal.subtlest.                                                                                 |
| `background.accent.teal.subtlest.pressed`    | #9DD9EE     | #206A83    | teal300          | teal800         | `active:bg-teal-200`     | `dark:active:bg-teal-700`     | Pressed state of color.background.accent.teal.subtlest.                                                                                 |
| `background.accent.yellow.bolder`            | #946F00     | #DDB30E    | yellow700        | yellow400       | `bg-yellow-600`          | `dark:bg-yellow-400`          | Use for yellow backgrounds when there is no meaning tied to the color, and the background needs to pass min 3:1 contrast requirements.  |
| `background.accent.yellow.bolder.hovered`    | #7F5F01     | #EED12B    | yellow800        | yellow300       | `hover:bg-yellow-700`    | `dark:hover:bg-yellow-300`    | Hovered state of color.background.accent.yellow.bolder.                                                                                 |
| `background.accent.yellow.bolder.pressed`    | #533F04     | #F5E989    | yellow900        | yellow200       | `active:bg-yellow-800`   | `dark:active:bg-yellow-200`   | Pressed state of color.background.accent.yellow.bolder.                                                                                 |
| `background.accent.yellow.subtle`            | #EED12B     | #7F5F01    | yellow300        | yellow800       | `bg-yellow-500`          | `dark:bg-yellow-700`          | Use for vibrant yellow backgrounds when there is no meaning tied to the color, such as colored tags.                                    |
| `background.accent.yellow.subtle.hovered`    | #DDB30E     | #533F04    | yellow400        | yellow900       | `hover:bg-yellow-400`    | `dark:hover:bg-yellow-800`    | Hovered state of color.background.accent.yellow.subtle.                                                                                 |
| `background.accent.yellow.subtle.pressed`    | #CF9F02     | #332E1B    | yellow500        | yellow1000      | `active:bg-yellow-300`   | `dark:active:bg-yellow-900`   | Pressed state of color.background.accent.yellow.subtle.                                                                                 |
| `background.accent.yellow.subtler`           | #F5E989     | #533F04    | yellow200        | yellow900       | `bg-yellow-200`          | `dark:bg-yellow-800`          | Use for yellow backgrounds when there is no meaning tied to the color, such as colored tags.                                            |
| `background.accent.yellow.subtler.hovered`   | #EED12B     | #7F5F01    | yellow300        | yellow800       | `hover:bg-yellow-300`    | `dark:hover:bg-yellow-700`    | Hovered state of color.background.accent.yellow.subtler.                                                                                |
| `background.accent.yellow.subtler.pressed`   | #DDB30E     | #946F00    | yellow400        | yellow700       | `active:bg-yellow-500`   | `dark:active:bg-yellow-600`   | Pressed state of color.background.accent.yellow.subtler.                                                                                |
| `background.accent.yellow.subtlest`          | #FEF7C8     | #332E1B    | yellow100        | yellow1000      | `bg-yellow-50`           | `dark:bg-yellow-900`          | Use for yellow backgrounds when there is no meaning tied to the color. Reserved for when you only want a hint of color.                 |
| `background.accent.yellow.subtlest.hovered`  | #F5E989     | #533F04    | yellow200        | yellow900       | `hover:bg-yellow-100`    | `dark:hover:bg-yellow-800`    | Hovered state of color.background.accent.yellow.subtlest.                                                                               |
| `background.accent.yellow.subtlest.pressed`  | #EED12B     | #7F5F01    | yellow300        | yellow800       | `active:bg-yellow-200`   | `dark:active:bg-yellow-700`   | Pressed state of color.background.accent.yellow.subtlest.                                                                               |
| `background.brand.bold`                      | #1868DB     | #669DF1    | blue700          | blue400         | `bg-blue-600`            | `dark:bg-blue-500`            | Use for the background of elements used to reinforce our brand, but with more emphasis.                                                 |
| `background.brand.bold.hovered`              | #1558BC     | #8FB8F6    | blue800          | blue300         | `hover:bg-blue-700`      | `dark:hover:bg-blue-400`      | Hovered state of color.background.brand.bold.                                                                                           |
| `background.brand.bold.pressed`              | #123263     | #CFE1FD    | blue900          | blue200         | `active:bg-blue-800`     | `dark:active:bg-blue-600`     | Pressed state of color.background.brand.bold.                                                                                           |
| `background.brand.boldest`                   | #1C2B42     | #E9F2FE    | blue1000         | blue100         | `bg-blue-900`            | `dark:bg-blue-50`             | Use for the background of elements used to reinforce our brand, that need to stand out a lot.                                           |
| `background.brand.boldest.hovered`           | #123263     | #CFE1FD    | blue900          | blue200         | `hover:bg-blue-800`      | `dark:hover:bg-blue-100`      | Hovered state of color.background.brand.boldest.                                                                                        |
| `background.brand.boldest.pressed`           | #1558BC     | #8FB8F6    | blue800          | blue300         | `active:bg-blue-700`     | `dark:active:bg-blue-200`     | Pressed state of color.background.brand.boldest.                                                                                        |
| `background.brand.subtlest`                  | #E9F2FE     | #1C2B42    | blue100          | blue1000        | `bg-blue-50`             | `dark:bg-blue-900`            | Use for the background of elements used to reinforce our brand, but with less emphasis.                                                 |
| `background.brand.subtlest.hovered`          | #CFE1FD     | #123263    | blue200          | blue900         | `hover:bg-blue-100`      | `dark:hover:bg-blue-800`      | Hovered state of color.background.brand.subtlest.                                                                                       |
| `background.brand.subtlest.pressed`          | #8FB8F6     | #1558BC    | blue300          | blue800         | `active:bg-blue-200`     | `dark:active:bg-blue-700`     | Pressed state of color.background.brand.subtlest                                                                                        |
| `background.danger`                          | #FFECEB     | #42221F    | red100           | red1000         | `bg-red-50`              | `dark:bg-red-900`             | Use for backgrounds communicating critical information, such in error section messages.                                                 |
| `background.danger.bold`                     | #C9372C     | #F87168    | red700           | red400          | `bg-red-600`             | `dark:bg-red-400`             | A vibrant background option for communicating critical information, such as in danger buttons and error banners.                        |
| `background.danger.bold.hovered`             | #AE2E24     | #FD9891    | red800           | red300          | `hover:bg-red-700`       | `dark:hover:bg-red-400`       | Hovered state of color.background.danger.bold                                                                                           |
| `background.danger.bold.pressed`             | #5D1F1A     | #FFD5D2    | red900           | red200          | `active:bg-red-800`      | `dark:active:bg-red-400`      | Pressed state of color.background.danger.bold                                                                                           |
| `background.danger.hovered`                  | #FFD5D2     | #5D1F1A    | red200           | red900          | `hover:bg-red-100`       | `dark:hover:bg-red-900`       | Hovered state for color.background.danger                                                                                               |
| `background.danger.pressed`                  | #FD9891     | #AE2E24    | red300           | red800          | `active:bg-red-200`      | `dark:active:bg-red-900`      | Pressed state for color.background.danger                                                                                               |
| `background.disabled`                        | #1E1F2108   | #BCD6F00A  | neutral1100a     | darkneutral100a | `bg-slate-800/3`         | `dark:bg-slate-200/3`         | Use for backgrounds of elements in a disabled state.                                                                                    |
| `background.discovery`                       | #F8EEFE     | #35243F    | purple100        | purple1000      | `bg-purple-50`           | `dark:bg-purple-900`          | Use for backgrounds communicating change or something new, such as in discovery section messages.                                       |
| `background.discovery.bold`                  | #964AC0     | #C97CF4    | purple700        | purple400       | `bg-purple-600`          | `dark:bg-purple-400`          | A vibrant background option communicating change or something new, such as in onboarding spotlights.                                    |
| `background.discovery.bold.hovered`          | #803FA5     | #D8A0F7    | purple800        | purple300       | `hover:bg-purple-700`    | `dark:hover:bg-purple-400`    | Hovered state of color.background.discovery.bold                                                                                        |
| `background.discovery.bold.pressed`          | #48245D     | #EED7FC    | purple900        | purple200       | `active:bg-purple-800`   | `dark:active:bg-purple-400`   | Pressed state of color.background.discovery.bold                                                                                        |
| `background.discovery.hovered`               | #EED7FC     | #48245D    | purple200        | purple900       | `hover:bg-purple-100`    | `dark:hover:bg-purple-900`    | Hover state for color.background.discovery                                                                                              |
| `background.discovery.pressed`               | #D8A0F7     | #803FA5    | purple300        | purple800       | `active:bg-purple-200`   | `dark:active:bg-purple-900`   | Pressed state for color.background.discovery                                                                                            |
| `background.information`                     | #E9F2FE     | #1C2B42    | blue100          | blue1000        | `bg-blue-50`             | `dark:bg-blue-900`            | Use for backgrounds communicating information or something in-progress, such as in information section messages.                        |
| `background.information.bold`                | #1868DB     | #669DF1    | blue700          | blue400         | `bg-blue-600`            | `dark:bg-blue-400`            | A vibrant background option for communicating information or something in-progress.                                                     |
| `background.information.bold.hovered`        | #1558BC     | #8FB8F6    | blue800          | blue300         | `hover:bg-blue-700`      | `dark:hover:bg-blue-400`      | Hovered state of color.background.information.bold                                                                                      |
| `background.information.bold.pressed`        | #123263     | #CFE1FD    | blue900          | blue200         | `active:bg-blue-800`     | `dark:active:bg-blue-600`     | Pressed state of color.background.information.bold                                                                                      |
| `background.information.hovered`             | #CFE1FD     | #123263    | blue200          | blue900         | `hover:bg-blue-100`      | `dark:hover:bg-blue-800`      | Hovered state of color.background.information                                                                                           |
| `background.information.pressed`             | #8FB8F6     | #1558BC    | blue300          | blue800         | `active:bg-blue-200`     | `dark:active:bg-blue-700`     | Pressed state of color.background.information                                                                                           |
| `background.input`                           | #FFFFFF     | #242528    | neutral0         | darkneutral200  | `bg-white`               | `dark:bg-slate-900`           | Use for background of form UI elements, such as text fields, checkboxes, and radio buttons.                                             |
| `background.input.hovered`                   | #F8F8F8     | #2B2C2F    | neutral100       | darkneutral250  | `hover:bg-slate-50`      | `dark:hover:bg-slate-800`     | Hovered state for color.background.input                                                                                                |
| `background.input.pressed`                   | #FFFFFF     | #242528    | neutral0         | darkneutral200  | `active:bg-white`        | `dark:active:bg-slate-900`    | Pressed state for color.background.input                                                                                                |
| `background.inverse.subtle`                  | #00000029   | #FFFFFF29  | N/A              | N/A             | `bg-black/16`            | `dark:bg-white/16`            | Use for backgrounds of elements on a bold background, such as in the buttons on spotlight cards.                                        |
| `background.inverse.subtle.hovered`          | #0000003D   | #FFFFFF3D  | N/A              | N/A             | `hover:bg-black/24`      | `dark:hover:bg-white/24`      | Use for the hovered state of color.background.inverse.subtle                                                                            |
| `background.inverse.subtle.pressed`          | #00000052   | #FFFFFF52  | N/A              | N/A             | `active:bg-black/32`     | `dark:active:bg-white/32`     | Use for the pressed state of color.background.inverse.subtle                                                                            |
| `background.neutral`                         | #1E1F210F   | #A1BDD914  | neutral200a      | darkneutral200a | `bg-slate-800/6`         | `dark:bg-slate-200/8`         | The default background for neutral elements, such as default buttons.                                                                   |
| `background.neutral.bold`                    | #505258     | #A9ABAF    | neutral800       | darkneutral800  | `bg-slate-600`           | `dark:bg-slate-300`           | A vibrant background option for neutral UI elements, such as announcement banners.                                                      |
| `background.neutral.bold.hovered`            | #3B3D42     | #BFC1C4    | neutral900       | darkneutral900  | `hover:bg-slate-700`     | `dark:hover:bg-slate-200`     | Hovered state of color.background.neutral.bold                                                                                          |
| `background.neutral.bold.pressed`            | #292A2E     | #C7D1DB    | neutral1000      | darkneutral1000 | `active:bg-slate-800`    | `dark:active:bg-slate-100`    | Pressed state of color.background.neutral.bold                                                                                          |
| `background.neutral.hovered`                 | #1E1F2124   | #A6C5E229  | neutral300a      | darkneutral300a | `hover:bg-slate-800/14`  | `dark:hover:bg-slate-200/14`  | Hovered state for color.background.neutral                                                                                              |
| `background.neutral.pressed`                 | #1E1F214F   | #BFDBF847  | neutral400a      | darkneutral400a | `active:bg-slate-800/31` | `dark:active:bg-slate-200/28` | Pressed state for color.background.neutral                                                                                              |
| `background.neutral.subtle`                  | #00000000   | #00000000  | transparent      | transparent     | `bg-transparent`         | `dark:bg-transparent`         | Use for the background of elements that appear to have no background in a resting state, such as subtle buttons and menu items.         |
| `background.neutral.subtle.hovered`          | #1E1F210F   | #A1BDD914  | neutral200a      | darkneutral200a | `hover:bg-slate-800/6`   | `dark:hover:bg-slate-200/8`   | Hovered state for color.background.neutral.subtle                                                                                       |
| `background.neutral.subtle.pressed`          | #1E1F2124   | #A6C5E229  | neutral300a      | darkneutral300a | `active:bg-slate-800/14` | `dark:active:bg-slate-200/14` | Pressed state for color.background.neutral.subtle                                                                                       |
| `background.selected`                        | #E9F2FE     | #1C2B42    | blue100          | blue1000        | `bg-blue-50`             | `dark:bg-blue-900`            | Use for the background of elements in a selected state, such as in opened dropdown buttons.                                             |
| `background.selected.bold`                   | #1868DB     | #669DF1    | blue700          | blue400         | `bg-blue-600`            | `dark:bg-blue-400`            | Use for the backgrounds of elements in a selected state, such as checkboxes and radio buttons.                                          |
| `background.selected.bold.hovered`           | #1558BC     | #8FB8F6    | blue800          | blue300         | `hover:bg-blue-700`      | `dark:hover:bg-blue-400`      | Hovered state of color.background.selected.bold                                                                                         |
| `background.selected.bold.pressed`           | #123263     | #CFE1FD    | blue900          | blue200         | `active:bg-blue-800`     | `dark:active:bg-blue-600`     | Pressed state of color.background.selected.bold                                                                                         |
| `background.selected.hovered`                | #CFE1FD     | #123263    | blue200          | blue900         | `hover:bg-blue-100`      | `dark:hover:bg-blue-800`      | Hovered state for color.background.selected                                                                                             |
| `background.selected.pressed`                | #8FB8F6     | #1558BC    | blue300          | blue800         | `active:bg-blue-200`     | `dark:active:bg-blue-700`     | Pressed state for color.background.selected                                                                                             |
| `background.success`                         | #DCFFF1     | #1C3329    | green100         | green1000       | `bg-green-50`            | `dark:bg-green-900`           | Use for backgrounds communicating a favorable outcome, such as in success section messages.                                             |
| `background.success.bold`                    | #1F845A     | #4BCE97    | green700         | green400        | `bg-green-600`           | `dark:bg-green-400`           | A vibrant background option for communicating a favorable outcome, such as in checked toggles.                                          |
| `background.success.bold.hovered`            | #216E4E     | #7EE2B8    | green800         | green300        | `hover:bg-green-700`     | `dark:hover:bg-green-300`     | Hovered state of color.background.success.bold                                                                                          |
| `background.success.bold.pressed`            | #164B35     | #BAF3DB    | green900         | green200        | `active:bg-green-800`    | `dark:active:bg-green-200`    | Pressed state of color.background.success.bold                                                                                          |
| `background.success.hovered`                 | #BAF3DB     | #164B35    | green200         | green900        | `hover:bg-green-100`     | `dark:hover:bg-green-800`     | Hovered state for color.background.success                                                                                              |
| `background.success.pressed`                 | #7EE2B8     | #216E4E    | green300         | green800        | `active:bg-green-200`    | `dark:active:bg-green-700`    | Pressed state for color.background.success                                                                                              |
| `background.warning`                         | #FEF7C8     | #332E1B    | yellow100        | yellow1000      | `bg-yellow-50`           | `dark:bg-yellow-900`          | Use for backgrounds communicating caution, such as in warning section messages.                                                         |
| `background.warning.bold`                    | #EED12B     | #EED12B    | yellow300        | yellow300       | `bg-yellow-500`          | `dark:bg-yellow-500`          | A vibrant background option for communicating caution, such as in warning buttons and warning banners.                                  |
| `background.warning.bold.hovered`            | #DDB30E     | #DDB30E    | yellow400        | yellow400       | `hover:bg-yellow-600`    | `dark:hover:bg-yellow-600`    | Hovered state of color.background.warning.bold                                                                                          |
| `background.warning.bold.pressed`            | #CF9F02     | #CF9F02    | yellow500        | yellow500       | `active:bg-yellow-700`   | `dark:active:bg-yellow-700`   | Pressed state of color.background.warning.bold                                                                                          |
| `background.warning.hovered`                 | #F5E989     | #533F04    | yellow200        | yellow900       | `hover:bg-yellow-100`    | `dark:hover:bg-yellow-800`    | Hovered state for color.background.warning                                                                                              |
| `background.warning.pressed`                 | #EED12B     | #7F5F01    | yellow300        | yellow800       | `active:bg-yellow-200`   | `dark:active:bg-yellow-700`   | Pressed state for color.background.warning                                                                                              |

## Text Colors

| Token                        | Light Value | Dark Value | Light Base Token | Dark Base Token | Light Tailwind Class | Dark Tailwind Class      | Usage                                                                                                               |
| ---------------------------- | ----------- | ---------- | ---------------- | --------------- | -------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `text`                       | #292A2E     | #BFC1C4    | neutral1000      | darkneutral900  | `text-slate-800`     | `dark:text-slate-200`    | Use for primary text, such as body copy, sentence case headers, and buttons.                                        |
| `text.accent.blue`           | #1558BC     | #8FB8F6    | blue800          | blue300         | `text-blue-700`      | `dark:text-blue-400`     | Use for blue text on subtlest and subtler blue accent backgrounds when there is no meaning tied to the color.       |
| `text.accent.blue.bolder`    | #123263     | #CFE1FD    | blue900          | blue200         | `text-blue-800`      | `dark:text-blue-100`     | Use for blue text on subtle blue accent backgrounds when there is no meaning tied to the color.                     |
| `text.accent.gray`           | #505258     | #A9ABAF    | neutral800       | darkneutral800  | `text-slate-700`     | `dark:text-slate-300`    | Use for text on non-bold gray accent backgrounds, such as colored tags.                                             |
| `text.accent.gray.bolder`    | #1E1F21     | #DEE4EA    | neutral1100      | darkneutral1100 | `text-slate-800`     | `dark:text-slate-200`    | Use for text and icons on gray subtle accent backgrounds.                                                           |
| `text.accent.green`          | #216E4E     | #7EE2B8    | green800         | green300        | `text-green-700`     | `dark:text-green-300`    | Use for green text on subtlest and subtler green accent backgrounds when there is no meaning tied to the color.     |
| `text.accent.green.bolder`   | #164B35     | #BAF3DB    | green900         | green200        | `text-green-800`     | `dark:text-green-200`    | Use for green text on subtle green accent backgrounds when there is no meaning tied to the color.                   |
| `text.accent.lime`           | #4C6B1F     | #B3DF72    | lime800          | lime300         | `text-lime-700`      | `dark:text-lime-400`     | Use for lime text on subtlest and subtler lime accent backgrounds when there is no meaning tied to the color.       |
| `text.accent.lime.bolder`    | #37471F     | #D3F1A7    | lime900          | lime200         | `text-lime-800`      | `dark:text-lime-200`     | Use for lime text on subtle lime accent backgrounds when there is no meaning tied to the color.                     |
| `text.accent.magenta`        | #943D73     | #F797D2    | magenta800       | magenta300      | `text-pink-700`      | `dark:text-pink-300`     | Use for magenta text on subtlest and subtler magenta accent backgrounds when there is no meaning tied to the color. |
| `text.accent.magenta.bolder` | #50253F     | #FDD0EC    | magenta900       | magenta200      | `text-pink-800`      | `dark:text-pink-200`     | Use for magenta text on subtle magenta accent backgrounds when there is no meaning tied to the color.               |
| `text.accent.orange`         | #9E4C00     | #FBC828    | orange800        | orange300       | `text-orange-700`    | `dark:text-orange-300`   | Use for orange text on subtlest and subtler orange accent backgrounds when there is no meaning tied to the color.   |
| `text.accent.orange.bolder`  | #693200     | #FCE4A6    | orange900        | orange200       | `text-orange-800`    | `dark:text-orange-200`   | Use for orange text on subtle orange accent backgrounds when there is no meaning tied to the color.                 |
| `text.accent.purple`         | #803FA5     | #D8A0F7    | purple800        | purple300       | `text-purple-700`    | `dark:text-purple-400`   | Use for purple text on subtlest and subtler purple accent backgrounds when there is no meaning tied to the color.   |
| `text.accent.purple.bolder`  | #48245D     | #EED7FC    | purple900        | purple200       | `text-purple-800`    | `dark:text-purple-200`   | Use for purple text on subtle purple accent backgrounds when there is no meaning tied to the color.                 |
| `text.accent.red`            | #AE2E24     | #FD9891    | red800           | red300          | `text-red-700`       | `dark:text-red-300`      | Use for red text on subtlest and subtler red accent backgrounds when there is no meaning tied to the color.         |
| `text.accent.red.bolder`     | #5D1F1A     | #FFD5D2    | red900           | red200          | `text-red-800`       | `dark:text-red-200`      | Use for red text on subtle red accent backgrounds when there is no meaning tied to the color.                       |
| `text.accent.teal`           | #206A83     | #9DD9EE    | teal800          | teal300         | `text-teal-700`      | `dark:text-teal-300`     | Use for teal text on subtlest and subtler teal accent backgrounds when there is no meaning tied to the color.       |
| `text.accent.teal.bolder`    | #164555     | #C6EDFB    | teal900          | teal200         | `text-teal-800`      | `dark:text-teal-200`     | Use for teal text on subtle teal accent backgrounds when there is no meaning tied to the color.                     |
| `text.accent.yellow`         | #7F5F01     | #EED12B    | yellow800        | yellow300       | `text-yellow-700`    | `dark:text-yellow-400`   | Use for yellow text on subtlest and subtler yellow accent backgrounds when there is no meaning tied to the color.   |
| `text.accent.yellow.bolder`  | #533F04     | #F5E989    | yellow900        | yellow200       | `text-yellow-800`    | `dark:text-yellow-200`   | Use for yellow text on subtle yellow accent backgrounds when there is no meaning tied to the color.                 |
| `text.brand`                 | #1868DB     | #669DF1    | blue700          | blue400         | `text-blue-600`      | `dark:text-blue-400`     | Use for text that reinforces our brand.                                                                             |
| `text.danger`                | #AE2E24     | #FD9891    | red800           | red300          | `text-red-600`       | `dark:text-red-400`      | Use for critical text, such as input field error messaging.                                                         |
| `text.disabled`              | #1E1F214F   | #BFDBF847  | neutral400a      | darkneutral400a | `text-slate-800/31`  | `dark:text-slate-400/31` | Use for text in a disabled state.                                                                                   |
| `text.discovery`             | #803FA5     | #D8A0F7    | purple800        | purple300       | `text-purple-600`    | `dark:text-purple-400`   | Use for text to emphasize change or something new, such as in new lozenges.                                         |
| `text.information`           | #1558BC     | #8FB8F6    | blue800          | blue300         | `text-blue-600`      | `dark:text-blue-400`     | Use for informative text or to communicate something is in progress, such as in-progress lozenges.                  |
| `text.inverse`               | #FFFFFF     | #1F1F21    | neutral0         | darkneutral100  | `text-white`         | `dark:text-slate-900`    | Use for text on bold backgrounds.                                                                                   |
| `text.selected`              | #1868DB     | #669DF1    | blue700          | blue400         | `text-blue-600`      | `dark:text-blue-400`     | Use for text in selected or opened states, such as tabs and dropdown buttons.                                       |
| `text.subtle`                | #505258     | #A9ABAF    | neutral800       | darkneutral800  | `text-slate-600`     | `dark:text-slate-300`    | Use for secondary text, such as navigation, subtle button links, input field labels, and all caps subheadings.      |
| `text.subtlest`              | #6B6E76     | #96999E    | neutral700       | darkneutral700  | `text-slate-500`     | `dark:text-slate-400`    | Use for tertiary text, such as meta-data, breadcrumbs, input field placeholder and helper text.                     |
| `text.success`               | #216E4E     | #7EE2B8    | green800         | green300        | `text-green-600`     | `dark:text-green-400`    | Use for text to communicate a favorable outcome, such as input field success messaging.                             |
| `text.warning`               | #9E4C00     | #EED12B    | orange800        | yellow300       | `text-orange-600`    | `dark:text-yellow-400`   | Use for text to emphasize caution, such as in moved lozenges.                                                       |
| `text.warning.inverse`       | #292A2E     | #1F1F21    | neutral1000      | darkneutral100  | `text-slate-800`     | `dark:text-slate-900`    | Use for text when on bold warning backgrounds.                                                                      |

## Icon Colors

| Token                  | Light Value | Dark Value | Light Base Token | Dark Base Token | Light Tailwind Class | Dark Tailwind Class      | Usage                                                                                                              |
| ---------------------- | ----------- | ---------- | ---------------- | --------------- | -------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `icon`                 | #505258     | #A9ABAF    | neutral800       | darkneutral800  | `text-slate-600`     | `dark:text-slate-300`    | Use for icon-only buttons, or icons paired with color.text                                                         |
| `icon.accent.blue`     | #357DE8     | #4688EC    | blue600          | blue500         | `text-blue-500`      | `dark:text-blue-500`     | Use for blue icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.    |
| `icon.accent.gray`     | #7D818A     | #7E8188    | neutral600       | darkneutral600  | `text-slate-500`     | `dark:text-slate-500`    | Use for icons on non-bold gray accent backgrounds, such as file type icons.                                        |
| `icon.accent.green`    | #22A06B     | #2ABB7F    | green600         | green500        | `text-green-600`     | `dark:text-green-600`    | Use for green icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.   |
| `icon.accent.lime`     | #6A9A23     | #82B536    | lime600          | lime500         | `text-lime-600`      | `dark:text-lime-600`     | Use for lime icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.    |
| `icon.accent.magenta`  | #CD519D     | #DA62AC    | magenta600       | magenta500      | `text-pink-500`      | `dark:text-pink-500`     | Use for magenta icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons. |
| `icon.accent.orange`   | #E06C00     | #F68909    | orange600        | orange500       | `text-orange-600`    | `dark:text-orange-600`   | Use for orange icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.  |
| `icon.accent.purple`   | #AF59E1     | #BF63F3    | purple600        | purple500       | `text-purple-500`    | `dark:text-purple-500`   | Use for purple icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.  |
| `icon.accent.red`      | #C9372C     | #E2483D    | red700           | red600          | `text-red-600`       | `dark:text-red-600`      | Use for red icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.     |
| `icon.accent.teal`     | #2898BD     | #42B2D7    | teal600          | teal500         | `text-teal-600`      | `dark:text-teal-600`     | Use for teal icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.    |
| `icon.accent.yellow`   | #B38600     | #EED12B    | yellow600        | yellow300       | `text-yellow-600`    | `dark:text-yellow-600`   | Use for yellow icons on non-bold backgrounds when there is no meaning tied to the color, such as file type icons.  |
| `icon.brand`           | #1868DB     | #669DF1    | blue700          | blue400         | `text-blue-600`      | `dark:text-blue-400`     | Use for icons that reinforce our brand.                                                                            |
| `icon.danger`          | #C9372C     | #F15B50    | red700           | red500          | `text-red-600`       | `dark:text-red-500`      | Use for icons communicating critical information, such as those used in error handing.                             |
| `icon.disabled`        | #1E1F214F   | #BFDBF847  | neutral400a      | darkneutral400a | `text-slate-800/31`  | `dark:text-slate-400/31` | Use for icons in a disabled state.                                                                                 |
| `icon.discovery`       | #AF59E1     | #BF63F3    | purple600        | purple500       | `text-purple-500`    | `dark:text-purple-500`   | Use for icons communicating change or something new, such as discovery section messages.                           |
| `icon.information`     | #357DE8     | #4688EC    | blue600          | blue500         | `text-blue-500`      | `dark:text-blue-500`     | Use for icons communicating information or something in-progress, such as information section messages.            |
| `icon.inverse`         | #FFFFFF     | #1F1F21    | neutral0         | darkneutral100  | `text-white`         | `dark:text-slate-900`    | Use for icons on bold backgrounds.                                                                                 |
| `icon.selected`        | #1868DB     | #669DF1    | blue700          | blue400         | `text-blue-600`      | `dark:text-blue-400`     | Use for icons in selected or opened states, such as those used in dropdown buttons.                                |
| `icon.subtle`          | #6B6E76     | #96999E    | neutral700       | darkneutral700  | `text-slate-500`     | `dark:text-slate-400`    | Use for icons paired with color.text.subtle                                                                        |
| `icon.subtlest`        | #6B6E76     | #96999E    | neutral700       | darkneutral700  | `text-slate-500`     | `dark:text-slate-400`    | Use for icons paired with color.text.subtlest                                                                      |
| `icon.success`         | #22A06B     | #2ABB7F    | green600         | green500        | `text-green-600`     | `dark:text-green-600`    | Use for icons communicating a favorable outcome, such as those used in success section messaged.                   |
| `icon.warning`         | #E06C00     | #EED12B    | orange600        | yellow300       | `text-orange-600`    | `dark:text-yellow-400`   | Use for icons communicating caution, such as those used in warning section messages.                               |
| `icon.warning.inverse` | #292A2E     | #1F1F21    | neutral1000      | darkneutral100  | `text-slate-800`     | `dark:text-slate-900`    | Use for icons when on bold warning backgrounds.                                                                    |

## Border Colors

| Token                   | Light Value | Dark Value | Light Base Token | Dark Base Token | Light Tailwind Class  | Dark Tailwind Class        | Usage                                                                                                          |
| ----------------------- | ----------- | ---------- | ---------------- | --------------- | --------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `border`                | #1E1F2124   | #A6C5E229  | neutral300a      | darkneutral300a | `border-slate-800/14` | `dark:border-slate-200/8`  | Use to visually group or separate UI elements, such as flat cards or side panel dividers.                      |
| `border.accent.blue`    | #357DE8     | #4688EC    | blue600          | blue500         | `border-blue-500`     | `dark:border-blue-500`     | Use for blue borders on non-bold backgrounds when there is no meaning tied to the color.                       |
| `border.accent.gray`    | #7D818A     | #7E8188    | neutral600       | darkneutral600  | `border-slate-500`    | `dark:border-slate-500`    | Use for borders on non-bold gray accent backgrounds.                                                           |
| `border.accent.green`   | #22A06B     | #2ABB7F    | green600         | green500        | `border-green-600`    | `dark:border-green-600`    | Use for green borders on non-bold backgrounds when there is no meaning tied to the color.                      |
| `border.accent.lime`    | #6A9A23     | #82B536    | lime600          | lime500         | `border-lime-600`     | `dark:border-lime-600`     | Use for lime borders on non-bold backgrounds when there is no meaning tied to the color.                       |
| `border.accent.magenta` | #CD519D     | #DA62AC    | magenta600       | magenta500      | `border-pink-500`     | `dark:border-pink-500`     | Use for magenta borders on non-bold backgrounds when there is no meaning tied to the color.                    |
| `border.accent.orange`  | #E06C00     | #F68909    | orange600        | orange500       | `border-orange-600`   | `dark:border-orange-600`   | Use for orange borders on non-bold backgrounds when there is no meaning tied to the color.                     |
| `border.accent.purple`  | #AF59E1     | #BF63F3    | purple600        | purple500       | `border-purple-500`   | `dark:border-purple-500`   | Use for purple borders on non-bold backgrounds when there is no meaning tied to the color.                     |
| `border.accent.red`     | #E2483D     | #F15B50    | red600           | red500          | `border-red-600`      | `dark:border-red-600`      | Use for red borders on non-bold backgrounds when there is no meaning tied to the color.                        |
| `border.accent.teal`    | #2898BD     | #42B2D7    | teal600          | teal500         | `border-teal-600`     | `dark:border-teal-600`     | Use for teal borders on non-bold backgrounds when there is no meaning tied to the color.                       |
| `border.accent.yellow`  | #B38600     | #CF9F02    | yellow600        | yellow500       | `border-yellow-600`   | `dark:border-yellow-600`   | Use for yellow borders on non-bold backgrounds when there is no meaning tied to the color.                     |
| `border.bold`           | #7D818A     | #7E8188    | neutral600       | darkneutral600  | `border-slate-800/25` | `dark:border-slate-200/25` | A neutral border option that passes min 3:1 contrast ratios.                                                   |
| `border.brand`          | #1868DB     | #669DF1    | blue700          | blue400         | `border-blue-600`     | `dark:border-blue-400`     | Use for borders or visual indicators of elements that reinforce our brand, such as logos or primary buttons.   |
| `border.danger`         | #E2483D     | #F15B50    | red600           | red500          | `border-red-600`      | `dark:border-red-500`      | Use for borders communicating critical information, such as the borders on invalid text fields.                |
| `border.disabled`       | #1E1F210F   | #A1BDD914  | neutral200a      | darkneutral200a | `border-slate-800/6`  | `dark:border-slate-200/5`  | Use for borders of elements in a disabled state.                                                               |
| `border.discovery`      | #AF59E1     | #BF63F3    | purple600        | purple500       | `border-purple-600`   | `dark:border-purple-400`   | Use for borders communicating change or something new, such as the borders in onboarding spotlights.           |
| `border.focused`        | #4688EC     | #8FB8F6    | blue500          | blue300         | `border-blue-600`     | `dark:border-blue-400`     | Use for focus rings of elements in a focus state.                                                              |
| `border.information`    | #357DE8     | #4688EC    | blue600          | blue500         | `border-blue-600`     | `dark:border-blue-400`     | Use for borders communicating information or something in-progress.                                            |
| `border.input`          | #8C8F97     | #7E8188    | neutral500       | darkneutral600  | `border-slate-800/14` | `dark:border-slate-200/8`  | Use for borders of form UI elements, such as text fields, checkboxes, and radio buttons.                       |
| `border.inverse`        | #FFFFFF     | #18191A    | neutral0         | darkneutral0    | `border-white`        | `dark:border-slate-900`    | Use for borders on bold backgrounds.                                                                           |
| `border.selected`       | #1868DB     | #669DF1    | blue700          | blue400         | `border-blue-600`     | `dark:border-blue-400`     | Use for borders or visual indicators of elements in a selected or opened state, such as in tabs or menu items. |
| `border.success`        | #22A06B     | #2ABB7F    | green600         | green500        | `border-green-600`    | `dark:border-green-400`    | Use for borders communicating a favorable outcome, such as the borders on validated text fields.               |
| `border.warning`        | #E06C00     | #CF9F02    | orange600        | yellow500       | `border-orange-600`   | `dark:border-yellow-500`   | Use for borders communicating caution.                                                                         |

## Chart Colors

| Token                            | Light Value | Dark Value | Light Base Token | Dark Base Token | Light Tailwind Class    | Dark Tailwind Class          | Usage                                                                           |
| -------------------------------- | ----------- | ---------- | ---------------- | --------------- | ----------------------- | ---------------------------- | ------------------------------------------------------------------------------- | -------------- |
| `chart.blue.bold`                | #4688EC     | #357DE8    | blue500          | blue600         | `text-blue-500`         | `dark:text-blue-600`         | For data visualisation only.                                                    |
| `chart.blue.bold.hovered`        | #357DE8     | #4688EC    | blue600          | blue500         | `hover:text-blue-600`   | `dark:hover:text-blue-500`   | Hovered state of color.chart.blue.bold.                                         |
| `chart.blue.bolder`              | #357DE8     | #4688EC    | blue600          | blue500         | `text-blue-600`         | `dark:text-blue-500`         | For data visualisation only.                                                    |
| `chart.blue.bolder.hovered`      | #1868DB     | #669DF1    | blue700          | blue400         | `hover:text-blue-700`   | `dark:hover:text-blue-400`   | Hovered state of color.chart.blue.bolder.                                       |
| `chart.blue.boldest`             | #1558BC     | #8FB8F6    | blue800          | blue300         | `text-blue-700`         | `dark:text-blue-400`         | For data visualisation only.                                                    |
| `chart.blue.boldest.hovered`     | #123263     | #CFE1FD    | blue900          | blue200         | `hover:text-blue-800`   | `dark:hover:text-blue-100`   | Hovered state of color.chart.blue.boldest.                                      |
| `chart.brand`                    | #357DE8     | #4688EC    | blue600          | blue500         | `text-blue-600`         | `dark:text-blue-500`         | Our primary color for data visualisation. Use when only one color is required.  |
| `chart.brand.hovered`            | #1868DB     | #669DF1    | blue700          | blue400         | `hover:text-blue-700`   | `dark:hover:text-blue-400`   | Hovered state of color.chart.brand.                                             |
| `chart.categorical.1`            | #2898BD     | #2898BD    | teal600          | teal600         | `text-teal-600`         | `dark:text-teal-600`         | For data visualisation only. Follow numbered sequence.                          |
| `chart.categorical.1.hovered`    | #227D9B     | #42B2D7    | teal700          | teal500         | `hover:text-teal-700`   | `dark:hover:text-teal-700`   | Hovered state of color.chart.categorical.1.                                     |
| `chart.categorical.2`            | #803FA5     | #D8A0F7    | purple800        | purple300       | `text-purple-600`       | `dark:text-purple-400`       | For data visualisation only. Follow numbered sequence.                          |
| `chart.categorical.2.hovered`    | #48245D     | #EED7FC    | purple900        | purple200       | `hover:text-purple-700` | `dark:hover:text-purple-100` | Hovered state of color.chart.categorical.2.                                     |
| `chart.categorical.3`            | #E06C00     | #E06C00    | orange600        | orange600       | `text-orange-600`       | `dark:text-orange-600`       | For data visualisation only. Follow numbered sequence.                          |
| `chart.categorical.3.hovered`    | #BD5B00     | #F68909    | orange700        | orange500       | `hover:text-orange-700` | `dark:hover:text-orange-700` | Hovered state of color.chart.categorical.3.                                     |
| `chart.categorical.4`            | #943D73     | #F797D2    | magenta800       | magenta300      | `text-pink-700`         | `dark:text-pink-400`         | For data visualisation only. Follow numbered sequence.                          |
| `chart.categorical.4.hovered`    | #50253F     | #FDD0EC    | magenta900       | magenta200      | `hover:text-pink-800`   | `dark:hover:text-pink-100`   | Hovered state of color.chart.categorical.4.                                     |
| `chart.categorical.5`            | #123263     | #CFE1FD    | blue900          | blue200         | `text-blue-800`         | `dark:text-blue-100`         | For data visualisation only. Follow numbered sequence.                          |
| `chart.categorical.5.hovered`    | #1C2B42     | #E9F2FE    | blue1000         | blue100         | `hover:text-blue-900`   | `dark:hover:text-blue-50`    | Hovered state of color.chart.categorical.5.                                     |
| `chart.categorical.6`            | #BF63F3     | #AF59E1    | purple500        | purple600       | `text-purple-500`       | `dark:text-purple-600`       | For data visualisation only. Follow numbered sequence.                          |
| `chart.categorical.6.hovered`    | #AF59E1     | #BF63F3    | purple600        | purple500       | `hover:text-purple-600` | `dark:hover:text-purple-500` | Hovered state of color.chart.categorical.6.                                     |
| `chart.categorical.7`            | #50253F     | #FDD0EC    | magenta900       | magenta200      | `text-pink-800`         | `dark:text-pink-100`         | For data visualisation only. Follow numbered sequence.                          |
| `chart.categorical.7.hovered`    | #3D2232     | #FFECF8    | magenta1000      | magenta100      | `hover:text-pink-900`   | `dark:hover:text-pink-50`    | Hovered state of color.chart.categorical.7.                                     |
| `chart.categorical.8`            | #9E4C00     | #FBC828    | orange800        | orange300       | `text-orange-700`       | `dark:text-orange-300`       | For data visualisation only. Follow numbered sequence.                          |
| `chart.categorical.8.hovered`    | #693200     | #FCE4A6    | orange900        | orange200       | `hover:text-orange-800` | `dark:hover:text-orange-200` | Hovered state of color.chart.categorical.8.                                     |
| `chart.danger`                   | #F15B50     | #E2483D    | red500           | red600          | `text-red-500`          | `dark:text-red-500`          | For data visualisation communicating negative information, such as 'off track'. |
| `chart.danger.bold`              | #AE2E24     | #FD9891    | red800           | red300          | `text-red-700`          | `dark:text-red-700`          | A stronger emphasis option of color.chart.danger.                               |
| `chart.danger.bold.hovered`      | #5D1F1A     | #FFD5D2    | red900           | red200          | `hover:text-red-800`    | `dark:hover:text-red-800`    | Hovered state of color.chart.danger.bold.                                       |
| `chart.danger.hovered`           | #E2483D     | #F15B50    | red600           | red500          | `hover:text-red-600`    | `dark:hover:text-red-600`    | Hovered state of color.chart.danger.                                            |
| `chart.discovery`                | #BF63F3     | #AF59E1    | purple500        | purple600       | `text-purple-500`       | `dark:text-purple-500`       | For data visualisation communicating 'new' statuses.                            |
| `chart.discovery.bold`           | #803FA5     | #D8A0F7    | purple800        | purple300       | `text-purple-700`       | `dark:text-purple-700`       | A stronger emphasis option of color.chart.discovery.                            |
| `chart.discovery.bold.hovered`   | #48245D     | #EED7FC    | purple900        | purple200       | `hover:text-purple-800` | `dark:hover:text-purple-800` | Hovered state of color.chart.discovery.bold.                                    |
| `chart.discovery.hovered`        | #AF59E1     | #BF63F3    | purple600        | purple500       | `hover:text-purple-600` | `dark:hover:text-purple-600` | Hovered state of color.chart.discovery.                                         |
| `chart.gray.bold`                | #8C8F97     | #7E8188    | neutral500       | darkneutral600  | `text-slate-500`        | `dark:text-slate-400`        | For data visualisation only.                                                    |
| `chart.gray.bold.hovered`        | #7D818A     | #96999E    | neutral600       | darkneutral700  | `hover:text-slate-600`  | `dark:hover:text-slate-300`  | Hovered state of color.chart.gray.bold.                                         |
| `chart.gray.bolder`              | #7D818A     | #96999E    | neutral600       | darkneutral700  | `text-slate-600`        | `dark:text-slate-300`        | For data visualisation only.                                                    |
| `chart.gray.bolder.hovered`      | #6B6E76     | #A9ABAF    | neutral700       | darkneutral800  | `hover:text-slate-700`  | `dark:hover:text-slate-200`  | Hovered state of color.chart.gray.bolder.                                       |
| `chart.gray.boldest`             | #505258     | #A9ABAF    | neutral800       | darkneutral800  | `text-slate-700`        | `dark:text-slate-200`        | For data visualisation only.                                                    |
| `chart.gray.boldest.hovered`     | #3B3D42     | #BFC1C4    | neutral900       | darkneutral900  | `hover:text-slate-800`  | `dark:hover:text-slate-100`  | Hovered state of color.chart.gray.boldest.                                      |
| `chart.green.bold`               | #22A06B     | #2ABB7F    | green600         | green500        | `text-green-600`        | `dark:text-green-500`        | For data visualisation only.                                                    |
| `chart.green.bold.hovered`       | #1F845A     | #4BCE97    | green700         | green400        | `hover:text-green-700`  | `dark:hover:text-green-400`  | Hovered state of color.chart.green.bold.                                        |
| `chart.green.bolder`             | #1F845A     | #4BCE97    | green700         | green400        | `text-green-700`        | `dark:text-green-400`        | For data visualisation only.                                                    |
| `chart.green.bolder.hovered`     | #216E4E     | #7EE2B8    | green800         | green300        | `hover:text-green-800`  | `dark:hover:text-green-300`  | Hovered state of color.chart.green.bolder.                                      |
| `chart.green.boldest`            | #216E4E     | #7EE2B8    | green800         | green300        | `text-green-800`        | `dark:text-green-300`        | For data visualisation only.                                                    |
| `chart.green.boldest.hovered`    | #164B35     | #BAF3DB    | green900         | green200        | `hover:text-green-900`  | `dark:hover:text-green-200`  | Hovered state of color.chart.green.boldest.                                     |
| `chart.information`              | #4688EC     | #357DE8    | blue500          | blue600         | `text-blue-500`         | `dark:text-blue-600`         | For data visualisation communicating low priority or in-progress statuses.      |
| `chart.information.bold`         | #1558BC     | #8FB8F6    | blue800          | blue300         | `text-blue-700`         | `dark:text-blue-400`         | A stronger emphasis option of color.chart.information.                          |
| `chart.information.bold.hovered` | #123263     | #CFE1FD    | blue900          | blue200         | `hover:text-blue-800`   | `dark:hover:text-blue-100`   | Hovered state of color.chart.information.bold.                                  |
| `chart.information.hovered`      | #357DE8     | #4688EC    | blue600          | blue500         | `hover:text-blue-600`   | `dark:hover:text-blue-500`   | Hovered state of color.chart.information.                                       |
| `chart.lime.bold`                | #6A9A23     | #82B536    | lime600          | lime500         | `text-lime-600`         | `dark:text-lime-500`         | For data visualisation only.                                                    |
| `chart.lime.bold.hovered`        | #5B7F24     | #94C748    | lime700          | lime400         | `hover:text-lime-700`   | `dark:hover:text-lime-400`   | Hovered state of color.chart.lime.bold.                                         |
| `chart.lime.bolder`              | #5B7F24     | #94C748    | lime700          | lime400         | `text-lime-700`         | `dark:text-lime-400`         | For data visualisation only.                                                    |
| `chart.lime.bolder.hovered`      | #4C6B1F     | #B3DF72    | lime800          | lime300         | `hover:text-lime-800`   | `dark:hover:text-lime-300`   | Hovered state of color.chart.lime.bolder.                                       |
| `chart.lime.boldest`             | #4C6B1F     | #B3DF72    | lime800          | lime300         | `text-lime-800`         | `dark:text-lime-300`         | For data visualisation only.                                                    |
| `chart.lime.boldest.hovered`     | #37471F     | #D3F1A7    | lime900          | lime200         | `hover:text-lime-900`   | `dark:hover:text-lime-200`   | Hovered state of color.chart.lime.boldest.                                      |
| `chart.magenta.bold`             | #DA62AC     | #CD519D    | magenta500       | magenta600      | `text-pink-500`         | `dark:text-pink-600`         | For data visualisation only.                                                    |
| `chart.magenta.bold.hovered`     | #CD519D     | #DA62AC    | magenta600       | magenta500      | `hover:text-pink-600`   | `dark:hover:text-pink-500`   | Hovered state of color.chart.magenta.bold.                                      |
| `chart.magenta.bolder`           | #CD519D     | #DA62AC    | magenta600       | magenta500      | `text-pink-600`         | `dark:text-pink-500`         | For data visualisation only.                                                    |
| `chart.magenta.bolder.hovered`   | #AE4787     | #E774BB    | magenta700       | magenta400      | `hover:text-pink-700`   | `dark:hover:text-pink-400`   | Hovered state of color.chart.magenta.bolder.                                    |
| `chart.magenta.boldest`          | #943D73     | #F797D2    | magenta800       | magenta300      | `text-pink-700`         | `dark:text-pink-400`         | For data visualisation only.                                                    |
| `chart.magenta.boldest.hovered`  | #50253F     | #FDD0EC    | magenta900       | magenta200      | `hover:text-pink-800`   | `dark:hover:text-pink-100`   | Hovered state of color.chart.magenta.boldest.                                   |
| `chart.neutral`                  | #8C8F97     | #7E8188    | neutral500       | darkneutral600  | `text-slate-500`        | `dark:text-slate-400`        | A secondary color for data visualisation or to communicate 'to-do' statues.     |
| `chart.neutral.hovered`          | #7D818A     | #96999E    | neutral600       | darkneutral700  | `hover:text-slate-600`  | `dark:hover:text-slate-300`  | Hovered state of color.chart.neutral.                                           |
| `chart.orange.bold`              | #E06C00     | #F68909    | orange600        | orange500       | `text-orange-600`       | `dark:text-orange-500`       | For data visualisation only.                                                    |
| `chart.orange.bold.hovered`      | #BD5B00     | #FCA700    | orange700        | orange400       | `hover:text-orange-700` | `dark:hover:text-orange-400` | Hovered state of color.chart.orange.bold.                                       |
| `chart.orange.bolder`            | #BD5B00     | #FCA700    | orange700        | orange400       | `text-orange-700`       | `dark:text-orange-400`       | For data visualisation only.                                                    |
| `chart.orange.bolder.hovered`    | #9E4C00     | #FBC828    | orange800        | orange300       | `hover:text-orange-800` | `dark:hover:text-orange-300` | Hovered state of color.chart.orange.bolder.                                     |
| `chart.orange.boldest`           | #9E4C00     | #FBC828    | orange800        | orange300       | `text-orange-800`       | `dark:text-orange-300`       | For data visualisation only.                                                    |
| `chart.orange.boldest.hovered`   | #693200     | #FCE4A6    | orange900        | orange200       | `hover:text-orange-900` | `dark:hover:text-orange-200` | Hovered state of color.chart.orange.boldest.                                    |
| `chart.purple.bold`              | #BF63F3     | #AF59E1    | purple500        | purple600       | `text-purple-500`       | `dark:text-purple-600`       | For data visualisation only.                                                    |
| `chart.purple.bold.hovered`      | #AF59E1     | #BF63F3    | purple600        | purple500       | `hover:text-purple-600` | `dark:hover:text-purple-500` | Hovered state of color.chart.purple.bold.                                       |
| `chart.purple.bolder`            | #AF59E1     | #BF63F3    | purple600        | purple500       | `text-purple-600`       | `dark:text-purple-500`       | For data visualisation only.                                                    |
| `chart.purple.bolder.hovered`    | #964AC0     | #C97CF4    | purple700        | purple400       | `hover:text-purple-700` | `dark:hover:text-purple-400` | Hovered state of color.chart.purple.bolder.                                     |
| `chart.purple.boldest`           | #803FA5     | #D8A0F7    | purple800        | purple300       | `text-purple-700`       | `dark:text-purple-400`       | For data visualisation only.                                                    |
| `chart.purple.boldest.hovered`   | #48245D     | #EED7FC    | purple900        | purple200       | `hover:text-purple-800` | `dark:hover:text-purple-100` | Hovered state of color.chart.purple.boldest.                                    |
| `chart.red.bold`                 | #F15B50     | #E2483D    | red500           | red600          | `text-red-500`          | `dark:text-red-600`          | For data visualisation only.                                                    |
| `chart.red.bold.hovered`         | #E2483D     | #F15B50    | red600           | red500          | `hover:text-red-600`    | `dark:hover:text-red-500`    | Hovered state of color.chart.red.bold.                                          |
| `chart.red.bolder`               | #E2483D     | #F15B50    | red600           | red500          | `text-red-600`          | `dark:text-red-500`          | For data visualisation only.                                                    |
| `chart.red.bolder.hovered`       | #C9372C     | #F87168    | red700           | red400          | `hover:text-red-700`    | `dark:hover:text-red-400`    | Hovered state of color.chart.red.bolder.                                        |
| `chart.red.boldest`              | #AE2E24     | #FD9891    | red800           | red300          | `text-red-700`          | `dark:text-red-400`          | For data visualisation only.                                                    |
| `chart.red.boldest.hovered`      | #5D1F1A     | #FFD5D2    | red900           | red200          | `hover:text-red-800`    | `dark:hover:text-red-100`    | Hovered state of color.chart.red.boldest.                                       |
| `chart.success`                  | #22A06B     | #2ABB7F    | green600         | green500        | `text-green-600`        | `dark:text-green-500`        | For data visualisation communicating positive information, such as 'on track'.  |
| `chart.success.bold`             | #216E4E     | #7EE2B8    | green800         | green300        | `text-green-700`        | `dark:text-green-300`        | A stronger emphasis option of color.chart.success.                              |
| `chart.success.bold.hovered`     | #164B35     | #BAF3DB    | green900         | green200        | `hover:text-green-800`  | `dark:hover:text-green-200`  | Hovered state of color.chart.success.bold.                                      |
| `chart.success.hovered`          | #1F845A     | #4BCE97    | green700         | green400        | `hover:text-green-700`  | `dark:hover:text-green-400`  | Hovered state of color.chart.success.                                           |
| `chart.teal.bold`                | #2898BD     | #42B2D7    | teal600          | teal500         | `text-teal-600`         | `dark:text-teal-500`         | For data visualisation only.                                                    |
| `chart.teal.bold.hovered`        | #227D9B     | #6CC3E0    | teal700          | teal400         | `hover:text-teal-700`   | `dark:hover:text-teal-400`   | Hovered state of color.chart.teal.bold.                                         |
| `chart.teal.bolder`              | #227D9B     | #6CC3E0    | teal700          | teal400         | `text-teal-700`         | `dark:text-teal-400`         | For data visualisation only.                                                    |
| `chart.teal.bolder.hovered`      | #206A83     | #9DD9EE    | teal800          | teal300         | `hover:text-teal-800`   | `dark:hover:text-teal-300`   | Hovered state of color.chart.teal.bolder.                                       |
| `chart.teal.boldest`             | #206A83     | #9DD9EE    | teal800          | teal300         | `text-teal-800`         | `dark:text-teal-300`         | For data visualisation only.                                                    |
| `chart.teal.boldest.hovered`     | #164555     | #C6EDFB    | teal900          | teal200         | `hover:text-teal-900`   | `dark:hover:text-teal-200`   | Hovered state of color.chart.teal.boldest.                                      |
| `chart.warning`                  | #B38600     | #CF9F02    | yellow600        | yellow500       | `text-yellow-600`       | `dark:text-yellow-500`       | For data visualisation communicating caution, such as 'at risk' statuses.       |
| `chart.warning.bold`             | #7F5F01     | #EED12B    | yellow800        | yellow300       | `text-yellow-700`       | `dark:text-yellow-300`       | A stronger emphasis option of color.chart.warning.                              |
| `chart.warning.bold.hovered`     | #533F04     | #F5E989    | yellow900        | yellow200       | `hover:text-yellow-800` | `dark:hover:text-yellow-200` | Hovered state of color.chart.warning.bold.                                      |
| `chart.warning.hovered`          | #946F00     | #DDB30E    | yellow700        | yellow400       | `hover:text-yellow-900` | `dark:hover:text-yellow-400` | Hovered state of color.chart.warning.                                           |
| `chart.yellow.bold`              | #B38600     | #CF9F02    | yellow600        | yellow500       | `text-yellow-600`       | `dark:text-yellow-500`       | For data visualisation only.                                                    |
| `chart.yellow.bold.hovered`      | #946F00     | #DDB30E    | yellow700        | yellow400       | `hover:text-yellow-700` | `dark:hover:text-yellow-400` | Hovered state of color.chart.yellow.bold.                                       |
| `chart.yellow.bolder`            | #946F00     | #DDB30E    | yellow800        | yellow400       | `text-yellow-800`       | `dark:text-yellow-400`       | For data visualisation only.                                                    |
| `chart.yellow.bolder.hovered`    | #7F5F01     | #EED12B    | yellow900        | yellow300       | `hover:text-yellow-900` | `dark:hover:text-yellow-300` | Hovered state of color.chart.yellow.bolder.                                     |
| `chart.yellow.boldest`           | #7F5F01     | #EED12B    | yellow800        | yellow300       | `text-yellow-800`       | `dark:text-yellow-300`       | For data visualisation only.                                                    |
| `chart.yellow.boldest.hovered`   | #533F04     | #F5E989    | yellow900        | yellow200       | `hover:text-yellow-900` | `dark:hover:text-yellow-200` | Hovered state of color.chart.yellow.boldest.                                    | ## Link Colors |

## Link Colors

| Token                  | Light Value | Dark Value | Light Base Token | Dark Base Token | Light Tailwind Class | Dark Tailwind Class    | Usage                                                                             |
| ---------------------- | ----------- | ---------- | ---------------- | --------------- | -------------------- | ---------------------- | --------------------------------------------------------------------------------- |
| `link`                 | #1868DB     | #669DF1    | blue700          | blue400         | `text-blue-600`      | `dark:text-blue-400`   | Use for links in a default or hovered state. Add an underline for hovered states. |
| `link.pressed`         | #1558BC     | #8FB8F6    | blue800          | blue300         | `text-blue-700`      | `dark:text-blue-600`   | Use for links in a pressed state.                                                 |
| `link.visited`         | #803FA5     | #D8A0F7    | purple800        | purple300       | `text-purple-600`    | `dark:text-purple-400` | Use for visited links.                                                            |
| `link.visited.pressed` | #48245D     | #EED7FC    | purple900        | purple200       | `text-purple-700`    | `dark:text-purple-500` | Use for visited links in a pressed state.                                         |

## Skeleton Colors

| Token             | Light Value | Dark Value | Light Base Token | Dark Base Token | Light Tailwind Class | Dark Tailwind Class   | Usage                                                          |
| ----------------- | ----------- | ---------- | ---------------- | --------------- | -------------------- | --------------------- | -------------------------------------------------------------- |
| `skeleton`        | #1E1F210F   | #A1BDD914  | neutral200a      | darkneutral200a | `bg-slate-800/6`     | `dark:bg-slate-200/8` | Use for skeleton loading states                                |
| `skeleton.subtle` | #1E1F2108   | #BCD6F00A  | neutral100a      | darkneutral100a | `bg-slate-800/3`     | `dark:bg-slate-200/4` | Use for the pulse or shimmer effect in skeleton loading states |

## Interaction Colors

| Token                 | Light Value | Dark Value | Light Base Token | Dark Base Token | Light Tailwind Class | Dark Tailwind Class | Usage                                                                                                                   |
| --------------------- | ----------- | ---------- | ---------------- | --------------- | -------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `interaction.hovered` | #00000029   | #ffffff33  | N/A              | N/A             | `bg-black/16`        | `dark:bg-white/20`  | Use as a background overlay for elements in a hovered state when their background color cannot change, such as avatars. |
| `interaction.pressed` | #00000052   | #ffffff5c  | N/A              | N/A             | `bg-black/32`        | `dark:bg-white/36`  | Use as a background overlay for elements in a pressed state when their background color cannot change, such as avatars. |

## Blanket Colors

| Token              | Light Value | Dark Value | Light Base Token | Dark Base Token | Light Tailwind Class | Dark Tailwind Class  | Usage                                                                                                                                          |
| ------------------ | ----------- | ---------- | ---------------- | --------------- | -------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `blanket`          | #1E1F217D   | #10121499  | neutral500a      | N/A             | `bg-slate-800/49`    | `dark:bg-black/60`   | Use for the screen overlay that appears with modal dialogs                                                                                     |
| `blanket.danger`   | #EF5C4814   | #E3493514  | N/A              | N/A             | `bg-orange-500/8`    | `dark:bg-red-600/8`  | Use as an overlay to communicate danger states when a simple background color change isn't possible, such as deletion of Editor block elements |
| `blanket.selected` | #4688EC14   | #357DE814  | N/A              | N/A             | `bg-blue-500/8`      | `dark:bg-blue-600/8` | Use as an overlay to communicate selected states when a simple background color change isn't possible, such as in Editor block elements        |

## Elevation Shadow

| Token                                 | Light Value                                                       | Dark Value                                                                              | Light Base Token | Dark Base Token | Light Tailwind Class                 | Dark Tailwind Class                                 | Usage                                                                                                                                                             |
| ------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ---------------- | --------------- | ------------------------------------ | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `elevation.shadow.raised`             | `0 1px 1px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31)`  | `0 0 0 rgba(0, 0, 0, 0), 0 1px 1px rgba(3, 4, 4, 0.5), 0 0 1px rgba(3, 4, 4, 0.5)`      | N/A              | N/A             | `shadow-md ring-1 ring-slate-800/31` | `dark:shadow-lg dark:ring-1 dark:ring-slate-200/50` | Use for the box shadow of raised card elements, such as Jira cards on a Kanban board. Combine with elevation.surface.raised                                       |
| `elevation.shadow.overflow`           | `0 0 8px rgba(9, 30, 66, 0.16), 0 0 1px rgba(9, 30, 66, 0.12)`    | `0 0 12px rgba(3, 4, 4, 0.56), 0 0 1px rgba(3, 4, 4, 0.5)`                              | N/A              | N/A             | `shadow-lg ring-1 ring-slate-800/12` | `dark:shadow-xl dark:ring-1 dark:ring-slate-200/50` | Use to create a shadow when content scrolls under other content.                                                                                                  |
| `elevation.shadow.overflow.perimeter` | `0 0 0 1px rgba(9, 30, 66, 0.12)`                                 | `0 0 0 1px rgba(3, 4, 4, 0.5)`                                                          | N/A              | N/A             | `ring-1 ring-slate-800/12`           | `dark:ring-1 dark:ring-slate-200/50`                | Use only when elevation.shadow.overflow is not technically feasible to implement. Pair with elevation.shadow.overflow.spread to replicate the overflow shadow.    |
| `elevation.shadow.overflow.spread`    | `0 0 0 1px rgba(9, 30, 66, 0.16)`                                 | `0 0 0 1px rgba(3, 4, 4, 0.56)`                                                         | N/A              | N/A             | `ring-1 ring-slate-800/16`           | `dark:ring-1 dark:ring-slate-200/56`                | Use only when elevation.shadow.overflow is not technically feasible to implement. Pair with elevation.shadow.overflow.perimeter to replicate the overflow shadow. |
| `elevation.shadow.overlay`            | `0 8px 12px rgba(9, 30, 66, 0.15), 0 0 1px rgba(9, 30, 66, 0.31)` | `0 0 0 rgba(57, 66, 74, 1), 0 8px 12px rgba(3, 4, 4, 0.36), 0 0 1px rgba(3, 4, 4, 0.5)` | N/A              | N/A             | `shadow-xl ring-1 ring-slate-800/31` | `dark:shadow-xl dark:ring-1 dark:ring-slate-600`    | Use for the box shadow of elements that sit on top of the UI, such as modals, dropdown menus, flags, and inline dialogs. Combine with elevation.surface.overlay   |

## Elevation Surface

| Token                               | Light Value | Dark Value | Light Base Token | Dark Base Token | Light Tailwind Class | Dark Tailwind Class        | Usage                                                                                                                                                                                                                                                                 |
| ----------------------------------- | ----------- | ---------- | ---------------- | --------------- | -------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `elevation.surface`                 | #FFFFFF     | #1F1F21    | neutral0         | darkneutral100  | `bg-white`           | `dark:bg-slate-900`        | Use as the primary background for the UI.                                                                                                                                                                                                                             |
| `elevation.surface.hovered`         | #F0F1F2     | #242528    | neutral200       | darkneutral200  | `hover:bg-slate-50`  | `dark:hover:bg-slate-800`  | Hovered state of elevation.surface                                                                                                                                                                                                                                    |
| `elevation.surface.pressed`         | #DDDEE1     | #2B2C2F    | neutral300       | darkneutral250  | `active:bg-slate-50` | `dark:active:bg-slate-800` | Pressed state of elevation.surface                                                                                                                                                                                                                                    |
| `elevation.surface.overlay`         | #FFFFFF     | #2B2C2F    | neutral0         | darkneutral250  | `bg-white`           | `dark:bg-slate-900`        | Use for the background of elements that sit on top of they UI, such as modals, dialogs, dropdown menus, floating toolbars, and floating single-action buttons. Also use for the background of raised cards in a dragged state. Combine with elevation.shadow.overlay. |
| `elevation.surface.overlay.hovered` | #F0F1F2     | #303134    | neutral200       | darkneutral300  | `hover:bg-slate-50`  | `dark:hover:bg-slate-800`  | Hovered state of elevation.surface.overlay                                                                                                                                                                                                                            |
| `elevation.surface.overlay.pressed` | #DDDEE1     | #3D3F43    | neutral300       | darkneutral350  | `active:bg-slate-50` | `dark:active:bg-slate-800` | Pressed state of elevation.surface.overlay                                                                                                                                                                                                                            |
| `elevation.surface.raised`          | #FFFFFF     | #242528    | neutral0         | darkneutral200  | `bg-white`           | `dark:bg-slate-900`        | Use for the background of cards that can be moved, such as Jira cards on a Kanban board. Combine with elevation.shadow.raised.                                                                                                                                        |
| `elevation.surface.raised.hovered`  | #F0F1F2     | #2B2C2F    | neutral200       | darkneutral250  | `hover:bg-slate-50`  | `dark:hover:bg-slate-800`  | Hovered state of elevation.surface.raised                                                                                                                                                                                                                             |
| `elevation.surface.raised.pressed`  | #DDDEE1     | #303134    | neutral300       | darkneutral300  | `active:bg-slate-50` | `dark:active:bg-slate-800` | Pressed state of elevation.surface.raised                                                                                                                                                                                                                             |
| `elevation.surface.sunken`          | #F8F8F8     | #18191A    | neutral100       | darkneutral0    | `bg-slate-50`        | `dark:bg-slate-800`        | A secondary background for the UI commonly used for grouping items, such as Jira cards in columns.                                                                                                                                                                    | ## Opacity |

| Token              | Value | Tailwind Class | Usage                                               |
| ------------------ | ----- | -------------- | --------------------------------------------------- |
| `opacity.disabled` | 0.4   | `opacity-40`   | Apply to images when in a disabled state.           |
| `opacity.loading`  | 0.2   | `opacity-20`   | Apply to content that sits under a loading spinner. |

## Utility

| Token                               | Light Value | Dark Value | Light Base Token | Dark Base Token | Tailwind Class Light Value | Tailwind Class Dark Value | Usage                                                                                                                                  |
| ----------------------------------- | ----------- | ---------- | ---------------- | --------------- | -------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `utility.elevation.surface.current` | #FFFFFF     | #1F1F21    | neutral0         | darkneutral100  | `bg-white`                 | `dark:bg-slate-900`       | A dynamic token that represents the current surface color set by a parent element. It defaults to the 'elevation.surface' token value. |

## Spacing (`--spacing: 4px`)

| Token                | Value | Tailwind Class | Usage                                                                |
| -------------------- | ----- | -------------- | -------------------------------------------------------------------- |
| `space.0`            | 0px   | `p-0`          | Equates to `0`. Use for resetting default spacing styles.            |
| `space.025`          | 2px   | `p-0.5`        | Use for small and compact pieces of UI.                              |
| `space.050`          | 4px   | `p-1`          | Use for small and compact pieces of UI.                              |
| `space.075`          | 6px   | `p-1.5`        | Use for small and compact pieces of UI.                              |
| `space.100`          | 8px   | `p-2`          | Use for small and compact pieces of UI.                              |
| `space.150`          | 12px  | `p-3`          | Use for larger and less dense pieces of UI.                          |
| `space.200`          | 16px  | `p-4`          | Use for larger and less dense pieces of UI.                          |
| `space.250`          | 20px  | `p-5`          | Use for larger and less dense pieces of UI.                          |
| `space.300`          | 24px  | `p-6`          | Use for larger and less dense pieces of UI.                          |
| `space.400`          | 32px  | `p-8`          | Use for the largest pieces of UI and for layout elements.            |
| `space.500`          | 40px  | `p-10`         | Use for the largest pieces of UI and for layout elements.            |
| `space.600`          | 48px  | `p-12`         | Use for the largest pieces of UI and for layout elements.            |
| `space.800`          | 64px  | `p-16`         | Use for the largest pieces of UI and for layout elements.            |
| `space.1000`         | 80px  | `p-20`         | Use for the largest pieces of UI and for layout elements.            |
| `space.negative.025` | -2px  | `-m-0.5`       | Use to negate parent whitespace or overlap small pieces of UI.       |
| `space.negative.050` | -4px  | `-m-1`         | Use to negate parent whitespace or overlap small pieces of UI.       |
| `space.negative.075` | -6px  | `-m-1.5`       | Use to negate parent whitespace or overlap small pieces of UI.       |
| `space.negative.100` | -8px  | `-m-2`         | Use to negate parent whitespace or overlap small pieces of UI.       |
| `space.negative.150` | -12px | `-m-3`         | Use to negate parent whitespace or overlap larger pieces of UI.      |
| `space.negative.200` | -16px | `-m-4`         | Use to negate parent whitespace or overlap larger pieces of UI.      |
| `space.negative.250` | -20px | `-m-5`         | Use to negate parent whitespace or overlap larger pieces of UI.      |
| `space.negative.300` | -24px | `-m-6`         | Use to negate parent whitespace or overlap larger pieces of UI.      |
| `space.negative.400` | -32px | `-m-8`         | Use to negate parent whitespace or overlap the largest pieces of UI. |

## Font Family

| Token                       | Value                                                                                                                 | Tailwind Class       | Usage                                               |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------- | --------------------------------------------------- |
| `font.family.body`          | "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif  | `font-sans`          | For our default product UI body and UI headingtext. |
| `font.family.heading`       | "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif  | `font-sans`          | For our default product UI heading text.            |
| `font.family.code`          | "Atlassian Mono", ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace                                      | `font-mono`          | For representing code only.                         |
| `font.family.brand.body`    | "Charlie Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif    | `font-brand-body`    | For our brand body text. Uses Charlie Text.         |
| `font.family.brand.heading` | "Charlie Display", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `font-brand-heading` | For our brand heading text. Uses Charlie Display.   |

## Font Weight

| Token                  | Value | Tailwind Class  | Usage                                                                                               |
| ---------------------- | ----- | --------------- | --------------------------------------------------------------------------------------------------- |
| `font.weight.regular`  | 400   | `font-normal`   | Default font weight for body text styles.                                                           |
| `font.weight.medium`   | 500   | `font-medium`   | For all text that may appear beside iconography, such as in a button.                               |
| `font.weight.semibold` | 600   | `font-semibold` | Use with caution as fallback fonts do not support this font weight and will default to bold weight. |
| `font.weight.bold`     | 653   | `font-bold`     | Use sparingly for emphasising text, such as in a lozenge.                                           |

## Typography Styles (`--leading-<number> = line-height: calc(var(--spacing) * <number>)`)

| Token                  | Value                                                                                                                                     | Tailwind Class                               | Usage                                                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `font.body`            | normal 400 14px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `text-sm font-normal leading-5 font-sans`    | Use in short descriptions or labels. The default size for text in components. Migrate instances of Paragraph Default and UI Text to Body M. |
| `font.body.large`      | normal 400 16px/24px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `text-base font-normal leading-6 font-sans`  | For long-form text, such as in blogs.                                                                                                       |
| `font.body.small`      | normal 400 12px/16px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `text-xs font-normal leading-4 font-sans`    | Use in secondary level content such as fine print or semantic messaging. Use sparingly. Migrate instances of Small text to Body S.          |
| `font.code`            | normal 400 0.875em/1 "Atlassian Mono", ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace                                     | `text-sm font-normal leading-none font-mono` | For representing code only, either inline or in code blocks.                                                                                |
| `font.heading.large`   | normal 653 24px/28px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `text-2xl font-bold leading-7 font-sans`     | Product page titles, such as forms. Migrate instances of H700 to Heading L.                                                                 |
| `font.heading.medium`  | normal 653 20px/24px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `text-xl font-bold leading-6 font-sans`      | Headers in large components, such as modal dialogs. Migrate instances of H600 to Heading M.                                                 |
| `font.heading.small`   | normal 653 16px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `text-base font-bold leading-5 font-sans`    | For headers in small components where space is limited. Migrate instances of H500 to Heading S.                                             |
| `font.heading.xlarge`  | normal 653 28px/32px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `text-3xl font-bold leading-8 font-sans`     | For overlapping brand with product promotions, such as marketplace content. Migrate instances of H800 to Heading XL.                        |
| `font.heading.xsmall`  | normal 653 14px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `text-sm font-bold leading-5 font-sans`      | For headers in small components where space is limited. Migrate instances of H400 to Heading XS.                                            |
| `font.heading.xxlarge` | normal 653 32px/36px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `text-4xl font-bold leading-9 font-sans`     | For overlapping brand with product promotions, such as marketplace content. Migrate instances of H900 to Heading XXL.                       |
| `font.heading.xxsmall` | normal 653 12px/16px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `text-xs font-bold leading-4 font-sans`      | For headers in fine print or tight spaces. Use sparingly. Migrate instances of H100, H200 and H300 to Heading XXS.                          |
| `font.metric.large`    | normal 653 28px/32px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `text-3xl font-bold leading-8 font-sans`     | Use to emphasize a number within a large donut.                                                                                             |
| `font.metric.medium`   | normal 653 24px/28px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `text-2xl font-bold leading-7 font-sans`     | Use to emphasize a number within a medium donut.                                                                                            |
| `font.metric.small`    | normal 653 16px/20px "Atlassian Sans", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, "Helvetica Neue", sans-serif | `text-base font-bold leading-5 font-sans`    | Use to emphasize a number and words in single-value tiles, or small donuts.                                                                 |

## Custom Design Tokens

### Border Radius

| Token                  | Value | Base Token   | Tailwind Class  | Usage                    |
| ---------------------- | ----- | ------------ | --------------- | ------------------------ |
| `border.radius.0`      | 0     | radius0      | `rounded-none`  | No border radius         |
| `border.radius.050`    | 2px   | radius050    | `rounded-xs`    | Selection indicators     |
| `border.radius.075`    | 3px   | radius075    | `rounded-[3px]` | Default radius/inputs    |
| `border.radius.100`    | 4px   | radius100    | `rounded-sm`    | Buttons                  |
| `border.radius.150`    | 6px   | radius150    | `rounded-md`    | Buttons                  |
| `border.radius.200`    | 8px   | radius200    | `rounded-lg`    | Cards/containers         |
| `border.radius.300`    | 12px  | radius300    | `rounded-xl`    | Modals/containers        |
| `border.radius.400`    | 16px  | radius400    | `rounded-2xl`   | Bigger modals/containers |
| `border.radius.circle` | 50%   | radiuscircle | `rounded-full`  | Circular elements        |

### Border Widths

| Token                  | Value | Tailwind Class | Usage               |
| ---------------------- | ----- | -------------- | ------------------- |
| `border.width`         | 1px   | `border`       | Default width       |
| `border.width.outline` | 2px   | `border-2`     | Focus/active states |

### Motion Duration

| Token                         | Value | Tailwind Class | Usage                               |
| ----------------------------- | ----- | -------------- | ----------------------------------- |
| `motion.duration.none`        | 0ms   | `duration-0`   | No transition                       |
| `motion.duration.small`       | 100ms | `duration-100` | Enter transition (fast)             |
| `motion.duration.medium`      | 350ms | `duration-350` | Enter transition (moderate/default) |
| `motion.duration.large`       | 700ms | `duration-700` | Enter transition (slow)             |
| `motion.duration.exit.small`  | 50ms  | `duration-50`  | Exit transition (fast)              |
| `motion.duration.exit.medium` | 175ms | `duration-175` | Exit transition (moderate)          |
| `motion.duration.exit.large`  | 350ms | `duration-350` | Exit transition (slow)              |

### Motion Easing

| Token                | Value                        | Tailwind Class | Usage                                                   |
| -------------------- | ---------------------------- | -------------- | ------------------------------------------------------- |
| `motion.ease.in-out` | `cubic-bezier(0.15,1,0.3,1)` | `ease-in-out`  | Natural entrance & exit (default base)                  |
| `motion.ease.out`    | `cubic-bezier(0.2,0,0,1)`    | `ease-out`     | Starts quicky and then slows down at the end (entrance) |
| `motion.ease.in`     | `cubic-bezier(0.8,0,0,0.8)`  | `ease-in`      | Start slowly and then speeds up at the end (exit)       |
| `motion.linear`      | `cubic-bezier(0,0,1,1)`      | `ease-linear`  | Constant speed motion                                   |

### Animation

#### Slide Animations

| Token                             | Value                                                                       | Tailwind Class                 | Description                                    |
| --------------------------------- | --------------------------------------------------------------------------- | ------------------------------ | ---------------------------------------------- |
| `animation.slide.in.bottom`       | `slide-in-from-bottom var(--motion-duration-medium) var(--motion-ease-out)` | `animate-slide-in-bottom`      | Element slides up from below viewport          |
| `animation.slide.in.bottom.small` | `slide-in-from-bottom var(--motion-duration-small) var(--motion-ease-out)`  | `animate-slide-in-bottom-fast` | Element slides up from below viewport (fast)   |
| `animation.slide.in.bottom.large` | `slide-in-from-bottom var(--motion-duration-large) var(--motion-ease-out)`  | `animate-slide-in-bottom-slow` | Element slides up from below viewport (slow)   |
| `animation.slide.in.top`          | `slide-in-from-top var(--motion-duration-medium) var(--motion-ease-out)`    | `animate-slide-in-top`         | Element slides down from above viewport        |
| `animation.slide.in.top.small`    | `slide-in-from-top var(--motion-duration-small) var(--motion-ease-out)`     | `animate-slide-in-top-fast`    | Element slides down from above viewport (fast) |
| `animation.slide.in.top.large`    | `slide-in-from-top var(--motion-duration-large) var(--motion-ease-out)`     | `animate-slide-in-top-slow`    | Element slides down from above viewport (slow) |
| `animation.slide.in.left`         | `slide-in-from-left var(--motion-duration-medium) var(--motion-ease-out)`   | `animate-slide-in-left`        | Element slides in from left side               |
| `animation.slide.in.left.small`   | `slide-in-from-left var(--motion-duration-small) var(--motion-ease-out)`    | `animate-slide-in-left-fast`   | Element slides in from left side (fast)        |
| `animation.slide.in.left.large`   | `slide-in-from-left var(--motion-duration-large) var(--motion-ease-out)`    | `animate-slide-in-left-slow`   | Element slides in from left side (slow)        |
| `animation.slide.in.right`        | `slide-in-from-right var(--motion-duration-medium) var(--motion-ease-out)`  | `animate-slide-in-right`       | Element slides in from right side              |
| `animation.slide.in.right.small`  | `slide-in-from-right var(--motion-duration-small) var(--motion-ease-out)`   | `animate-slide-in-right-fast`  | Element slides in from right side (fast)       |
| `animation.slide.in.right.large`  | `slide-in-from-right var(--motion-duration-large) var(--motion-ease-out)`   | `animate-slide-in-right-slow`  | Element slides in from right side (slow)       |

#### Exit Animations

| Token                              | Value                                                                          | Tailwind Class                  | Description                         |
| ---------------------------------- | ------------------------------------------------------------------------------ | ------------------------------- | ----------------------------------- |
| `animation.slide.out.bottom`       | `slide-out-to-bottom var(--motion-duration-exit-medium) var(--motion-ease-in)` | `animate-slide-out-bottom`      | Element slides down and out         |
| `animation.slide.out.bottom.small` | `slide-out-to-bottom var(--motion-duration-exit-small) var(--motion-ease-in)`  | `animate-slide-out-bottom-fast` | Element slides down and out (fast)  |
| `animation.slide.out.bottom.large` | `slide-out-to-bottom var(--motion-duration-exit-large) var(--motion-ease-in)`  | `animate-slide-out-bottom-slow` | Element slides down and out (slow)  |
| `animation.slide.out.top`          | `slide-out-to-top var(--motion-duration-exit-medium) var(--motion-ease-in)`    | `animate-slide-out-top`         | Element slides up and out           |
| `animation.slide.out.top.small`    | `slide-out-to-top var(--motion-duration-exit-small) var(--motion-ease-in)`     | `animate-slide-out-top-fast`    | Element slides up and out (fast)    |
| `animation.slide.out.top.large`    | `slide-out-to-top var(--motion-duration-exit-large) var(--motion-ease-in)`     | `animate-slide-out-top-slow`    | Element slides up and out (slow)    |
| `animation.slide.out.left`         | `slide-out-to-left var(--motion-duration-exit-medium) var(--motion-ease-in)`   | `animate-slide-out-left`        | Element slides left and out         |
| `animation.slide.out.left.small`   | `slide-out-to-left var(--motion-duration-exit-small) var(--motion-ease-in)`    | `animate-slide-out-left-fast`   | Element slides left and out (fast)  |
| `animation.slide.out.left.large`   | `slide-out-to-left var(--motion-duration-exit-large) var(--motion-ease-in)`    | `animate-slide-out-left-slow`   | Element slides left and out (slow)  |
| `animation.slide.out.right`        | `slide-out-to-right var(--motion-duration-exit-medium) var(--motion-ease-in)`  | `animate-slide-out-right`       | Element slides right and out        |
| `animation.slide.out.right.small`  | `slide-out-to-right var(--motion-duration-exit-small) var(--motion-ease-in)`   | `animate-slide-out-right-fast`  | Element slides right and out (fast) |
| `animation.slide.out.right.large`  | `slide-out-to-right var(--motion-duration-exit-large) var(--motion-ease-in)`   | `animate-slide-out-right-slow`  | Element slides right and out (slow) |

#### Fade Animations

| Token                      | Value                                                               | Tailwind Class          | Description                       |
| -------------------------- | ------------------------------------------------------------------- | ----------------------- | --------------------------------- |
| `animation.fade.in`        | `fade-in var(--motion-duration-medium) var(--motion-ease-out)`      | `animate-fade-in`       | Element fades in smoothly         |
| `animation.fade.in.small`  | `fade-in var(--motion-duration-small) var(--motion-ease-out)`       | `animate-fade-in-fast`  | Element fades in smoothly (fast)  |
| `animation.fade.in.large`  | `fade-in var(--motion-duration-large) var(--motion-ease-out)`       | `animate-fade-in-slow`  | Element fades in smoothly (slow)  |
| `animation.fade.out`       | `fade-out var(--motion-duration-exit-medium) var(--motion-ease-in)` | `animate-fade-out`      | Element fades out smoothly        |
| `animation.fade.out.small` | `fade-out var(--motion-duration-exit-small) var(--motion-ease-in)`  | `animate-fade-out-fast` | Element fades out smoothly (fast) |
| `animation.fade.out.large` | `fade-out var(--motion-duration-exit-large) var(--motion-ease-in)`  | `animate-fade-out-slow` | Element fades out smoothly (slow) |

#### Zoom Animations

| Token                      | Value                                                               | Tailwind Class          | Description                                 |
| -------------------------- | ------------------------------------------------------------------- | ----------------------- | ------------------------------------------- |
| `animation.zoom.in`        | `zoom-in var(--motion-duration-medium) var(--motion-ease-out)`      | `animate-zoom-in`       | Element scales up from 95% to 100%          |
| `animation.zoom.in.small`  | `zoom-in var(--motion-duration-small) var(--motion-ease-out)`       | `animate-zoom-in-fast`  | Element scales up from 95% to 100% (fast)   |
| `animation.zoom.in.large`  | `zoom-in var(--motion-duration-large) var(--motion-ease-out)`       | `animate-zoom-in-slow`  | Element scales up from 95% to 100% (slow)   |
| `animation.zoom.out`       | `zoom-out var(--motion-duration-exit-medium) var(--motion-ease-in)` | `animate-zoom-out`      | Element scales down from 100% to 95%        |
| `animation.zoom.out.small` | `zoom-out var(--motion-duration-exit-small) var(--motion-ease-in)`  | `animate-zoom-out-fast` | Element scales down from 100% to 95% (fast) |
| `animation.zoom.out.large` | `zoom-out var(--motion-duration-exit-large) var(--motion-ease-in)`  | `animate-zoom-out-slow` | Element scales down from 100% to 95% (slow) |

#### Shrink Animations

| Token                        | Value                                                                 | Tailwind Class            | Description                                |
| ---------------------------- | --------------------------------------------------------------------- | ------------------------- | ------------------------------------------ |
| `animation.shrink.out`       | `shrink-out var(--motion-duration-exit-medium) var(--motion-ease-in)` | `animate-shrink-out`      | Element shrinks to 0px width/height        |
| `animation.shrink.out.small` | `shrink-out var(--motion-duration-exit-small) var(--motion-ease-in)`  | `animate-shrink-out-fast` | Element shrinks to 0px width/height (fast) |
| `animation.shrink.out.large` | `shrink-out var(--motion-duration-exit-large) var(--motion-ease-in)`  | `animate-shrink-out-slow` | Element shrinks to 0px width/height (slow) |

#### Staggered Animations

| Token                          | Value                                                               | Tailwind Class              | Description                                            |
| ------------------------------ | ------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------ |
| `animation.staggered.in`       | `staggered-in var(--motion-duration-medium) var(--motion-ease-out)` | `animate-staggered-in`      | Element enters with staggered delay (grid-based)       |
| `animation.staggered.in.small` | `staggered-in var(--motion-duration-small) var(--motion-ease-out)`  | `animate-staggered-in-fast` | Element enters with staggered delay (grid-based, fast) |
| `animation.staggered.in.large` | `staggered-in var(--motion-duration-large) var(--motion-ease-out)`  | `animate-staggered-in-slow` | Element enters with staggered delay (grid-based, slow) |

#### Customize Theme

```css
@import "tailwindcss";
@theme {
	/* Slide In Animations */
	--animate-slide-in-bottom: slide-in-from-bottom var(--motion-duration-medium) var(--motion-ease-out);
	--animate-slide-in-top: slide-in-from-top var(--motion-duration-medium) var(--motion-ease-out);
	--animate-slide-in-left: slide-in-from-left var(--motion-duration-medium) var(--motion-ease-out);
	--animate-slide-in-right: slide-in-from-right var(--motion-duration-medium) var(--motion-ease-out);

	/* Slide In From Bottom */
	@keyframes slide-in-from-bottom {
		0% {
			transform: translateY(100%);
			opacity: 0;
			animation-timing-function: var(--motion-ease-out);
		}
		100% {
			transform: translateY(0);
			opacity: 1;
			animation-timing-function: var(--motion-ease-out);
		}
	}

	/* Slide In From Top */
	@keyframes slide-in-from-top {
		0% {
			transform: translateY(-100%);
			opacity: 0;
			animation-timing-function: var(--motion-ease-out);
		}
		100% {
			transform: translateY(0);
			opacity: 1;
			animation-timing-function: var(--motion-ease-out);
		}
	}

	/* Slide In From Left */
	@keyframes slide-in-from-left {
		0% {
			transform: translateX(-100%);
			opacity: 0;
			animation-timing-function: var(--motion-ease-out);
		}
		100% {
			transform: translateX(0);
			opacity: 1;
			animation-timing-function: var(--motion-ease-out);
		}
	}

	/* Slide In From Right */
	@keyframes slide-in-from-right {
		0% {
			transform: translateX(100%);
			opacity: 0;
			animation-timing-function: var(--motion-ease-out);
		}
		100% {
			transform: translateX(0);
			opacity: 1;
			animation-timing-function: var(--motion-ease-out);
		}
	}

	/* Slide Out Animations */
	--animate-slide-out-bottom: slide-out-to-bottom var(--motion-duration-exit-medium) var(--motion-ease-in);
	--animate-slide-out-top: slide-out-to-top var(--motion-duration-exit-medium) var(--motion-ease-in);
	--animate-slide-out-left: slide-out-to-left var(--motion-duration-exit-medium) var(--motion-ease-in);
	--animate-slide-out-right: slide-out-to-right var(--motion-duration-exit-medium) var(--motion-ease-in);

	/* Slide Out To Bottom */
	@keyframes slide-out-to-bottom {
		0% {
			transform: translateY(0);
			opacity: 1;
			animation-timing-function: var(--motion-ease-in);
		}
		100% {
			transform: translateY(100%);
			opacity: 0;
			animation-timing-function: var(--motion-ease-in);
		}
	}

	/* Slide Out To Top */
	@keyframes slide-out-to-top {
		0% {
			transform: translateY(0);
			opacity: 1;
			animation-timing-function: var(--motion-ease-in);
		}
		100% {
			transform: translateY(-100%);
			opacity: 0;
			animation-timing-function: var(--motion-ease-in);
		}
	}

	/* Slide Out To Left */
	@keyframes slide-out-to-left {
		0% {
			transform: translateX(0);
			opacity: 1;
			animation-timing-function: var(--motion-ease-in);
		}
		100% {
			transform: translateX(-100%);
			opacity: 0;
			animation-timing-function: var(--motion-ease-in);
		}
	}

	/* Slide Out To Right */
	@keyframes slide-out-to-right {
		0% {
			transform: translateX(0);
			opacity: 1;
			animation-timing-function: var(--motion-ease-in);
		}
		100% {
			transform: translateX(100%);
			opacity: 0;
			animation-timing-function: var(--motion-ease-in);
		}
	}

	/* Fade Animations */
	--animate-fade-in: fade-in var(--motion-duration-medium) var(--motion-ease-out);
	--animate-fade-out: fade-out var(--motion-duration-exit-medium) var(--motion-ease-in);

	/* Fade In */
	@keyframes fade-in {
		0% {
			opacity: 0;
			animation-timing-function: var(--motion-ease-out);
		}
		100% {
			opacity: 1;
			animation-timing-function: var(--motion-ease-out);
		}
	}

	/* Fade Out */
	@keyframes fade-out {
		0% {
			opacity: 1;
			animation-timing-function: var(--motion-ease-in);
		}
		100% {
			opacity: 0;
			animation-timing-function: var(--motion-ease-in);
		}
	}

	/* Zoom Animations */
	--animate-zoom-in: zoom-in var(--motion-duration-medium) var(--motion-ease-out);
	--animate-zoom-out: zoom-out var(--motion-duration-exit-medium) var(--motion-ease-in);

	/* Zoom In */
	@keyframes zoom-in {
		0% {
			transform: scale(0.95);
			opacity: 0;
			animation-timing-function: var(--motion-ease-out);
		}
		100% {
			transform: scale(1);
			opacity: 1;
			animation-timing-function: var(--motion-ease-out);
		}
	}

	/* Zoom Out */
	@keyframes zoom-out {
		0% {
			transform: scale(1);
			opacity: 1;
			animation-timing-function: var(--motion-ease-in);
		}
		100% {
			transform: scale(0.95);
			opacity: 0;
			animation-timing-function: var(--motion-ease-in);
		}
	}

	/* Shrink Animations */
	--animate-shrink-out: shrink-out var(--motion-duration-exit-medium) var(--motion-ease-in);

	/* Shrink Out */
	@keyframes shrink-out {
		0% {
			width: auto;
			height: auto;
			margin: 0;
			opacity: 1;
			animation-timing-function: var(--motion-ease-in);
		}
		100% {
			width: 0px;
			height: 0px;
			margin: 0px;
			opacity: 0;
			animation-timing-function: var(--motion-ease-in);
		}
	}

	/* Staggered Animations */
	--animate-staggered-in: staggered-in var(--motion-duration-medium) var(--motion-ease-out);

	/* Staggered In */
	@keyframes staggered-in {
		0% {
			opacity: 0;
			transform: translateY(20px);
			animation-timing-function: var(--motion-ease-out);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
			animation-timing-function: var(--motion-ease-out);
		}
	}

	/* 
    
    **Example Implementation: CSS-only approach with nth-child delays:**

    .staggered-container > * {
        animation: staggered-in var(--motion-duration-medium) var(--motion-ease-out);
        animation-fill-mode: both;
    }

    .staggered-container > *:nth-child(1) {
        animation-delay: 0ms;
    }
    .staggered-container > *:nth-child(2) {
        animation-delay: 50ms;
    }
    .staggered-container > *:nth-child(3) {
        animation-delay: 100ms;
    }
    .staggered-container > *:nth-child(4) {
        animation-delay: 150ms;
    }
    .staggered-container > *:nth-child(5) {
        animation-delay: 200ms;
    }
    
    // Continue for more items as needed

    */
}
```
