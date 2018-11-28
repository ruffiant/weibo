---
layout: post
title:  phpstrom 正则搜索
date:    2018-3-16 11:31:24+0800
categories: [工具] 
tag: [phpstrom] 
---

---
layout: post
title:  phpstrom 正则搜索
date:    2018年3月16日11:31:24+0800
categories: [工具] 
tag: [phpstrom] 
---

Construct|
Matches
 

#Characters
===============


x | 字符x
\\|
反斜杠字符
\0n|
octal值0n (0 <= n <= 7)
\0nn|
具有八进制值的字符(0 <= n <= 7)
\0mnn|
The character with octal value 0mnn (0 <= m <= 3, 0 <= n <= 7)
具有八进制值0mnn的字符(0 <= m <= 3, 0 <= n <= 7)
\xhh|
The character with hexadecimal value 0xhh
具有十六进制值的字符0xhh。
\uhhhh|
The character with hexadecimal value 0xhhhh
具有十六进制值的字符0xhhhh。
\t|
The tab character ('\u0009')
制表符(\ u0009)
\n|
The newline (line feed) character ('\u000A')
换行符(换行符)字符('\u000A')
\r|
The carriage-return character ('\u000D')
回车字符(\ u000D)
\f|
The form-feed character ('\u000C')
机会识别换页符(\ u000C)
\a|
The alert (bell) character ('\u0007')
警报(铃声)字符('\u0007')
\e|
The escape character ('\u001B')
转义字符(\ u001B)
\cx|
The control character corresponding to x
 与x对应的控制字符。

#Character classes
===============

[abc]|
a, b, or c (simple class)
[^abc]|
Any character except a, b, or c (negation)
除a、b或c以外的任何字符(否定)
[a-zA-Z]|
a through z or A through Z, inclusive (range)
a通过z或a到z，包括(范围)
[a-d[m-p]]|
a through d, or m through p: [a-dm-p] (union)
a通过d，或m通过p: [a-dm-p] (union)
[a-z&&[def]]|
d, e, or f (intersection)
d e或f(交集)
[a-z&&[^bc]]|
a through z, except for b and c: [ad-z] (subtraction)
a到z，除了b和c: [ad-z](减法)
[a-z&&[^m-p]]|
a through z, and not m through p: [a-lq-z](subtraction)
 a通过z，而不是m到p: [a-lq-z](减法)
Predefined character classes
.

#Any character (may or may not match line terminators)
任何字符(可能或不匹配行终止符)
===============

\d|
A digit: [0-9]
一个数字(0 - 9):
\D|
A non-digit: [^0-9]
一个non-digit(^ 0 - 9):
\s|
A whitespace character: [ \t\n\x0B\f\r]
一个空白字符:[\t\n\x0B\f\r]
\S|
A non-whitespace character: [^\s]
一个非空字符(^ \ s):
\w|
A word character: [a-zA-Z_0-9]
一个单词字符(a-zA-Z_0-9):
\W|
A non-word character: [^\w]
 一个非文字字符(^ \ w):

#POSIX character classes (US-ASCII only)
===============

\p{Lower}|
A lower-case alphabetic character: [a-z]
小写字母字符:[A -z]
\p{Upper}|
An upper-case alphabetic character:[A-Z]
一个大写字母字符(a - z):
\p{ASCII}|
All ASCII:[\x00-\x7F]
所有的ASCII[\x00-\x7F]:
\p{Alpha}|
An alphabetic character:[\p{Lower}\p{Upper}]
一个字母字符:[\p{Lower}\p{Upper}]
\p{Digit}|
A decimal digit: [0-9]
一个十进制数字(0 - 9):
\p{Alnum}|
An alphanumeric character:[\p{Alpha}\p{Digit}]
一个字母数字字符:[\ p { Alpha } \ p {数字}]
\p{Punct}|
Punctuation: One of !"#$%&'()*+,-./:;=>?@[\]^_`{|}~
 标点符号:之一! " # $ % &’()* +,”/:;= > ? @[\]^ _ { | } ~
 
\p{Graph}|
A visible character: [\p{Alnum}\p{Punct}]
一个明显的特征:[\ p { Alnum } \ p { Punct }]
\p{Print}|
A printable character: [\p{Graph}\x20]
可打印字符:[\ p {图} \ x20的)
\p{Blank}|
A space or a tab: [ \t]
空格或制表符:[\t]
\p{Cntrl}|
A control character: [\x00-\x1F\x7F]
一个控制字符:[\ x00 - \ x1F \ x7F]
\p{XDigit}|
A hexadecimal digit: [0-9a-fA-F]
一个十六进制数字(0-9a-fA-F):
\p{Space}|
A whitespace character: [ \t\n\x0B\f\r]
 一个空白字符:[\t\n\x0B\ \r]

