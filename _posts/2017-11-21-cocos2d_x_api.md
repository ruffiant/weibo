---
layout: post
title:  COcos2d-X 中文API
date:    2017-11-21 15:37:18+0800
categories: [游戏] 
tag: [cocos] 
---

* content
{:toc}
      
      
      Box2D
      
       
      
      
#1.cocos2d-x节点（Box2D.h)API
===============

      
      
##Collision
===============

      1.cocos2d-x节点（b2BroadPhase.h)API
      Box2d中broad-phase用于计算pairs【相交记录】，执行容量查询和光线投射。主要还是调用动态树进行数据方面的管理。
      2.cocos2d-x节点（b2Collision.h)API
      用于计算接触点，距离查询和TOI查询的结构和功能
      3.cocos2d-x节点（b2Distance.h)API
      在Box2d最终调用b2Ditance方法来求得两个形状最近点之间的距离，主要用于形状的碰撞检测。使用此方法需要将两个形状转换成一个b2DistanceProxy。为了提供高内部调用的效率，在外部开始调用b2Distance方法时，内部做了一个缓冲，用来提高计算距离的效率。
      4.cocos2d-x节点（b2DynamicTree.h)API
      //用来提高系统的碰撞检测的速度。
      //它主要是通过用户数据来操作轴对齐包围盒（axis-alignedbounding boxes,AABBs）来完成树的各种操作。同时动态树继承自AABB树，树上的每一个节点都有两个孩子。叶节点是一个单独的用户AABB。即便是惰性输入，整个数也可以使用旋转保持平衡。
      5.cocos2d-x节点（b2TimeOfImpact.h)API
      b2TimeOfImpact来确定两个形状运动时的撞击时间(TOI)。同时b2TimeOfImpact也主要防止两个形状快速移动时可能在一个时间步内彼此穿越对方的情况，也就是我们经常所说的隧道效应。
      
     
## Shapes
===============

      
      1.cocos2d-x节点（b2ChainShape.h)API
      链形状，链形状是一个自由形式的序列的线段，链具有双面碰撞，故你可以使用内部或者外部碰撞。
      // 链形状提供了一种高效的方法来同时连接多条边，为你的游戏创造静态的游戏世界。链形状同时提供了创建链和环的方法，
      // 以便为大家提供想要的形状。链形状不能自身交叉，那样它有可能不能正常的工作。在Box2d中，链形状是通过b2ChainShape实现的。
      2.cocos2d-x节点（b2CircleShape.h)API
      圆形不能是空心的
      3.cocos2d-x节点（b2EdgeShape.h)API
      一个线段(边缘)形状。这些可以连接在链或者环其他边缘形状。
      4.cocos2d-x节点（b2PolygonShape.h)API
      我们这里说的多边形是凸多边形，所谓凸多边形就是一条直线与该类多边形相交交点最多不超过两个。同时还是实心的，不能是空心。多边形的顶点范围应该在[3，b2_maxPolygonVertices]内，box2d中定义为8个，你也可以在公共模块的b2Settings.h文件中修改它的值，不过一般不建议那么做。
      5.cocos2d-x节点（b2Shape.h)API
      // shape中基本上都是虚函数，是没有实现的。shape中定义了以下几个函数：
      // 1、克隆一个形状
      // 2、获取孩子形状类型
      // 3、获取形状的孩子元素的数量
      // 4、投射一束光到一个孩子形状中
      // 5、计算一个孩子形状的轴对齐包围盒(aabb)
      // 7、测试形状中点的密封性。
      // 6、计算形状的质量
      
     
