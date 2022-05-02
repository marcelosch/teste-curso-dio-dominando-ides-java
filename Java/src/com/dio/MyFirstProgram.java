package com.dio;

import java.math.BigDecimal;

/**
 * @author Marcelo Schenkel
 * @version 1.0.0
 * @see BigDecimal
 * @since 1.0.0
 */

import java.security.CodeSigner;

import com.dio.base.Order;

public class MyFirstProgram {

    public static void main(String[] args) {
        final Order order = new Order("code1234");
        System.out.println(order);
    }
}