#java.lang.Character classes (simple java character type)
字符类(简单的java字符类型)
===============

\p{javaLowerCase}|
Equivalent to java.lang.Character.isLowerCase()
相当于java.lang.Character.isLowerCase()
\p{javaUpperCase}|
Equivalent to java.lang.Character.isUpperCase()
\p{javaWhitespace}|
Equivalent to java.lang.Character.isWhitespace()
\p{javaMirrored}|
Equivalent to java.lang.Character.isMirrored()
 

#Classes for Unicode blocks and categories
用于Unicode块和类别的类。
===============

\p{InGreek}|
A character in the Greek block (simple block)

希腊方块中的字符(简单块)
\p{Lu}|
An uppercase letter (simple category)
大写字母(简单类别)
\p{Sc}|
A currency symbol
一个货币符号
\P{InGreek}|
Any character except one in the Greek block (negation)
除希腊文块(否定)以外的任何字符
[\p{L}&&[^\p{Lu}]] |
Any letter except an uppercase letter (subtraction)
除大写字母外的任何字母(减法)
 

#Boundary matchers
边界匹配器
===============

^|
The beginning of a line
行的开始。
$|
The end of a line
行的末端。
\b|
A word boundary
一个单词边界
\B|
A non-word boundary
非单词边界
\A|
The beginning of the input
输入的开始。
\G|
The end of the previous match
上一次匹配的结束。
\Z|
The end of the input but for the final terminator, if any
输入的结束，但对于最终的终结者，如果有的话。
\z
The end of the input
 输入端。

#Greedy quantifiers贪婪量词
===============

X?|
X, once or not at all
X，一次还是不。
X*|
X, zero or more times
X, 0或更多次。
X+|
X, one or more times
X，一次或多次。
X{n}|
X, exactly n times
X n次
X{n,}|
X, at least n times
X，至少n次。
X{n,m}|
X, at least n but not more than m times
 X，至少n，但不超过m倍。

#Reluctant quantifiers 不情愿的量词
===============

X??|
X, once or not at all
X，一次还是不。
X*?|
X, zero or more times
X, 0或更多次。
X+?|
X, one or more times
X，一次或多次。
X{n}?|
X, exactly n times
X n次
X{n,}?|
X, at least n times
X，至少n次。
X{n,m}?|
X, at least n but not more than m times
X，至少n，但不超过m倍。
 

#Possessive quantifiers占有欲强的量词
===============

X?+|
X, once or not at all
X，一次还是不。
X*+|
X, zero or more times
X, 0或更多次。
X++|
X, one or more times
X，一次或多次。
X{n}+|
X, exactly n times
X n次
X{n,}+|
X, at least n times
X，至少n次。
X{n,m}+|
X, at least n but not more than m times
X，至少n，但不超过m倍。

 

#Logical operators逻辑运算符
===============

XY|
X followed by Y
X Y紧随其后
X|Y|
Either X or Y
X或Y
(X)|
X, as a capturing group
X，作为一个捕获组。
 

#Back references返回引用
===============

\n|
Whatever the nth capturing group matched
 无论第n个捕获组匹配什么。

#Quotation报价
===============

\|
Nothing, but quotes the following character
没有，但是引用了下面的字符。
\Q|
Nothing, but quotes all characters until \E
什么都没有，只是引用了所有的字符，直到。
\E|
Nothing, but ends quoting started by \Q
 什么都没有，只是开始引用了\Q。
 

#Special constructs (non-capturing)特殊结构(无)
===============

(?:X)|
X, as a non-capturing group
X，作为一个非捕获组。
(?idmsux-idmsux) |
Nothing, but turns match flags on - off
什么也没有，只是把旗子打开。
(?idmsux-idmsux:X)  |
X, as a non-capturing group with the given flags on - off
X，作为一个非捕获组，带有给定的标志。
(?=X)|
X, via zero-width positive lookahead
X，通过零宽度的正面朝前。
(?!X)|
X, via zero-width negative lookahead
X，通过零宽度的负面展望。
(?<=X)|
X, via zero-width positive lookbehind
X，通过零宽度的正后方。
(?<!X)|
X, via zero-width negative lookbehind
X，通过零宽度的负向。
(?>X)|
X, as an independent, non-capturing group)
X，作为一个独立的，非捕获的群体。