# Common
===============

      1.cocos2d-x节点（b2BlockAllocator.h)API
      b2BlockAllocator进行内存管理，使得分配和使内存变得更加高效、快速。内存管理之SOA的实现
      2.cocos2d-x节点（b2Draw.h)API
      调试辅助类主要辅助box2d中物体的调试，通过绘制不同的调试辅助的形状，来监控并改正物体行为的正确性
      3.cocos2d-x节点（b2GrowableStack.h)API
      可增长的协议栈，和出栈入栈操作
      4.cocos2d-x节点（b2Math.h)API
      //Box2d的公共模块中，包含的一个小巧而简便的向量矩阵的数学库。
      //主要由以下内容：
      //a)、向量，包括二维列向量和三维列向量
      //b)、矩阵，包括2X2矩阵和3X3矩阵
      //c)、旋度、扫描、和变换的实现
      //d)、其他部分的实现
      5.cocos2d-x节点（b2Settings.h)API
      设置中主要定义了宏、常量、和一些辅助的公共函数。
      6.cocos2d-x节点（b2StackAllocator.h)API
      B2StackAllocator主要是为了运行一个步长时满足box2d需要的临时内存空间，作为栈分配器来防止单步堆分配。
      7.cocos2d-x节点（b2Timer.h)API
      计时器主要是用来计算一段时间内的时间，通过对某个函数执行计时，可用来查看相关函数的效率和性能。
      
       
      

#      Dynamics
===============

      1.cocos2d-x节点（b2Body.h)API
      模拟现实世界中的静态物体，动态物体，匀速直线运动的物体，并返回它们的各种状态
      2.cocos2d-x节点（b2ContactManager.h)API
      b2Contact对象包含了碰撞的信息。从对象中可以得知哪两个定制器发生了碰撞，以及碰撞的位置和碰撞之后的反作用方向。在Box2D中有两个方法可以获取b2Contact对象，一个是遍历接触(contacts)链表每一个物体，另外一种方法是用接触监听器(contact listener)。
      3.cocos2d-x节点（b2Fixture.h)API
      对物理世界中的对象进行详细定制例如: 密度，摩擦细数，恢复系数、过滤，投射光线
      4.cocos2d-x节点（b2Island.h)API
      添加 body,content、joints 令物体失重
      5.cocos2d-x节点（b2TimeStep.h)API 定义了一些数据结构，位置、向量、分析数据等
      6.cocos2d-x节点（b2World.h)API
      /// world 类管理所有的物理实体，动态仿真，异步查询
      /// World 也包含也包含高效的内存管理设施。
      7.cocos2d-x节点（b2WorldCallbacks.h)API
      /// 当 body 被破坏时，与他们关联的 joints（接头）、 fixture（定制器）也会被破坏
      //实现这个监听，这样你就可以抵消这个 joints（接头）和形状的引用
      
#Contacts
===============

      
      其它的只有创建和计算方法，你可以自己查看
      1.cocos2d-x节点（b2Contact.h)API
      //这个类管理两个形状之间的接触。
      /// broad-phase (除了filtered(过滤)) 里面每个AABB 存在的接触重叠.
      /// 因此，接触的对象可能存在，有没有接触点的情况。
      Joints
      
      1.cocos2d-x节点（b2DistanceJoint.h)API
      //距离joints（接头）的定义,用来约束两个 body 上的两个点，以保证彼此保持在一个固定的距离
      2.cocos2d-x节点（b2FrictionJoint.h)API
      //摩擦joints（接头）的定义.可以设置最大摩擦力，最大力矩
      3.cocos2d-x节点（b2GearJoint.h)API
      //齿轮joints（接头），这个定义需要两个现有的 旋转/移动 joints（接头）
      4.cocos2d-x节点（b2Joint.h)API
      // joints（接头）的基类.joints（接头）用来约束两个不同类型的 body .
      5.cocos2d-x节点（b2MouseJoint.h)API
      /// 这是一个使用最大力的软约束，这个约束允许在不施加巨大力的情况下伸展
      6.cocos2d-x节点（b2PrismaticJoint.h)API
      //一个移动的joints（接头）. 这个 joints（接头）沿 body 上面的一个轴运动
      7.cocos2d-x节点（b2PulleyJoint.h)API
      //pulley(带轮) joints（接头）用于使用 两个固定的环绕点，连接两个 bodies
      8.cocos2d-x节点（CCClippingNode.h)API
      // Revolute（旋转）joints（接头）需要一个共同点来约束它们的 bodies，它们可以围绕这个点自由旋转
      9.cocos2d-x节点（b2RopeJoint.h)API
      //Rope(绳) joints（接头）两个 bodies 之间的最大距离，它没有其他作用。
      10.cocos2d-x节点（b2WeldJoint.h)API
      /// Weld（焊接）joints（接头）可以把两个 bodies 粘贴在一起. Weld（焊接）joints（接头）可能有些歪曲
      /// 因为 island 约束求解器是近似的
      11.cocos2d-x节点（b2WheelJoint.h)API
      /// 一个Wheel（车轮）joints（接头）这个 joints（接头）提供了两个自由度:沿固定在 bodyA上的轴和平面旋转
      Rope
      1.cocos2d-x节点（b2Rope.h)API
      //绳索
       
      
       
      
     
