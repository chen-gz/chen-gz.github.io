---
title: 刘康妮 (Connie)
type: about
comments: false
---

<div style="display: flex; align-items: center; gap: 30px; margin-bottom: 20px;">
  <div style="flex: 1;">
    <p style="margin: 0; font-size: 18px; line-height: 1.6;">您好！我是刘康妮 (Connie)，一名模拟/射频集成电路设计方向的博士生，在CMOS电路开发、系统级验证和可流片模块设计（台积电180纳米工艺）方面拥有超过5年的实践经验。我预计将于2025年12月毕业，目前正在寻找硬件工程师的职位。</p>
  </div>
  <div style="flex: 0 0 120px;">
    <img src="/images/connie-pitt.jpg" alt="刘康妮" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </div>
</div>

## 技术技能

- **CAD工具**: Cadence, Altium Designer
- **编程语言**: Verilog, Python, C++
- **亮点**: Analog Circuit, ASIC, CMOS, Layout Design, OPAMP, OTA, Circuit Design, SPI, I2C, PCB, ADC, DAC

## 教育背景

- **电子与电气工程博士**
  *匹兹堡大学，匹兹堡，宾夕法尼亚州，美国*
  *2019年8月 - 2025年12月*
  导师: [Rajkumar Kubendran](https://www.engineering.pitt.edu/people/faculty/rajkumar-kubendran/) ([Homepage](https://www.engineering.pitt.edu/subsites/Labs/enigma-lab/people/))

- **自动化理学学士**
  *北京理工大学，北京，中国*
  *2015年9月 - 2019年6月*

## 研究经历

### 研究助理 | *匹兹堡大学* | *2021年1月 - 至今*

#### 用于缓解疼痛的可编程脉冲发生器

- 使用定制**ASIC**设计了一款可穿戴脉冲发生器（PG）设备，用于**镇痛神经刺激**。该PG测量注入电极的阻抗，并调整电流脉冲以减缓电极的退化。
- 设计了一款用于电流脉冲生成的**电流舵数模转换器（DAC）**。该DAC可生成**±4mA**的电流脉冲，误差为15.6μA，**线性失配 ≤1%**。
- 为**SPI通信**设计了一个**数字电路系统**。设计了一个**有限状态机（FSM）**来决定PG的工作操作。使用16个**内部寄存器**（每个8位宽）来存储脉冲周期。
- 使用**台积电180纳米**技术实现了该PG。使用**Altium Designer**为PG设计了**PCB**。
- 系统峰值功率为**26.4mW**。进行了一项**体外研究**，该PG将电极寿命从30小时延长至80多小时。

#### 具有耦合节律的硬件仿生神经元网络

- 设计并实现了一个具有非线性多时间尺度神经元模型的5神经元网络的**模拟电路**。将该网络应用于**中央模式发生器（CPG）**以控制机器人。
- 使用定制设计的**运算跨导放大器（OTA）**和**Cadence Virtuoso**构建了神经元。神经元网络在**CALIBRE DRC**和**LVS**中均得到验证。
- 该网络使用**台积电180纳米技术**在一个2mm × 1mm的芯片上实现。该芯片焊接在定制的**印刷电路板（PCB）**上。
- 使用**Verilog**程序测试了神经元网络芯片。执行了**版图后提取**和**验证**，以确保多神经元网络中的信号完整性，实现了200-1000Hz的尖峰频率。抑制节律产生的波形应用于一只狗机器人，使其跳跃。

#### 非线性混合反馈神经元芯片设计与测试

- 使用**台积电180纳米**工艺构建并实现了一个混合反馈**CMOS电路**。
- 使用定制设计的PCB测试了该电路。该芯片由**FPGA开发板**控制。FPGA在**Xilinx Vivado**中使用**Verilog RTL**代码进行编程。
- 测试的神经元电路以31.4μW的功率生成**仿生行为**。它展示了大规模集成神经元网络硬件的潜力。

## 工作经历

- **研究生研究助理**
  *匹兹堡大学，匹兹堡，宾夕法尼亚州，美国*
  *2021年1月 - 至今*

## 联系方式

- **Email**: [connie@ggeta.com](mailto:connie@ggeta.com)
- **Academic Email**: [connie.liu@pitt.edu](mailto:connie.liu@pitt.edu)
- **LinkedIn**: [linkedin.com/in/kangni-liu-7975b41b5](https://www.linkedin.com/in/kangni-liu-7975b41b5/)

## Publications

1. K. Liu, S. Hashemkhani, J. Rubin and R. Kubendran, "BioNN: Bio-Mimetic Neural Networks on Hardware Using Nonlinear Multi-Timescale Mixed-Feedback Control for Neuromodulatory Bursting Rhythms," in *IEEE Journal on Emerging and Selected Topics in Circuits and Systems*, vol. 13, no. 4, pp. 914-926, Dec. 2023, doi: 10.1109/JETCAS.2023.3330084.

2. K. Liu, S. Hashemkhani, J. Rubin and R. Kubendran, "Neuromorphic Networks using Nonlinear Mixed-feedback Multi-timescale Bio-mimetic Neurons," *2023 IEEE International Symposium on Circuits and Systems (ISCAS)*, Monterey, CA, USA, 2023, pp. 1-5, doi: 10.1109/ISCAS46773.2023.10182201.

3. K. Liu, A. Gormaley, K. Woeppel, T. Emerick, X. T. Cui and R. Kubendran, "Programmable Pulse Generator for Pain Relief Stimulation using Bioresorbable Electrodes," *2023 IEEE Biomedical Circuits and Systems Conference (BioCAS)*, Toronto, ON, Canada, 2023, pp. 1-5, doi: 10.1109/BioCAS58349.2023.10389016.

4. K. Liu, G. Chen, K. Woeppel, X. T. Cui, and R. Kubendran, "Active Impedance Monitoring in Programmable Stimulator for Closed-Loop Charge Balancing," *submitted*.

5. G. Chen, Z.-H. Mao, M. Sun, K. Liu, and W. Jia, "Shape-preserving generation of food images for automatic dietary assessment," in *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)*, Seattle, WA, USA, pp. 3721-3731, June 2024.

6. G. Chen, M. Sun, Z.-H. Mao, K. Liu, and W. Jia, "Mechanisms of generative image-to-image translation networks," *submitted*, Nov 2024.