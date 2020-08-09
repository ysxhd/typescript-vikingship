import React, { useContext, FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../ConfigProvider';
// import './index.less';
import './index.scss';

// 按钮大小
// enum ButtonSize {
//     Large = 'lg',
//     Middle = 'ml',
//     Small = 'sm',
// };
export type ButtonSize = 'lg' | 'ml' | 'sm';

// 按钮类型
// enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link',
// };
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

// 定义组件属性
export interface BaseButtonProps {
    className?: string;
    /**设置 Button 是否禁用*/
    disabled?: boolean;
    /**设置 Button 大小*/
    size?: string;
    /**设置 Button 类型*/
    btnType?: string;
    children: React.ReactChild;
    href?: string;
};

// 扩展按钮属性，如 onClick...
// & ： typeScript 中联合类型，表示两种类型都要。 | 或：两个取其中一个
// Partial<> : typeScript 中提供，把属性变成可选的
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 这是我们的一个Button组件
 */
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        disabled,
        size,
        btnType,
        children,
        href,
        ...restProps
    } = props;

    const classes = classNames('vik-btn', {
        [`vik-btn-${btnType}`]: !!btnType,
        [`vik-btn-${size}`]: !!size,
        'vik-disabled': (btnType === 'link') && disabled
    }, className);

    if (btnType === 'link' && href) {
        return (
            <a 
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        );
    }

    const config = useContext(ConfigContext);

    return (
        <button 
            className={classes}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    );
};

// 默认属性
Button.defaultProps = {
    disabled: false,
    btnType: 'default',
    size: 'large',
};

export default Button;