# cocos2dx
===============

      
      1.cocos2d-X 节点（CCCamera.h.）API
      CCCamera.h 简单来将就是视角（比如你看到了一栋房子，你站在不同的角度看到的房子是不一样的，他就相当于你的眼睛所处的位置，他对于你创建 3d 效果是很有用的）
      2.COcos2d-X 节点（CCConfiguration.h）API CCConfiguration可以用来存储配置信息，并通过 键/值 的对应关系来获取
      3.cocos2d-X 导演类（Director.h）API 导演类，创建一个主窗口来管理所有的场景，（通常一个游戏里面只有一个导演）
      3.1获取当前正在运行的场景、获取每秒帧数、是否要切换场景、获取视图尺寸、切换/停止 场景、清楚缓存、设置配置信息
      4.COcos2d-X 节点（ccFPSImages）API 没有实质性的内容，仅仅定义了两个变量而已，这里就不再列出了 5.COcos2d-X 节点（CCScheduler.h）API 这是一个轻量级的定时期，但是，你不可以使用 timer 来代替。它是 timer 的扩展，有许多地方比 timer 更方便
      action
      1.cocos2d-X 节点（CCAction.h）API
      
      动作必须依赖于 CCNode 的子类才能发挥作用，
      
      1. 1.CCAction 的子类 FiniteTimeAction 可以做瞬时动作和延时动作
      1.2.CCAction 的子类 Speed 可以模拟慢动作，快进动作
      1.3.CCAction 的子类 Follow　Action 执行往后紧随其后的节点cocos2d-x节点（CCActionCamera.h)API
      Camera 助手类，设置camera 在球面坐标系中的运动范围
      2.cocos2d-x节点（CCActionCamera.h)API
      
      Camera 助手类，设置camera在球面坐标系中的运动范围
      3.cocos2d-x节点（CCActionCatmullRom.h)API
      
      CatmullRom（卡特莫尔罗）action
      4.cocos2d-x节点（CCActionEase.h)API
      
      放缓（Easing）action 相关的类
      5.cocos2d-x节点（CCActionGrid.h)API
      
      各种网格 action 效果
      6.cocos2d-x节点（CCActionGrid3D.h)API
      
      透视、震动、水波、波纹....3D效果
      7.cocos2d-x节点（CCActionInstant.h)API
      
      action 的显示、隐藏、翻转、定位
      8.cocos2d-x节点（CCActionInterval.h)API
      
      有时间间隔的 action，使用动画、闪烁、重复次数、按次序 创建 action，贝塞尔曲线移动
      9.cocos2d-X 节点（CCActionManager.h）API
      
      ActionManager 是一个管理所有 actions 的单例.
      正常情况下你不直接使用这个单例，99% 的情况是你希望使用这个节点的接口，
      1.但是有一些情况你或许需要使用这个单例
      你希望你的 action 运行在不同的不同的节点
      你希望 pause / resume actions
      
      
      
      10.cocos2d-x节点（CCActionPageTurn3D)API
      在屏幕的右下角模拟翻页
      11.cocos2d-x节点（CCActionProgressTimer.h)API
      
      进度条
      12.cocos2d-x节点（CCActionTiledGrid.h)API
      
      拆分、淡出、波形、震动 action
      13.cocos2d-x节点（CCActionTween.h)API
      
     
# 补间动画
===============

      
      
##base_nodes
===============

      1.COCos2d-X 节点（CCAtlasNode.h）API AtlasNode 是 Node 的子类，实现了 RGBAProtocol 、 TextureProtocol 协议
      节点的所有功能都有效，再加上以下功能：
      - opacity and RGB colors //不透明度和RGB颜色
      2.COcos2d-X 节点（CCGLBufferedNode）API 从 GL的缓冲区加载数据 3.cocos2d-x节点（CCNode.h)API 这个类是一个基础类，最常用的 Node 有: Scene, Layer, Sprite, Menu
      1.1图形getter、setter 属性 （z 顺序、OpenGL 顶点、位置、缩放、旋转、倾斜角、锚点、尺寸、是否可见......）
      1.2children 和 parent 之间的关系（添加/删除 children、为children 添加识别码、获取 children 总数、获取 children 的parent......）
      1.3设置对象效果、为对象设置 schedule、各种坐标的相互转换、添加移除组件
      
##cocoa
===============

      1.cocos2d-x节点（CCAffineTransform.h)API
      仿射变换方法的定义
      2.cocos2d-x节点（CCArray.h)API
      这个类非常常用,可以存储任何对象，它可以模拟 C 的指针，
      3.cocos2d-x节点（CCAutoreleasePool.h)API
      如果你希望使用自动释放池，那么你就可以参考他了
      4.cocos2d-x节点（CCBool.h)API
      boolean 简单的覆盖了一些方法没有太多内容
      5.cocos2d-x节点（CCData.h)API
      Data 简单的覆盖了一些方法没有太多内容
      6.cocos2d-x节点（CCDataVisitor.h)API
      根据你的多态对象类型帮助你执行动作
      7.cocos2d-X 节点（CCDictionary）API
      使用它可以保存一些数据，他和 java 里面的 hashmap 对象类似，通过 键/值 对来存储索引对象，它的关键字（key） 可以是 String/Integer 类型
      8.cocos2d-x节点（CCDouble.h)API
      double 简单的覆盖了一些方法没有太多内容
      9.cocos2d-x节点（CCFloat.h)API
      float 简单的覆盖了一些方法没有太多内容
      10.cocos2d-x节点（CCGeometry.h)API
      这个类主要是讲点和点之间的关系、线和线之间的关系、点和坐标轴之间的关系，这个类涉及了许多数学的知识,另外有一个类似的类，参考（///cocos2d-x-3.0alpha0/cocos2dx/include/CCDeprecated.h）
      11.cocos2d-x节点（CCInteger.h)API
      integer 简单的覆盖了一些方法没有太多内容
      12.cocos2d-x节点（CCNS.h)API
      返回给定字符串的结构样式
      13.cocos2d-x节点（CCObject.h)API
      对象引用计数器的使用和比较
      14.cocos2d-x节点（ CCSet.h)API
      set 的基本使用
      15.cocos2d-x节点（CCString.h)API
      CCString 很强大，各种数据类型的转换（把字符串转化为 double、float、integer......）。字符串的分割和比较
      draw_nodes
      1.cocos2d-x节点（CCDrawingPrimitives.h)API
      绘制基本图元（矩形，多边形，点线）
      2.cocos2d-x节点（CCDrawNode.h)API
      // 在同一个批处理节点里面绘制 点、线段、多边形
      effects
      1.cocos2d-x节点（CCGrabber.h)API
      FBO 类抓取屏幕上的内容
      2.cocos2d-x节点（CCGrid.h)API
      基础类，Grid 的各种状态
      event_dispatcher
      1.cocos2d-x节点（CCEventAcceleration.h)API
      促进事件
      2.cocos2d-x节点（CCEventCustom.h)API
      简单的覆盖了一些方法没有太多内容
      3.cocos2d-x节点（CCEventKeyboard.h)API
      键盘事件
      4.cocos2d-x节点（CCEventListenerAcceleration.h)API
      监听加速
      5.cocos2d-x节点（CCEventListenerCustom.h)API
      自定义监听事件
      6.cocos2d-x节点（CCEventListenerKeyboard.h)API
      键盘事件监听
      7.cocos2d-x节点（CCEventListenerTouch.h)API
      触摸事件监听
      8.cocos2d-x节点（CCEventTouch.h)API
      触摸事件
      9.cocos2d-x节点（CCEvent.h)API
      一个基类，事件状态的判断
      10.cocos2d-x节点（CCEventDispatcher.h)API
      事件调度
      11.cocos2d-x节点（CCEventListener.h)API 监听器的基类
      12.cocos2d-X 节点（CCTouch.h）API
      一般把触点信息放入 CCTouch 类里面，CCTouch 类封装了触摸点的信息，包括触摸点的横纵坐标值，
      
##include
===============

      1.cocos2d-x节点（ccConfig.h)API
      //一些配置项可以很方便的调试
      2.cocos2d-x节点（CCEventType.h)API
      定义应用进入 前台/后台 的通知类型
      3.cocos2d-x节点（ccMacros.h)API
      一些预处理宏
      4.cocos2d-x节点（CCProtocols.h)API
      投影协议、标签接口、texture协议、RGBA协议、混合协议；涉及了透明度，透明度/颜色 在 children 和parent 之间的传递
      5.cocos2d-x节点（ccTypes.h)API
      字体属性、texture属性、RGB组成......
      6.cocos2d-x节点（cocos2d.h)API
      cocosd 所包含的类文件
      7.cocos2d-x节点（CCDeprecated.h)API
      这个类主要是讲点和点之间的关系、线和线之间的关系，另外有一个相似的类，（cocos2d-x-3.0alpha0cocos2dxcocoaCCGeometry.h）
      
##label_nodes
===============

      NewLabel_Experimental 新的 label 实验，没有太多的注释，如果有需要自己阅读api
      1.cocos2d-X 节点（CCLabelAtlas.h）API
      LabelAtlas 是 AtlasNode 的子类.
      他的速度很快可以替代标签.
      LabelAtlas 相对于 Label:
      - LabelAtlas 比 Label 要快
      - LabelAtlas characters 有一个固定的宽度和高度 //字符
      - LabelAtlas characters 可以是任何你想要的，因为它们是从一个文件演变过来的
      2.cocos2d-X 节点（CCLabelBMFont.h）API
      CCLabelBMFont.h 是文字渲染标签类，CCLabelBMFont 类中的每个字都是一个 Sprite 类，这意味着每个字都可以自己的旋转等其它动作
      3.cocos2d-X 节点（CCLabelTTF.h）API
      abelTTF 是 TextureNode 的子类，它可以渲染 labels 的标签（label上面显示的文字）。 TextureNode 的所有功能在 LabelTTF 里面都是有效的。 LabelTTF 对象非常缓慢. 可以考虑使用 LabelAtlas 、 LabelBMFont 代替.
      
##layers_scenes_transitions_nodes
===============

      1.cocos2d-x节点（CCLayer.h)API
      Layer 是 Node 的子类，它实现 TouchEventsDelegate 协议.节点的所有功能都有效，加上以下新的特点：它可以接收手机的触摸、它可以接收输入加速度
      
      1.1启用/禁用 触摸事件/传感器事件/小键盘事件
      1.2 LayerRGBA、LayerColor、LayerGradient、MultipleLayer 是 Layer 的子类,它们扩展了 layer 拥有layer 的所有功能
      
      2.cocos2d-x节点（CCScene.h)API
      把 Scene 作为所有 node 的parent 是一个很好的做法，基本的 Scene 方法
      3.cocos2d-x节点（CCTransition.h)API
      各种场景切换过渡效果
      4.cocos2d-x节点（CCTransitionPageTurn.h)API
      scene 过渡
      5.cocos2d-x节点（CCTransitionProgress.h)API
      放射状过渡到下一个场景
      
##menu_nodes
===============

      1.cocos2d-x节点（CCMenu.h)API 创建菜单，添加 items、设置 items 的对其方式
      2.cocos2d-x节点（CCMenuItem.h)API
      为菜单项创建各种类型的 item
      1.启用/禁用 item，是否选择 item
      2.MenuItemLabel、MenuItemAtlasFont、MenuItemFont、MenuItemSprite、MenuItemImage、MenuItemToggle 和 CCMenuItem 相关的类
      misc_nodes
      1.cocos2d-x节点（CCClippingNode.h)API
      裁剪节点
      2.cocos2d-x节点（CCMotionStreak.h)API
      在游戏的实现过程中,有时会需要在某个 游戏对象上的运动轨迹上实现渐隐效果。这种 感觉就好像是类似飞机拉线的拖尾巴,在视觉 上感觉很好,比如子弹的运动轨迹等,如果不 借助引擎的帮助,这种效果往往需要通过大量 的图片来实现。而 Cocos2D-x 提供了一种内置 的拖动渐隐效果类 CCMotionStreak 来帮助我们 实现这个效果。
      3.cocos2d-x节点（CCProgressTimer.h)API
      进度条定时器
      4.cocos2d-x节点（CCRenderTexture.h)API
      渲染纹理，把渲染 texture 存储为 PNG或JPG格式,捕获 android 设备的 come to background/foreground 消息 ，来 存储/恢复 缓存对象
      particle_nodes
      1.cocos2d-x节点（CCParticleBatchNode.h)API
      批量绘制粒子
      2.cocos2d-x节点（CCParticleExamples.h)API
      许多个粒子系统的 examples ，下雪，太阳，火焰，烟雾，流行，星系......
      3.cocos2d-x节点（CCParticleSystem.h)API
      //粒子系统的基类，重力模式、半径模式 备注：变动 是，每一次 增减/减少 的固定值
      4.cocos2d-x节点（CCParticleSystemQuad.h)API
      ParticleSystemQuad 是 ParticleSystem 的子类，它包含 ParticleSystem 的所有功能, 增加了，缩放、旋转、批处理
      5.cocos2d-x节点（firePngData.h)API
      这个类只有一个很难懂的char数组
      
##physics
===============

      Box2D、chipmunk只是包含了一些构造函数，析构函数，没有太多有价值的信息，感兴趣的人，可以自己取看看
      
      1.cocos2d-x节点（CCPhysicsSetting.h)API
      
      都是一些物理引擎设置的定义
      2.cocos2d-x节点（CCPhysicsBody.h)API
      物体之间的作用力，把 shape 链接到 body
      3.cocos2d-x节点（CCPhysicsContact.h)API
      两个物体接触的监听和处理
      4.cocos2d-x节点（CCPhysicsShape.h)API
      模拟现实世界的形状，圆形，链形，段状，对变形.....
      5.cocos2d-x节点（CCPhysicsJoint.h)API
      各种无力物理联合，别针、限制、联动、弹簧....等联合
      6.cocos2d-x节点（CCPhysicsWorld.h)API
      添加移除物理世界关联
      
##platform
===============

      apple、mac、third_party、ios 需要的话自己看吧
      1.cocos2d-x节点（CCApplicationProtocol.h)API
      应用程序的初始化，以及加载语言文件
      2.cocos2d-x节点（CCCommon.h)API
      调试的日志信息
      3.cocos2d-x节点（CCDevice.h)API
      设备的 DPI 启用/禁用 加速度传感器，设置加速的时间间隔
      4.cocos2d-x节点（CCEGLViewProtocol.h)API
      应用全屏参数，拉伸全屏，裁剪全屏，有黑色边框全屏
      5.cocos2d-x节点（CCFileUtils.h)API
      辅助类来处理文件操作，各种平台文件的搜索
      6.cocos2d-x节点（CCImage.h)API
      加载图片，储存图片，例如，从 stream buffer 里面加载图片，从指定路径加载图片，把文本初始化为图片
      7.cocos2d-x节点（CCImageCommon_cpp.h)API
      初始化各种类型的图片，储存图片
      8.cocos2d-x节点（CCPlatformConfig.h)API
      为每一个平台，配置 cocos2d-x 项目
      9.cocos2d-x节点（CCPlatformMacros.h)API
      定义一些特定于平台的宏
      10.cocos2d-x节点（CCSAXParser.h)API
      SAX解析器
      11.cocos2d-x节点（CCThread.h)API
      在 ios 设备上创建线程释放池对象
      
##script_support
===============

      1.cocos2d-x节点（CCScriptSupport.h)API
      调度器脚本处理程序入口、触摸脚本处理程序入口、脚本处理程序入口
      shaders
      1.cocos2d-x节点（CCGLProgram.h)API
      顶点着色器 相关操作
      2.cocos2d-x节点（ccGLStateCache.h)API
      绑定／删除 texure ，启用/禁用 gl功能
      3.cocos2d-x节点（CCShaderCache.h)API
      获取/重新加载 ShaderCache 实例
      
##sprite_nodes m
===============

      1.cocos2d-x节点（CCAnimation.h)API
      创建帧动画
      2.cocos2d-x节点（CCAnimationCache.h)API 管理 Animations 的 Singleton（单例）.
      他把 animations 存储到 cache 里. 如果你希望在 cache 里面存储你的 animations（cocos2d 把所有的动画统称为 animatiosns），你可以使用这个类
      3.cocos2d-x节点（CCSprite.h)API Sprite 是一个 2d 图片
      1.更新 Sprite 的 texture、设置 sprite 的批处理节点、设置 sprite 在 TextureAtlas 里面的索引…
      4.cocos2d-x节点（CCSpriteBatchNode.h)API SpriteBatchNode 就是一个批处理节点：如果它包含孩子，他会一次性绘制所有孩子(通常叫做批绘制”).如果要绘制的对象较多，使用 SpriteBatchNode 可以提升游戏性能
      5.cocos2d-x节点（CCSpriteFrame.h)API 和 sprite 类似
      6.cocos2d-x节点（CCSpriteFrameCache.h)API
      从 .list/字典 文件 初始化/删除 sprite Frame
      
##support
===============

      component、data_support、image_support、tinyxml2、user_default、zip_support 需要的话自己看吧
      1.cocos2d-x节点（base64.h)API
      解码/编码 base64的内存
      2.cocos2d-x节点（CCNotificationCenter.h)API
      通知中心管理通知
      3.cocos2d-x节点（CCProfiling.h)API
      cocos2d内置分析器
      4.cocos2d-x节点（ccUTF8.h)API
      UTF-16 转换为 UTF-8，统计 写入/读取 的字节数
      5.cocos2d-x节点（ccUtils.h)API
      获取下一个二进制数据
      6.cocos2d-x节点（CCVertex.h)API
      顶点
      7.cocos2d-x节点（TransformUtils.h)API
      改造后的 util
      
##text_input_node m
===============

      1.cocos2d-x节点（CCIMEDelegate.h)API 在游戏中，有时需要用户输入用户名，密码等，这时需要调用虚拟键盘来实现。在 Cocos2D－x中，通过使用继承输入法代理类 CCIMEDelegate 和其字体标签类 CCLableTTF的字体的输入框类 CCTextFieldTTF 来实现这一功能
      2.cocos2d-x节点（CCIMEDispatcher.h)API
      IME调度
      3.cocos2d-x节点（CCTextFieldTTF.h)API
      在游戏中，有时需要用户输入用户名，密码等，这时需要调用虚拟键盘来实现。在 Cocos2D－x中，通过使用继承输入法代理类 CCIMEDelegate 和其字体标签类 CCLableTTF的字体的输入框类 CCTextFieldTTF 来实现这一功能
      
##textures
===============

      1.cocos2d-x节点（CCTexture2D.h)API 贴图类 CCTexture2D 是关于 OpenGL 的概念。在 OpenGL 中称图片为贴图,在 Cocos2D-x 中 CCTexture2D 就是图片对象的意思,可以通过它创建精灵等对象 .CCTexture2D 类是精灵类和其相关类的基础。以下会看到很多类都可以用 CCTexture2D类定义。
      2.cocos2d-x节点（CCTextureAtlas.h)API
      一个类实现了Texture Atlas. 对 Quads 进行操作
      3.cocos2d-x节点（CCTextureCache.h)API
      在 cache 里面存取 texture
      
##tilemap_parallax_nodes
===============

      1.cocos2d-x节点（CCParallaxNode.h)API
      Parallax(视差) 类似滚动条
      2.cocos2d-x节点（CCTileMapAtlas.h)API 可以使用 CCTileMapAtlas 创建地图
      3.cocos2d-x节点（CCTMXLayer.h)API 他是 SpriteBatchNode 的子类.默认情况下 tiles （瓷砖）使用TextureAtlas 呈现。
      如果你在运行时修改了 tile ，tile 将变成一个 sprite
      4.cocos2d-x节点（CCTMXObjectGroup.h)API 地图精灵组类，CCTMXObjectGroup 用于代表地图中的精灵组
      5.cocos2d-x节点（CCTMXTiledMap.h)API
      和 CCTMXXMLParser(//cocos2d-x-3.0alpha0/cocos2dx/tilemap_parallax_nodes/CCTMXXMLParser.h) 类差不多都是解析地图
      6.cocos2d-x节点（CCTMXXMLParser.h)API
      TMX/XML 地图解析 和CCTMXTiledMap 差不多（//cocos2d-x-3.0alpha0/cocos2dx/tilemap_parallax_nodes/CCTMXTiledMap.h）
      